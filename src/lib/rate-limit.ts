type RateLimitRecord = {
  count: number;
  expiresAt: number;
};

const store = new Map<string, RateLimitRecord>();

export async function checkRateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const record = store.get(key);

  if (!record || record.expiresAt <= now) {
    store.set(key, { count: 1, expiresAt: now + windowMs });
    return { success: true, remaining: limit - 1, reset: now + windowMs };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, reset: record.expiresAt };
  }

  record.count += 1;
  store.set(key, record);
  return { success: true, remaining: limit - record.count, reset: record.expiresAt };
}

export function resetRateLimitStore() {
  store.clear();
}

