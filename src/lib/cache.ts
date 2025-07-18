// Caching utilities for better performance
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class Cache {
  private static instance: Cache;
  private cache: Map<string, CacheEntry<any>> = new Map();
  private readonly defaultTTL = 5 * 60 * 1000; // 5 minutes

  static getInstance(): Cache {
    if (!Cache.instance) {
      Cache.instance = new Cache();
    }
    return Cache.instance;
  }

  set<T>(key: string, data: T, ttl: number = this.defaultTTL): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    const isExpired = Date.now() - entry.timestamp > entry.ttl;
    
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

// API caching wrapper
export async function cachedFetch<T>(
  url: string,
  options: RequestInit = {},
  ttl: number = 5 * 60 * 1000
): Promise<T> {
  const cache = Cache.getInstance();
  const cacheKey = `fetch:${url}:${JSON.stringify(options)}`;
  
  // Check cache first
  const cachedData = cache.get<T>(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  // Fetch fresh data
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  // Cache the result
  cache.set(cacheKey, data, ttl);
  
  return data;
}

// Component data caching
export function useCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 5 * 60 * 1000
): { data: T | null; loading: boolean; error: Error | null } {
  const cache = Cache.getInstance();
  const cachedData = cache.get<T>(key);
  
  if (cachedData) {
    return { data: cachedData, loading: false, error: null };
  }

  // In a real implementation, you'd use React state here
  // This is a simplified version
  return { data: null, loading: true, error: null };
}

// Static data caching
export const staticCache = {
  set: <T>(key: string, data: T) => Cache.getInstance().set(key, data, Infinity),
  get: <T>(key: string) => Cache.getInstance().get<T>(key),
  has: (key: string) => Cache.getInstance().has(key),
  delete: (key: string) => Cache.getInstance().delete(key),
};

// Preload critical data
export function preloadCriticalData() {
  // Preload essential data that will be needed
  const criticalData = [
    '/api/products',
    '/api/partners',
    '/api/company-info',
  ];

  criticalData.forEach(url => {
    cachedFetch(url, {}, 10 * 60 * 1000); // 10 minutes TTL
  });
}

export default Cache; 