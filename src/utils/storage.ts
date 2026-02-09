export function readNumber(key: string, fallback: number | null): number | null {
  const raw = localStorage.getItem(key);
  if (raw == null) return fallback;
  const value = Number(raw);
  return Number.isFinite(value) ? value : fallback;
}

export function writeNumber(key: string, value: number) {
  localStorage.setItem(key, String(value));
}
