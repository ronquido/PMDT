import * as React from "react";
import { KeyRound, Loader2, Lock, LogOut } from "lucide-react";
import { useAccess } from "@/lib/access-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function formatDate(iso: string): string {
  try {
    return new Date(`${iso}T00:00:00`).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function AccessGate() {
  const { status, submit, expiresOn, logout } = useAccess();
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!code.trim() || loading) return;
      setLoading(true);
      setError(null);
      const result = await submit(code.trim());
      if (!result.ok) {
        setError(result.error ?? "Código incorrecto.");
        setLoading(false);
      }
    },
    [code, loading, submit],
  );

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        background:
          "radial-gradient(1200px 600px at 50% -10%, var(--color-accent), transparent 60%), var(--color-background)",
      }}
    >
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
              <KeyRound className="h-6 w-6" />
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              PMDT · Contenido restringido
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight">
              Introduce tu código de acceso
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              El contenido de este sitio está reservado. Usa el código que has recibido para
              continuar. Cada código tiene una fecha de caducidad.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border bg-card p-6 shadow-sm"
          >
            <label htmlFor="acceso" className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Lock className="h-4 w-4 text-muted-foreground" />
              Código de acceso
            </label>
            <Input
              id="acceso"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="PMDT2026"
              autoComplete="off"
              autoCapitalize="characters"
              className="h-12 text-lg tracking-widest"
              disabled={loading}
            />
            {error && <p className="mt-3 text-sm font-medium text-destructive">{error}</p>}
            <Button type="submit" className="mt-5 h-12 w-full text-base" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Verificando…
                </>
              ) : (
                "Entrar"
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            ¿Quieres un código? Contacta con el responsable del sitio.
          </p>
        </div>
      </div>

      {status === "granted" && expiresOn && (
        <div className="border-t bg-card/60 px-6 py-4">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Acceso válido hasta el {formatDate(expiresOn)}
            </span>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}