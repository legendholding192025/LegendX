'use client';

import { Suspense, lazy, ComponentType, ReactNode } from 'react';
import { usePerformanceTracking } from '@/lib/performance';

interface PerformanceWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  componentName?: string;
}

// Default loading fallback
const DefaultFallback = () => (
  <div className="flex items-center justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5E366D]"></div>
  </div>
);

// Performance wrapper component
export function PerformanceWrapper({ 
  children, 
  fallback = <DefaultFallback />,
  componentName = 'Component'
}: PerformanceWrapperProps) {
  const { trackRender } = usePerformanceTracking(componentName);

  return (
    <Suspense fallback={fallback}>
      <div onLoad={trackRender}>
        {children}
      </div>
    </Suspense>
  );
}

// Lazy load wrapper for components
export function lazyLoadComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  componentName: string
) {
  const LazyComponent = lazy(importFunc);
  
  return function LazyWrapper(props: React.ComponentProps<T>) {
    const { trackRender } = usePerformanceTracking(componentName);
    
    return (
      <Suspense fallback={<DefaultFallback />}>
        <div onLoad={trackRender}>
          <LazyComponent {...props} />
        </div>
      </Suspense>
    );
  };
}

// Intersection Observer wrapper for lazy loading
export function useIntersectionObserver(
  callback: () => void,
  options: IntersectionObserverInit = {}
) {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  };

  return (node: HTMLElement | null) => {
    if (node) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.unobserve(entry.target);
          }
        });
      }, defaultOptions);

      observer.observe(node);
    }
  };
}

// Error boundary for performance monitoring
export function withErrorBoundary<P extends object>(
  Component: ComponentType<P>,
  fallback?: ReactNode
) {
  return function ErrorBoundaryWrapper(props: P) {
    const { trackRender } = usePerformanceTracking(Component.name || 'ErrorBoundaryComponent');
    
    try {
      return (
        <div onLoad={trackRender}>
          <Component {...props} />
        </div>
      );
    } catch (error) {
      console.error('Component error:', error);
      return fallback || <div>Something went wrong</div>;
    }
  };
} 