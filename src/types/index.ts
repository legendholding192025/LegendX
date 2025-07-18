export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin' | 'moderator';
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: User;
  publishedAt: Date;
  updatedAt: Date;
  tags: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: Date;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: PaginationParams;
} 