"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function GO1SpecsPage() {

  return (
    <main>
      {/* Banner Section */}
      <section className="relative w-full h-[36rem] md:h-[42rem] lg:h-[48rem] overflow-hidden">
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="https://cdn.legendholding.com/videos/video_cdn_687f73a8d578e9.07257181_20250722_111904.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-700 ease-in-out" style={{ transform: 'translateY(-25%)' }}>
            {/* Centered Text Overlay */}
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B1C48] mb-4 transition-all duration-500">
                Welcome To The Future
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* GO1 Specs Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#5E366D] mb-4 text-center">GO1 Specs</h2>
      <div className="w-24 h-1 bg-[#EE8900] mx-auto rounded-full mb-6"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Row - Left: Video, Right: Text */}
          <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="https://cdn.legendholding.com/videos/video_cdn_687f77729fa682.38574402_20250722_113514.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="bg-[#2B1C48] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">ISS Intelligent Concomitant System</h3>
            <p className="text-white/80 mb-6">Adopt patented wireless vector positioning and control technology</p>
            
            <div className="inline-block bg-[#EE8900] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Advantages
            </div>
            
            <ol className="space-y-4 text-white/90">
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">1.</span>
                <span>The robot is in the person's lateral peripheral vision, it is better than the conventional follow mode with natural human-computer interaction, safe and secure.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">2.</span>
                <span>No need to always look back and worry about whether the robot is lost or encounters obstacles.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">3.</span>
                <span>When the environment is complex, people can actively choose a simpler route to help the robot pass.</span>
              </li>
            </ol>
          </div>

          {/* Second Row - Left: Text, Right: Video */}
          <div className="bg-[#EE8900] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Robust and Reliable Powertrain</h3>
            
            <div className="inline-block bg-[#2B1C48] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Flexible and Adaptive Joints
            </div>
            
            <ol className="space-y-4 text-white/90">
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">1.</span>
                <span>The new patented design of ultra-lightweight low-noise long-life power joints.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">2.</span>
                <span>Body/Thigh Joint C520:8-1g 23.70N.m (MAX).</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">3.</span>
                <span>Knee Joint C1.5×8-1 ratio 35.55N.m (MAX).</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">4.</span>
                <span>A patented heat pipe-assisted heat dissipation system is built into the vicinity of the knee joint motor.</span>
              </li>
            </ol>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="https://cdn.legendholding.com/videos/video_cdn_687f7797c17188.21633583_20250722_113551.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Additional GO1 AI Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
            <Image
              src="https://cdn.legendholding.com/images/cdn_687f78bc05b312.14723088_20250722_114044.jpg"
              alt="GO1 AI Capabilities"
              width={600}
              height={400}
              className="w-full h-full object-cover scale-75"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={90}
            />
          </div>

          <div className="bg-[#2B1C48] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">GO1 with Built-in Super AI</h3>
            
            <div className="inline-block bg-[#EE8900] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Hash Rate
            </div>
            
            <div className="space-y-4 text-white/90">
              <p className="text-lg font-semibold text-white">
                Total: 16-core top CPU + GPU (384Core, 1.5TFLOPS)
              </p>
              <p className="text-white/80">
                1. Reference, NVIDIA TX2 only has CPU (4 cores) + GPU (256Core, 1.3TFLOPS), and the unit price of the chip is chargeable as an add-on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section
        className="w-full py-10 relative"
        style={{
          backgroundImage: 'url(https://cdn.legendholding.com/images/cdn_687a26aa467e88.57510195_20250718_104914.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 relative z-10 min-h-[320px]">
          {/* Heading Above Everything */}
          <div className="text-left mb-8">
            <h1 className="text-4xl font-bold text-[rgb(43,28,72)] mb-2">Get in Touch</h1>
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
    </main>
  );
}

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
    alert("Form submitted! (Demo)");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="rounded-3xl p-5 shadow-2xl flex flex-col h-auto w-full max-w-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
      <div className="mb-4">
        <h2 className="text-[rgb(43,28,72)] text-lg font-medium mb-1">Contact Us</h2>
        <h3 className="text-[rgb(43,28,72)] text-2xl font-bold">Fill the Form</h3>
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
            <option value="GO1 Quadruped Robot">GO1 Quadruped Robot</option>
            <option value="G1 Humanoid Robot">G1 Humanoid Robot</option>
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