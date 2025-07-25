"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
            Visit our office or reach out to us through any of the following channels.
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
            <ContactUsFormCard />
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Us Form Card (standalone, for Home page)
function ContactUsFormCard() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+971",
    phoneNumber: "",
    productOfInterest: "",
    serviceType: "rental",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // You can add your own logic or API call
    alert("Form submitted! (Demo)");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="rounded-3xl p-5 shadow-2xl flex flex-col h-auto w-full max-w-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
      <div className="mb-4">
        <h2 className="text-[rgb(43,28,72)] text-lg font-medium mb-1 font-heading">Contact Us</h2>
        <h3 className="text-[rgb(43,28,72)] text-2xl font-bold font-heading">Fill the Form</h3>
        <div className="w-12 h-1 bg-orange-500 mt-2"></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
        <div>
          <Input
            type="text"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className="bg-white !bg-white border-0 rounded-lg h-12 text-gray-900 placeholder:text-gray-500 transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:scale-[1.02]"
            required
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="bg-white !bg-white border-0 rounded-lg h-12 text-gray-900 placeholder:text-gray-500 transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:scale-[1.02]"
            required
          />
        </div>
        <div className="flex gap-2">
          <select
            value={formData.countryCode}
            onChange={(e) => handleInputChange("countryCode", e.target.value)}
            className="w-20 bg-white border-0 rounded-lg h-12 text-gray-900 px-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 focus:scale-[1.02]"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+971">+971</option>
          </select>
          <Input
            type="tel"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            className="flex-1 bg-white !bg-white border-0 rounded-lg h-12 text-gray-900 placeholder:text-gray-500 transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:scale-[1.02]"
            required
          />
        </div>
        <div>
          <select
            value={formData.productOfInterest}
            onChange={(e) => handleInputChange("productOfInterest", e.target.value)}
            className="w-full bg-white border-0 rounded-lg h-12 text-gray-900 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 focus:scale-[1.02]"
          >
            <option value="">Select Product of Interest</option>
            <option value="G1 Humanoid Robot">G1 Humanoid Robot</option>
            <option value="GO1 Quadruped Robot">GO1 Quadruped Robot</option>
            <option value="B1 Quadruped Robot">B1 Quadruped Robot</option>
          </select>
        </div>
        <div className="bg-white rounded-lg p-3">
          <Label className="text-gray-700 font-medium mb-3 block">Service Type</Label>
          <div className="flex gap-6">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="rental"
                name="serviceType"
                value="rental"
                checked={formData.serviceType === "rental"}
                onChange={(e) => handleInputChange("serviceType", e.target.value)}
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 transition-all duration-200 hover:scale-110"
              />
              <Label htmlFor="rental" className="text-gray-700 cursor-pointer">
                Rental
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="purchase"
                name="serviceType"
                value="purchase"
                checked={formData.serviceType === "purchase"}
                onChange={(e) => handleInputChange("serviceType", e.target.value)}
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 transition-all duration-200 hover:scale-110"
              />
              <Label htmlFor="purchase" className="text-gray-700 cursor-pointer">
                Purchase
              </Label>
            </div>
          </div>
        </div>
        <div>
          <textarea
            placeholder="Please share your message..."
            className="w-full bg-white !bg-white border-0 rounded-lg h-24 text-gray-900 placeholder:text-gray-500 px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:scale-[1.02] resize-none"
            rows={4}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-[#F08900] hover:bg-[#d67a00] text-white py-3 rounded-lg transition-all duration-200 font-semibold text-base mt-auto"
        >
          Submit
        </Button>
      </form>
    </div>
  );
} 