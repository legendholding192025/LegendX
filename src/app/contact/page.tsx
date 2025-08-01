"use client"

import Image from 'next/image';
import ContactForm from "@/components/ui/ContactForm";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react"

export default function ContactPage() {

  return (
    <main>
      {/* Contact Banner */}
      <section className="relative w-full h-64 sm:h-72 md:h-64 lg:h-72">
        <Image
          src="https://cdn.legendholding.com/images/cdn_687a0576add895.66879957_20250718_082734.png"
          alt="Contact Us Banner"
          fill
          className="object-cover w-full"
          priority
          sizes="100vw"
        />
        {/* Centered Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pt-16 sm:pt-20">
          <Image
            src="https://cdn.legendholding.com/images/cdn_687a1f4c67df37.03007310_20250718_101748.png"
            alt="Contact Us"
            width={400}
            height={200}
            className="object-contain w-56 sm:w-72 md:w-80 lg:w-96"
            priority
          />
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.legendholding.com/images/cdn_687a26aa467e88.57510195_20250718_104914.png"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          {/* Header and Cards Container */}
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-6 sm:mb-8 lg:mb-12">
                 <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5D376E] mb-2">Get in Touch</h1>
                 <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                    For more information please share your details and one of our representative will contact you shortly. 
                  </p>
            </div>

            {/* Cards Container */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Form Card */}
            <div className="order-2 lg:order-1">
              <ContactForm 
                defaultServiceType="rental"
                bgColor="bg-[rgb(43,28,72)]/70"
                textColor="text-white"
                inputBgColor="bg-white"
                inputTextColor="text-[#2B1C48]"
                className="hover:bg-[rgb(43,28,72)]/80"
              />
            </div>

            {/* Office Information Card */}
            <div className="bg-[rgb(43,28,72)]/70 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl flex flex-col h-full order-1 lg:order-2 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] hover:bg-[rgb(43,28,72)]/80">
              <div className="mb-4">
                <h2 className="text-white text-base sm:text-lg font-medium mb-1">Our Location</h2>
                <h3 className="text-white text-xl sm:text-2xl font-bold">Visit Our Office</h3>
                <div className="w-12 h-1 bg-orange-500 mt-2"></div>
              </div>

              <div className="space-y-3 mb-4 flex-1">
                {/* Phone */}
                <div className="bg-white rounded-lg p-2.5 flex items-center gap-3 transition-all duration-200 hover:shadow-md hover:scale-[1.02] min-h-[60px]">
                  <div className="bg-[rgb(43,28,72)] p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-custom-yellow" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Phone</p>
                    <a href="tel:+97142340738" className="text-[#2B1C48] font-normal hover:text-orange-500 transition-colors duration-200 text-sm sm:text-base">
                      +971 4 234 0738
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-lg p-2.5 flex items-center gap-3 transition-all duration-200 hover:shadow-md hover:scale-[1.02] min-h-[60px]">
                  <div className="bg-[rgb(43,28,72)] p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-custom-yellow" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Email</p>
                    <a href="mailto:info@legendx.com" className="text-[#2B1C48] font-normal hover:text-orange-500 transition-colors duration-200 text-sm sm:text-base">
                      info@legendx.ae
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-lg p-2.5 flex items-start gap-3 transition-all duration-200 hover:shadow-md hover:scale-[1.02] min-h-[70px]">
                  <div className="bg-[rgb(43,28,72)] p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-custom-yellow" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Address</p>
                    <p className="text-[#2B1C48] font-normal text-sm sm:text-base">
                      Showroom 46, Al Awir New Auto Market,
                      <br />
                      Ras al Khor - Dubai
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-lg p-2.5 flex items-start gap-3 transition-all duration-200 hover:shadow-md hover:scale-[1.02] min-h-[75px]">
                  <div className="bg-[rgb(43,28,72)] p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-custom-yellow" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Business Hours</p>
                    <p className="text-[#2B1C48] font-normal text-sm sm:text-base">Monday - Saturday : 9:00 AM - 6:00 PM</p>
                    <p className="text-[#2B1C48] font-normal text-sm sm:text-base mt-1">Sunday is a holiday</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://maps.app.goo.gl/39d8x6kk149aqUPs9', '_blank')}
                className="w-full bg-[#F08900] hover:bg-[#d67a00] text-white py-3 rounded-lg transition-all duration-200 font-semibold text-base flex items-center justify-center gap-2 mt-auto cursor-pointer"
              >
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
} 