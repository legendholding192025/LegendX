"use client"

import Image from "next/image"
import ContactForm from "@/components/ui/ContactForm"

export default function ContactFormSection() {
  return (
    <section 
      className="relative py-16 px-4"
      style={{
        backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_687a26aa467e88.57510195_20250718_104914.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10 min-h-[320px]">
        {/* Heading Above Everything */}
        <div className="text-left mb-8">
          <h1 className="text-4xl font-bold text-[rgb(43,28,72)] mb-2 font-heading">Get in Touch</h1>
          <p className="text-lg text-[rgb(43,28,72)]">
            For more information please share your details and one of our representative will contact you shortly.
          </p>
        </div>
        
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Image
              src="https://cdn.legendholding.com/images/cdn_687a1f4c67df37.03007310_20250718_101748.png"
              alt="Contact Image"
              width={400}
              height={300}
              className="w-full max-w-md h-auto object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              quality={90}
            />
          </div>
          {/* Right Side: Contact Us Form Card */}
          <div className="flex-1 flex justify-center md:justify-end">
            <ContactForm 
              defaultServiceType="rental"
              bgColor="bg-transparent"
              textColor="text-[rgb(43,28,72)]"
              inputBgColor="bg-white"
              inputTextColor="text-gray-900"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 