const STORAGE_KEY = "pmdt.access.v1";

export type AccessState = {
  token: string;
  expiresOn: string;
};

function isExpired(access: AccessState): boolean {
  const today = new Date().toISOString().slice(0, 10);
  return access.expiresOn < today;
}

export function loadAccess(): AccessState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const access = JSON.parse(raw) as AccessState;
    if (!access?.token || !access?.expiresOn) return null;
    return access;
  } catch {
    return null;
  }
}

export function saveAccess(access: AccessState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(access));
}

export function clearAccess(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function isValidAccess(access: AccessState | null): boolean {
  return Boolean(access && !isExpired(access));
}
