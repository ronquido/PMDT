import * as React from "react";
import { loadAccess, saveAccess, clearAccess, isValidAccess, type AccessState } from "./access";

type Status = "loading" | "granted" | "denied";

type AccessContextValue = {
  status: Status;
  access: AccessState | null;
  expiresOn: string | null;
  submit: (code: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
};

const AccessContext = React.createContext<AccessContextValue | null>(null);

type ValidateResponse =
  | { valid: true; token: string; expiresOn: string }
  | { valid: false; reason: "invalid" | "expired" };

export function AccessProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = React.useState<Status>("loading");
  const [access, setAccess] = React.useState<AccessState | null>(null);

  React.useEffect(() => {
    const stored = loadAccess();
    if (isValidAccess(stored)) {
      setAccess(stored);
      setStatus("granted");
    } else {
      clearAccess();
      setStatus("denied");
    }
  }, []);

  const submit = React.useCallback(async (code: string) => {
    let res: Response;
    try {
      res = await fetch("/api/validate-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
    } catch {
      return { ok: false, error: "No se pudo conectar. Inténtalo de nuevo." };
    }

    if (!res.ok) return { ok: false, error: "Error del servidor. Inténtalo de nuevo." };

    const data = (await res.json()) as ValidateResponse;
    if (!data.valid) {
      return {
        ok: false,
        error: data.reason === "expired" ? "Este código ha caducado." : "Código incorrecto.",
      };
    }

    const next: AccessState = { token: data.token, expiresOn: data.expiresOn };
    saveAccess(next);
    setAccess(next);
    setStatus("granted");
    return { ok: true };
  }, []);

  const logout = React.useCallback(() => {
    clearAccess();
    setAccess(null);
    setStatus("denied");
  }, []);

  const value = React.useMemo<AccessContextValue>(
    () => ({
      status,
      access,
      expiresOn: access?.expiresOn ?? null,
      submit,
      logout,
    }),
    [status, access, submit, logout],
  );

  return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>;
}

export function useAccess(): AccessContextValue {
  const ctx = React.useContext(AccessContext);
  if (!ctx) throw new Error("useAccess must be used within <AccessProvider>");
  return ctx;
}
