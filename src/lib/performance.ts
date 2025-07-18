// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Track Core Web Vitals
  trackCoreWebVitals() {
    if (typeof window === 'undefined') return;

    // Track Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.set('lcp', lastEntry.startTime);
      this.logMetric('LCP', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const firstInputEntry = entry as PerformanceEventTiming;
        this.metrics.set('fid', firstInputEntry.processingStart - firstInputEntry.startTime);
        this.logMetric('FID', firstInputEntry.processingStart - firstInputEntry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.set('cls', clsValue);
      this.logMetric('CLS', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }

  // Track custom metrics
  trackCustomMetric(name: string, value: number) {
    this.metrics.set(name, value);
    this.logMetric(name, value);
  }

  // Track page load time
  trackPageLoad() {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.trackCustomMetric('pageLoad', loadTime);
    });
  }

  // Track component render time
  trackComponentRender(componentName: string, startTime: number) {
    const renderTime = performance.now() - startTime;
    this.trackCustomMetric(`${componentName}Render`, renderTime);
  }

  // Track API response time
  trackApiCall(endpoint: string, startTime: number) {
    const responseTime = performance.now() - startTime;
    this.trackCustomMetric(`${endpoint}Response`, responseTime);
  }

  // Get all metrics
  getMetrics(): Map<string, number> {
    return new Map(this.metrics);
  }

  // Log metric to console (in development)
  private logMetric(name: string, value: number) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 ${name}: ${value.toFixed(2)}ms`);
    }
  }

  // Send metrics to analytics (production)
  sendMetricsToAnalytics() {
    if (process.env.NODE_ENV === 'production') {
      // Send to your analytics service
      const metrics = Object.fromEntries(this.metrics);
      // Example: sendToAnalytics(metrics);
    }
  }
}

// Hook for tracking component performance
export function usePerformanceTracking(componentName: string) {
  const startTime = performance.now();
  
  return {
    trackRender: () => {
      PerformanceMonitor.getInstance().trackComponentRender(componentName, startTime);
    },
    trackApiCall: (endpoint: string, startTime: number) => {
      PerformanceMonitor.getInstance().trackApiCall(endpoint, startTime);
    },
  };
}

// Initialize performance monitoring
export function initializePerformanceMonitoring() {
  const monitor = PerformanceMonitor.getInstance();
  monitor.trackCoreWebVitals();
  monitor.trackPageLoad();
  
  // Send metrics on page unload
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => {
      monitor.sendMetricsToAnalytics();
    });
  }
} 