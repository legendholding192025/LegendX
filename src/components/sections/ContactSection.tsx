"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+971",
    phoneNumber: "",
    productOfInterest: "",
    serviceType: "rental",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
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
                  Visit our office or reach out to us through any of the following channels.
                </p>
          </div>

          {/* Cards Container */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form Card */}
          <div className="bg-[rgb(43,28,72)]/70 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl flex flex-col h-full order-2 lg:order-1 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] hover:bg-[rgb(43,28,72)]/80">
            <div className="mb-4">
              <h2 className="text-white text-base sm:text-lg font-medium mb-1">Contact Us</h2>
              <h3 className="text-white text-xl sm:text-2xl font-bold">Fill the Form</h3>
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
                <Input
                  type="text"
                  placeholder="Product of Interest"
                  value={formData.productOfInterest}
                  onChange={(e) => handleInputChange("productOfInterest", e.target.value)}
                  className="bg-white !bg-white border-0 rounded-lg h-12 text-gray-900 placeholder:text-gray-500 transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:scale-[1.02]"
                />
              </div>

              <div className="bg-white rounded-lg p-3">
                <Label className="text-gray-700 font-medium mb-3 block">Service Type</Label>
                <div className="flex gap-4 sm:gap-6">
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
                    <Label htmlFor="rental" className="text-gray-700 cursor-pointer text-sm sm:text-base">
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
                    <Label htmlFor="purchase" className="text-gray-700 cursor-pointer text-sm sm:text-base">
                      Purchase
                    </Label>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#F08900] hover:bg-[#d67a00] text-white py-3 rounded-lg transition-all duration-200 font-semibold text-base mt-auto"
              >
                Submit
              </Button>
            </form>
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
              <div className="bg-white rounded-lg p-1.5 flex items-center gap-3 transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
                <div className="bg-[rgb(43,28,72)] p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-custom-yellow" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">Phone</p>
                  <a href="tel:+97142340738" className="text-gray-900 font-normal hover:text-orange-500 transition-colors duration-200 text-sm sm:text-base">
                    +971 4 234 0738
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg p-1.5 flex items-center gap-3 transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
                <div className="bg-[rgb(43,28,72)] p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-custom-yellow" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">Email</p>
                  <a href="mailto:info@legendx.com" className="text-gray-900 font-normal hover:text-orange-500 transition-colors duration-200 text-sm sm:text-base">
                    info@legendx.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-lg p-1.5 flex items-start gap-3 transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
                <div className="bg-[rgb(43,28,72)] p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-custom-yellow" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">Address</p>
                  <p className="text-gray-900 font-normal text-sm sm:text-base">
                    Legend Holding Group HQ, Jebel Ali Freezone
                    <br />
                    Gate 5, Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg p-1.5 flex items-center gap-3 transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
                <div className="bg-[rgb(43,28,72)] p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-custom-yellow" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">Business Hours</p>
                  <p className="text-gray-900 font-normal text-sm sm:text-base">Monday - Saturday : 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Legend+Holding+Group+Jebel+Ali+Freezone+Gate+5+Dubai', '_blank')}
              className="w-full bg-[#F08900] hover:bg-[#d67a00] text-white py-3 rounded-lg transition-all duration-200 font-semibold text-base flex items-center justify-center gap-2 mt-auto cursor-pointer"
            >
              Get Directions
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
} 