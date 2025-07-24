// Performance configuration for LegendX
export const PERFORMANCE_CONFIG = {
  // Core Web Vitals thresholds
  coreWebVitals: {
    lcp: 2500, // Largest Contentful Paint (ms)
    fid: 100,  // First Input Delay (ms)
    cls: 0.1,  // Cumulative Layout Shift
  },

  // Image optimization
  images: {
    quality: 85,
    formats: ['image/webp', 'image/avif'],
    sizes: {
      thumbnail: '150px',
      small: '300px',
      medium: '600px',
      large: '1200px',
      hero: '1920px',
    },
    lazyLoading: {
      threshold: 0.1,
      rootMargin: '50px',
    },
  },

  // Caching strategies
  caching: {
    static: {
      ttl: 60 * 60 * 24 * 30, // 30 days
      maxAge: '31536000',
    },
    api: {
      ttl: 5 * 60, // 5 minutes
      maxAge: '300',
    },
    dynamic: {
      ttl: 60, // 1 minute
      maxAge: '60',
    },
  },

  // Bundle optimization
  bundle: {
    maxSize: 250 * 1024, // 250KB
    chunkSize: 50 * 1024, // 50KB
    preload: [
      '/api/products',
      '/api/partners',
    ],
  },

  // Animation performance
  animations: {
    duration: {
      fast: 150,
      normal: 300,
      slow: 500,
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    },
    reducedMotion: {
      duration: 0,
      easing: 'linear',
    },
  },

  // Network optimization
  network: {
    preconnect: [
      'https://cdn.legendholding.com',
    ],
    dnsPrefetch: [
      '//cdn.legendholding.com',
    ],
    preload: [
      '/logo/legendx-logo.svg',
    ],
  },

  // Monitoring
  monitoring: {
    enabled: process.env.NODE_ENV === 'production',
    sampleRate: 0.1, // 10% of users
    metrics: [
      'lcp',
      'fid',
      'cls',
      'ttfb',
      'fcp',
    ],
  },

  // SEO optimization
  seo: {
    structuredData: true,
    sitemap: true,
    robots: true,
    canonical: true,
  },

  // Security headers
  security: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    },
  },
} as const;

// Performance utilities
export const performanceUtils = {
  // Check if device supports reduced motion
  prefersReducedMotion: () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Check if device is low-end
  isLowEndDevice: () => {
    if (typeof navigator === 'undefined') return false;
    return navigator.hardwareConcurrency <= 4 || 
           (navigator as any).deviceMemory <= 4;
  },

  // Get optimal image quality based on device
  getOptimalImageQuality: () => {
    if (performanceUtils.isLowEndDevice()) {
      return 70;
    }
    return PERFORMANCE_CONFIG.images.quality;
  },

  // Get optimal animation duration based on preferences
  getOptimalAnimationDuration: (baseDuration: number) => {
    if (performanceUtils.prefersReducedMotion()) {
      return PERFORMANCE_CONFIG.animations.reducedMotion.duration;
    }
    return baseDuration;
  },

  // Check if connection is slow
  isSlowConnection: () => {
    if (typeof navigator === 'undefined') return false;
    const connection = (navigator as any).connection;
    return connection && (
      connection.effectiveType === 'slow-2g' ||
      connection.effectiveType === '2g' ||
      connection.effectiveType === '3g'
    );
  },
};

// Performance monitoring configuration
export const MONITORING_CONFIG = {
  // Real User Monitoring (RUM)
  rum: {
    enabled: PERFORMANCE_CONFIG.monitoring.enabled,
    sampleRate: PERFORMANCE_CONFIG.monitoring.sampleRate,
    metrics: PERFORMANCE_CONFIG.monitoring.metrics,
  },

  // Error tracking
  errorTracking: {
    enabled: true,
    sampleRate: 1.0, // Track all errors
    ignorePatterns: [
      /Script error/,
      /ResizeObserver loop limit exceeded/,
    ],
  },

  // API monitoring
  apiMonitoring: {
    enabled: true,
    timeout: 5000, // 5 seconds
    retryAttempts: 3,
  },
} as const; 