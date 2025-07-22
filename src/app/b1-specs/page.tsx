"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function B1SpecsPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoClose = () => {
    setIsVideoPlaying(false);
  };

  return (
    <main>
      {/* Banner Section */}
      <section className="relative w-full h-[36rem] md:h-[42rem] lg:h-[48rem] overflow-hidden">
        {!isVideoPlaying ? (
          <>
            <Image
              src="https://cdn.legendholding.com/images/cloudinary_687f390192ac92.63357689_20250722_070849.jpg"
              alt="B1 Specs Banner"
              fill
              className="object-cover w-full transition-all duration-700 ease-in-out"
              priority
              sizes="100vw"
              quality={100}
              style={{ objectPosition: 'center' }}
            />
            <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-700 ease-in-out">
              {/* Product Information Card - Right Side */}
              <div className="absolute right-12 md:right-20 lg:right-24 top-1/2 transform -translate-y-1/2 bg-[#2c1b47]/71 rounded-xl p-10 shadow-2xl border border-gray-700 max-w-md transition-all duration-700 ease-in-out transform hover:scale-105">
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-500">
                    <span className="text-5xl md:text-6xl">Unitree</span>
                    <br />
                    <span className="text-3xl md:text-4xl">B1</span>
                  </h1>
                  <p className="text-white text-lg mb-4 transition-all duration-500">Quadruped Robot</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-xl font-semibold mb-4 transition-all duration-500">
                    Price from $10K
                  </p>
                  <div className="w-full h-px bg-gradient-to-r from-purple-400 to-cyan-400 mb-6 transition-all duration-500"></div>
                  <div className="flex items-center justify-center mb-4">
                    <button 
                      onClick={handleVideoClick}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg border border-gray-600 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-110 hover:shadow-lg"
                    >
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Watch Video
                    </button>
                  </div>
                  <p className="text-white text-sm opacity-80 transition-all duration-500">
                    Continuous OTA Software Upgrade and Update
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="relative w-full h-full animate-fadeIn">
            <button
              onClick={handleVideoClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:bg-opacity-70 hover:scale-110 transform"
            >
              ×
            </button>
            <video
              className="w-full h-full object-contain animate-scaleIn"
              controls
              autoPlay
              muted
              src="https://cdn.legendholding.com/videos/video_cdn_687f71d27e7d72.66005474_20250722_111114.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </section>

      {/* B1 Robot Images Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image 1 - B1 on Concrete Blocks */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://cdn.legendholding.com/images/cdn_687f6d36cfe293.84571079_20250722_105134.jpg"
              alt="B1 Robot on Concrete Blocks"
              width={400}
              height={300}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Image 2 - B1 on Train Tracks */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://cdn.legendholding.com/images/cdn_687f6d45bc7273.03033435_20250722_105149.jpg"
              alt="B1 Robot on Train Tracks"
              width={400}
              height={300}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Image 3 - B1 Carrying Load */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://cdn.legendholding.com/images/cdn_687f6d5acffc71.05340033_20250722_105210.png"
              alt="B1 Robot Carrying Load"
              width={400}
              height={300}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="w-full bg-black py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">B1 Specs</h2>
            <div className="w-24 h-1 bg-[#EE8900] mx-auto rounded-full mb-6"></div>
          </div>
          <div className="w-full max-w-4xl mx-auto bg-[#181C23] text-white rounded-xl overflow-x-auto shadow-lg border border-[#2A2E36]">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#1E232B] border-b-2 border-cyan-600">
                  <th className="py-3 px-4 font-bold text-left text-base">Parameter</th>
                  <th className="py-3 px-4 font-bold text-left text-base">B1</th>
                </tr>
              </thead>
              <tbody>
                {/* Product Parameters */}
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Size (Standing)</td>
                  <td className="py-3 px-4">1126mm x 467mm x 636mm</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Weight (With Battery)</td>
                  <td className="py-3 px-4">55kg</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Ingress Protection</td>
                  <td className="py-3 px-4">IP68 (optional), IP67 (standard)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Endurance Time</td>
                  <td className="py-3 px-4">2-2.5 hours</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Max Walking Load (Payload)</td>
                  <td className="py-3 px-4">20kg</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Max Standing Load</td>
                  <td className="py-3 px-4">80kg</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Max Walking Speed</td>
                  <td className="py-3 px-4">1.2m/s</td>
                </tr>

                {/* Obstacle Crossing Ability */}
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Stairways</td>
                  <td className="py-3 px-4">20cm</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Slopes</td>
                  <td className="py-3 px-4">30°</td>
                </tr>

                {/* Perception System */}
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Perceptual Controller</td>
                  <td className="py-3 px-4">Jetson Xavier NX*3</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Down Looking Terrain Direct Sensing Sensor</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Look Around Terrain Direct Sensing Sensor</td>
                  <td className="py-3 px-4">✓</td>
                </tr>

                {/* Product Configuration */}
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Wireless Vector Positioning Technology</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Max Instantaneous Torque Of Knee Joint</td>
                  <td className="py-3 px-4">210N.m</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Gigabit Network Port</td>
                  <td className="py-3 px-4">✓</td>
                </tr>

                {/* Functions & Equipment */}
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Standard Configuration</td>
                  <td className="py-3 px-4 text-xs">
                    5G wireless network communication, GNSS acquisition (GPS, Beidou, etc.), over-the-horizon communication
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">Optional</td>
                  <td className="py-3 px-4 text-xs">
                    Smart manipulator, autonomous charging pile, PTZ camera, security patrol mounting platform, emergency rescue mounting platform
                  </td>
                </tr>

                {/* Application */}
                <tr className="border-b-2 border-cyan-600">
                  <td className="py-3 px-4 font-medium">Application</td>
                  <td className="py-3 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                      <div className="text-center">
                        <div className="bg-gray-800 rounded-lg p-3 mb-2">
                          <span className="text-cyan-400 font-semibold">EXPLORATION & DETECTION</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="bg-gray-800 rounded-lg p-3 mb-2">
                          <span className="text-cyan-400 font-semibold">SECURITY PATROL</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="bg-gray-800 rounded-lg p-3 mb-2">
                          <span className="text-cyan-400 font-semibold">EMERGENCY RESCUE</span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center text-gray-600 text-sm">
            *This manual will be modified appropriately according to product improvement, specification change and other reasons without additional notice.
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section
        className="w-full py-10 relative"
        style={{
          backgroundImage: 'url(https://cdn.legendholding.com/images/cdn_687f41ed958c55.63868180_20250722_074653.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-center justify-between gap-8 relative z-10 min-h-[320px]">
          {/* Left Side Content: Heading */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center h-full">
            <div className="my-0">
              <h1 className="text-4xl font-bold text-white mb-2 text-center md:text-left">Get in Touch</h1>
              <p className="text-lg text-white mb-6 text-center md:text-left">
                Visit our office or reach out to us through any of the following channels.
              </p>
            </div>
          </div>
          {/* Right Side: Contact Us Form Card */}
          <div className="flex-1 flex justify-center md:justify-end items-center h-full">
            <ContactUsFormCard />
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
    <div className="bg-black/70 rounded-3xl p-5 shadow-2xl flex flex-col h-auto w-full max-w-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] hover:bg-black/80">
      <div className="mb-4">
        <h2 className="text-white text-lg font-medium mb-1">Contact Us</h2>
        <h3 className="text-white text-2xl font-bold">Fill the Form</h3>
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