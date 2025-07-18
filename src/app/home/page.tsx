import HeroSection from '@/components/sections/HeroSection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import AboutSection from '@/components/sections/AboutSection';
import PartnersSection from '@/components/sections/PartnersSection';

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Product Showcase Section */}
      <ProductShowcase />
      
      {/* 3. About Section */}
      <AboutSection />
      
      {/* 4. Partners Section */}
      <PartnersSection />
    </main>
  );
} 