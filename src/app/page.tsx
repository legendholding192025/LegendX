import HeroSection from '@/components/sections/HeroSection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import AboutSection from '@/components/sections/AboutSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import ContactFormSection from '@/components/sections/ContactFormSection';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ProductShowcase />
      <AboutSection />
      <SolutionsSection />
      <PartnersSection />
      <ContactFormSection />
    </main>
  );
} 