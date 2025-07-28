"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ContactFormProps {
  defaultServiceType?: "rental" | "purchase"
  defaultProductOfInterest?: string
  products?: string[]
  className?: string
  title?: string
  subtitle?: string
  bgColor?: string
  textColor?: string
  inputBgColor?: string
  inputTextColor?: string
  serviceTypes?: ("rental" | "purchase")[]
}

export default function ContactForm({
  defaultServiceType = "rental",
  defaultProductOfInterest = "",
  products = ["G1 Humanoid Robot", "GO1 Quadruped Robot", "B1 Quadruped Robot"],
  className = "",
  title = "Contact Us",
  subtitle = "Fill the Form",
  bgColor = "bg-[rgb(43,28,72)]/90",
  textColor = "text-white",
  inputBgColor = "bg-white",
  inputTextColor = "text-[#2B1C48]",
  serviceTypes = ["rental", "purchase"]
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+971",
    phoneNumber: "",
    productOfInterest: defaultProductOfInterest,
    serviceType: defaultServiceType,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been submitted successfully. We will contact you soon.'
        });
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          countryCode: "+971",
          phoneNumber: "",
          productOfInterest: defaultProductOfInterest,
          serviceType: defaultServiceType,
          message: "",
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className={`rounded-3xl p-5 shadow-2xl flex flex-col h-auto w-full max-w-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] ${bgColor} ${className}`}>
      <div className="mb-4">
        <h2 className={`${textColor} text-lg font-medium mb-1 font-heading`}>{title}</h2>
        <h3 className={`${textColor} text-2xl font-bold font-heading`}>{subtitle}</h3>
        <div className="w-12 h-1 bg-orange-500 mt-2"></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
        <div>
          <Input
            type="text"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className={`${inputBgColor} !${inputBgColor} border-0 rounded-lg h-12 ${inputTextColor} placeholder:text-gray-500 transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:scale-[1.02]`}
            required
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`${inputBgColor} !${inputBgColor} border-0 rounded-lg h-12 ${inputTextColor} placeholder:text-gray-500 transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:scale-[1.02]`}
            required
          />
        </div>
        <div className="flex gap-2">
          <select
            value={formData.countryCode}
            onChange={(e) => handleInputChange("countryCode", e.target.value)}
            className={`w-20 ${inputBgColor} border-0 rounded-lg h-12 ${inputTextColor} px-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 focus:scale-[1.02]`}
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
            className={`flex-1 ${inputBgColor} !${inputBgColor} border-0 rounded-lg h-12 ${inputTextColor} placeholder:text-gray-500 transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:scale-[1.02]`}
            required
          />
        </div>
        <div>
          <select
            value={formData.productOfInterest}
            onChange={(e) => handleInputChange("productOfInterest", e.target.value)}
            className={`w-full ${inputBgColor} border-0 rounded-lg h-12 ${inputTextColor} px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 focus:scale-[1.02]`}
          >
            <option value="">Select Product of Interest</option>
            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>
        <div className={`${inputBgColor} rounded-lg p-3`}>
          <div className="flex items-center gap-6">
            <Label className="text-gray-700 font-medium">Service Type:</Label>
            <div className="flex gap-6">
              {serviceTypes.includes("rental") && (
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
              )}
              {serviceTypes.includes("purchase") && (
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
              )}
            </div>
          </div>
        </div>
        <div>
          <textarea
            placeholder="Please share your message..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`w-full ${inputBgColor} !${inputBgColor} border-0 rounded-lg h-24 ${inputTextColor} placeholder:text-gray-500 px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:scale-[1.02] resize-none`}
            rows={4}
          />
        </div>
        
        {/* Status Message */}
        {submitStatus.type && (
          <div className={`p-3 rounded-lg text-sm ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#F08900] hover:bg-[#d67a00] disabled:bg-gray-400 text-white py-3 rounded-lg transition-all duration-200 font-semibold text-base mt-auto"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
} 