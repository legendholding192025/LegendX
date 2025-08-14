// Performance and SEO Constants
export const SITE_CONFIG = {
  name: 'LegendX',
  description: 'Cutting-edge technology and AI-driven innovations for advanced robotics solutions',
  url: 'https://legendx.ae',
  ogImage: '/logo/legendx-logo.svg',
  links: {
    twitter: '',
    github: '',
    linkedin: '',
  },
} as const;

// Image Optimization Constants
export const IMAGE_CONFIG = {
  quality: 85,
  formats: ['image/webp', 'image/avif'],
  sizes: {
    thumbnail: '150px',
    small: '300px',
    medium: '600px',
    large: '1200px',
    hero: '1920px',
  },
} as const;

// Animation Constants
export const ANIMATION_CONFIG = {
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
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  products: '/api/products',
  contact: '/api/contact',
  newsletter: '/api/newsletter',
} as const;

// Content Types
export const CONTENT_TYPES = {
  products: 'products',
  services: 'services',
  about: 'about',
  partners: 'partners',
} as const; 