import Image from 'next/image';
import ContactSection from '@/components/sections/ContactSection';

export default function ContactPage() {
  return (
    <main>
      {/* Contact Banner */}
      <section className="relative w-full h-56 md:h-64 lg:h-72">
        <Image
          src="https://cdn.legendholding.com/images/cdn_687a0576add895.66879957_20250718_082734.png"
          alt="Contact Us Banner"
          fill
          className="object-cover w-full"
          priority
          sizes="100vw"
        />
        {/* Centered Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pt-20">
          <Image
            src="https://cdn.legendholding.com/images/cdn_687a1f4c67df37.03007310_20250718_101748.png"
            alt="Contact Us"
            width={400}
            height={200}
            className="object-contain w-48 sm:w-64 md:w-auto lg:w-auto"
            priority
          />
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
    </main>
  );
} 