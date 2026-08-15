// Minimal signed-cookie session, built on the Web Crypto API so it works
// both in normal API routes and in Edge middleware without extra packages.

const encoder = new TextEncoder();

async function getKey() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export const SESSION_COOKIE = "admin_session";
const SESSION_LIFETIME_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

export async function createSessionToken(): Promise<string> {
  const expires = Date.now() + SESSION_LIFETIME_MS;
  const key = await getKey();
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(String(expires)));
  return `${expires}.${toHex(sig)}`;
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const [expiresStr, sigHex] = token.split(".");
  if (!expiresStr || !sigHex) return false;

  const expires = Number(expiresStr);
  if (!expires || Date.now() > expires) return false;

  const key = await getKey();
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(expiresStr));
  return toHex(sig) === sigHex;
}