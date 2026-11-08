import codesCsv from "../data/codes.csv?raw";

const enc = new TextEncoder();

const SECRET = process.env["PMDT_ACCESS_SECRET"] ?? "pmdt-codigo-cambia-en-produccion";

function b64encode(data: Uint8Array): string {
  return btoa(String.fromCharCode(...data)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64decode(text: string): Uint8Array {
  const base64 = text.replace(/-/g, "+").replace(/_/g, "/");
  const pad = base64.length % 4 === 0 ? "" : "=".repeat(4 - (base64.length % 4));
  const bin = atob(base64 + pad);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function importKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    enc.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function sign(payload: string): Promise<string> {
  const key = await importKey();
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(payload));
  return b64encode(new Uint8Array(sig));
}

async function verify(payload: string, signature: string): Promise<boolean> {
  try {
    const key = await importKey();
    return await crypto.subtle.verify("HMAC", key, b64decode(signature), enc.encode(payload));
  } catch {
    return false;
  }
}

type CodeRow = { code: string; expiresOn: string; note: string };

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function parseCsv(text: string): CodeRow[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"))
    .slice(1)
    .map((line) => {
      const cells: string[] = [];
      let current = "";
      let inQuotes = false;
      for (const ch of line) {
        if (ch === '"' && inQuotes && current.endsWith('"')) {
          current = current.slice(0, -1) + '"';
          continue;
        }
        if (ch === '"') {
          inQuotes = !inQuotes;
          continue;
        }
        if (ch === "," && !inQuotes) {
          cells.push(current.trim());
          current = "";
          continue;
        }
        current += ch;
      }
      cells.push(current.trim());
      return { code: cells[0] ?? "", expiresOn: cells[1] ?? "", note: cells[2] ?? "" };
    });
}

const rows = parseCsv(codesCsv);

function normalize(code: string): string {
  return code.trim().toUpperCase();
}

export type ValidateResult =
  | { valid: true; code: string; expiresOn: string; token: string }
  | { valid: false; reason: "invalid" | "expired" };

export async function validateCode(rawCode: unknown): Promise<ValidateResult> {
  const input = normalize(typeof rawCode === "string" ? rawCode : "");
  if (!input) return { valid: false, reason: "invalid" };

  const row = rows.find((r) => normalize(r.code) === input);
  if (!row) return { valid: false, reason: "invalid" };
  if (row.expiresOn < todayIso()) return { valid: false, reason: "expired" };

  const payload = `${row.code}:${row.expiresOn}`;
  const signature = await sign(payload);
  const token = `${b64encode(enc.encode(row.code))}.${row.expiresOn}.${signature}`;

  return { valid: true, code: row.code, expiresOn: row.expiresOn, token };
}

export async function verifyToken(rawToken: unknown): Promise<ValidateResult> {
  const token = typeof rawToken === "string" ? rawToken : "";
  const [encodedCode, expiresOn, signature] = token.split(".");
  if (!encodedCode || !expiresOn || !signature) return { valid: false, reason: "invalid" };

  let code: string;
  try {
    code = new TextDecoder().decode(b64decode(encodedCode));
  } catch {
    return { valid: false, reason: "invalid" };
  }

  const payload = `${code}:${expiresOn}`;
  const ok = await verify(payload, signature);
  if (!ok) return { valid: false, reason: "invalid" };
  if (expiresOn < todayIso()) return { valid: false, reason: "expired" };

  const row = rows.find((r) => normalize(r.code) === normalize(code));
  if (!row) return { valid: false, reason: "invalid" };

  return { valid: true, code: row.code, expiresOn, token };
}