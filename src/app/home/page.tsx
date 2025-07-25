import HeroSection from '@/components/sections/HeroSection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import AboutSection from '@/components/sections/AboutSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import ContactFormSection from '@/components/sections/ContactFormSection';

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Product Showcase Section */}
      <ProductShowcase />
      
      {/* 3. About Section */}
      <AboutSection />
      
      {/* 4. Solutions Section */}
      <SolutionsSection />
      
      {/* 5. Partners Section */}
      <PartnersSection />
      
      {/* 6. Contact Form Section */}
      <ContactFormSection />
    </main>
  );
} 