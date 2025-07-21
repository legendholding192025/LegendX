"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function SpecificationsTable() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-[#181C23] text-white rounded-xl overflow-x-auto shadow-lg border border-[#2A2E36] mt-8">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-[#1E232B] border-b-2 border-cyan-600">
            <th className="w-12"></th>
            <th className="py-3 px-4 font-bold text-left text-base">G1</th>
            <th className="py-3 px-4 font-bold text-left text-base">G1 EDU</th>
            <th className="py-3 px-4 font-bold text-left text-base">Model</th>
          </tr>
        </thead>
        <tbody>
          {/* Mechanical Dimensions */}
          <tr>
            <td className="bg-[#181C23] border-r-2 border-cyan-600 text-cyan-400 font-bold text-xs text-center align-middle rotate-180" rowSpan={7} style={{writingMode:'vertical-rl',letterSpacing:'0.1em'}}>Mechanical Dimensions</td>
            <td className="py-3 px-4 font-medium">Height, Width and Thickness (Stand)</td>
            <td className="py-3 px-4">1320x450x200mm</td>
            <td className="py-3 px-4">1320x450x200mm</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Height, Width and Thickness (Fold)</td>
            <td className="py-3 px-4">690x450x300mm</td>
            <td className="py-3 px-4">690x450x300mm</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Weight (With Battery)</td>
            <td className="py-3 px-4">About 35kg</td>
            <td className="py-3 px-4">About 35kg+</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Maximum Torque of Knee Joint [1]</td>
            <td className="py-3 px-4">90N.m</td>
            <td className="py-3 px-4">120N.m</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Arm Maximum Load [2]</td>
            <td className="py-3 px-4">About 2Kg</td>
            <td className="py-3 px-4">About 3Kg</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Calf + Thigh Length</td>
            <td className="py-3 px-4">0.6M</td>
            <td className="py-3 px-4">0.6M</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b-2 border-cyan-600">
            <td className="py-3 px-4 font-medium">Arm Span</td>
            <td className="py-3 px-4">About 0.45M</td>
            <td className="py-3 px-4">About 0.45M</td>
            <td className="py-3 px-4"></td>
          </tr>

          {/* Joint Freedom */}
          <tr>
            <td className="bg-[#181C23] border-r-2 border-cyan-600 text-cyan-400 font-bold text-xs text-center align-middle rotate-180" rowSpan={6} style={{writingMode:'vertical-rl',letterSpacing:'0.1em'}}>Joint Freedom</td>
            <td className="py-3 px-4 font-medium">Total Degrees of Freedom (Joint Freedom)</td>
            <td className="py-3 px-4">23</td>
            <td className="py-3 px-4">23 - 43</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Single Leg Degrees of Freedom</td>
            <td className="py-3 px-4">6</td>
            <td className="py-3 px-4">6</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Waist Degrees of Freedom</td>
            <td className="py-3 px-4">1</td>
            <td className="py-3 px-4">1+(Optional 2 additional waist degrees of freedom)</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Single Arm Degrees of Freedom</td>
            <td className="py-3 px-4">5</td>
            <td className="py-3 px-4">5</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Single Hand Degrees of Freedom</td>
            <td className="py-3 px-4">/</td>
            <td className="py-3 px-4 text-xs">
              7 (Optional Force control of three-fingered hand)<br/>
              +2(Optional 2 additional wrist degrees of freedom)<br/>
              *Three-fingered dexterous hand Dex3-1 Parameter:<br/>
              The thumb has 3 active degrees of freedom; the index finger has 2 active degrees of freedom; the middle finger has 2 active degrees of freedom.<br/>
              **Dex3-1 can optionally be installed with tactile sensor array.
            </td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b-2 border-cyan-600">
            <td className="py-3 px-4 font-medium">Extra Large Joint Movement Space</td>
            <td className="py-3 px-4 text-xs">
              Waist Joint: Z±155°<br/>
              Knee Joint: 0~165°<br/>
              Hip Joint: P±154°, R-30~+170°, Y±158°
            </td>
            <td className="py-3 px-4 text-xs">
              Waist Joint: Z±155°, X±45°, Y±30°<br/>
              Knee Joint: 0~165°<br/>
              Hip Joint: P±154°, R-30~+170°, Y±158°<br/>
              Wrist Joint: P±92.5°, Y±92.5°
            </td>
            <td className="py-3 px-4"></td>
          </tr>

          {/* Joint Specifications */}
          <tr>
            <td className="bg-[#181C23] border-r-2 border-cyan-600 text-cyan-400 font-bold text-xs text-center align-middle rotate-180" rowSpan={2} style={{writingMode:'vertical-rl',letterSpacing:'0.1em'}}>Joint Specifications</td>
            <td className="py-3 px-4 font-medium">Joint output bearing</td>
            <td className="py-3 px-4 text-xs">Industrial grade crossed roller bearings (high precision, high load capacity)</td>
            <td className="py-3 px-4 text-xs">Industrial grade crossed roller bearings (high precision, high load capacity)</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b-2 border-cyan-600">
            <td className="py-3 px-4 font-medium">Joint motor</td>
            <td className="py-3 px-4 text-xs">Low inertia high-speed internal rotor PMSM(permanent magnet synchronous motor,better response speed and heat dissipation)</td>
            <td className="py-3 px-4 text-xs">Low inertia high-speed internal rotor PMSM(permanent magnet synchronous motor,better response speed and heat dissipation)</td>
            <td className="py-3 px-4"></td>
          </tr>

          {/* Electrical Characteristics */}
          <tr>
            <td className="bg-[#181C23] border-r-2 border-cyan-600 text-cyan-400 font-bold text-xs text-center align-middle rotate-180" rowSpan={8} style={{writingMode:'vertical-rl',letterSpacing:'0.1em'}}>Electrical Characteristics</td>
            <td className="py-3 px-4 font-medium">Full Joint Hollow Electrical Routing</td>
            <td className="py-3 px-4">YES</td>
            <td className="py-3 px-4">YES</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Joint Encoder</td>
            <td className="py-3 px-4">Dual encoder</td>
            <td className="py-3 px-4">Dual encoder</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Cooling System</td>
            <td className="py-3 px-4">Local air cooling</td>
            <td className="py-3 px-4">Local air cooling</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Power Supply</td>
            <td className="py-3 px-4">13 string lithium battery</td>
            <td className="py-3 px-4">13 string lithium battery</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Basic Computing Power</td>
            <td className="py-3 px-4">8-core high-performance CPU</td>
            <td className="py-3 px-4">8-core high-performance CPU</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Sensing Sensor</td>
            <td className="py-3 px-4">Depth Camera+3D LiDAR</td>
            <td className="py-3 px-4">Depth Camera+3D LiDAR</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">4 Microphone Array</td>
            <td className="py-3 px-4">YES</td>
            <td className="py-3 px-4">YES</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b-2 border-cyan-600">
            <td className="py-3 px-4 font-medium">5W Speaker</td>
            <td className="py-3 px-4">YES</td>
            <td className="py-3 px-4">YES</td>
            <td className="py-3 px-4"></td>
          </tr>

          {/* Accessories */}
          <tr>
            <td className="bg-[#181C23] border-r-2 border-cyan-600 text-cyan-400 font-bold text-xs text-center align-middle rotate-180" rowSpan={5} style={{writingMode:'vertical-rl',letterSpacing:'0.1em'}}>Accessories</td>
            <td className="py-3 px-4 font-medium">Smart Battery (Quick Release)</td>
            <td className="py-3 px-4">9000mAh</td>
            <td className="py-3 px-4">9000mAh</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Charger</td>
            <td className="py-3 px-4">54V 5A</td>
            <td className="py-3 px-4">54V 5A</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Manual Controller</td>
            <td className="py-3 px-4">YES</td>
            <td className="py-3 px-4">YES</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Battery Life</td>
            <td className="py-3 px-4">About 2h</td>
            <td className="py-3 px-4">About 2h</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b-2 border-cyan-600">
            <td className="py-3 px-4 font-medium">Upgraded Intelligent OTA</td>
            <td className="py-3 px-4">YES</td>
            <td className="py-3 px-4">YES</td>
            <td className="py-3 px-4"></td>
          </tr>

          {/* Other */}
          <tr>
            <td className="bg-[#181C23] border-r-2 border-cyan-600 text-cyan-400 font-bold text-xs text-center align-middle rotate-180" rowSpan={3} style={{writingMode:'vertical-rl',letterSpacing:'0.1em'}}>Other</td>
            <td className="py-3 px-4 font-medium">High Computing Power Module</td>
            <td className="py-3 px-4">/</td>
            <td className="py-3 px-4">NVIDIA Jetson Orin</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="py-3 px-4 font-medium">Secondary Development [3]</td>
            <td className="py-3 px-4">/</td>
            <td className="py-3 px-4">YES</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="border-b-2 border-cyan-600">
            <td className="py-3 px-4 font-medium">Warranty Period [4]</td>
            <td className="py-3 px-4">8 months</td>
            <td className="py-3 px-4">18 months</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr>
            <td className="bg-[#181C23] border-r-2 border-cyan-600"></td>
            <td className="py-3 px-4 font-medium text-purple-400">Price(Tax and Shipping cost excluded)</td>
            <td className="py-3 px-4 text-purple-400">US $16K</td>
            <td className="py-3 px-4 text-blue-400 underline cursor-pointer">Contact sales</td>
            <td className="py-3 px-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function G1SpecsPage() {
  const [showSpecs, setShowSpecs] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <main>
      {/* Banner Section */}
      <section className="relative w-full h-[36rem] md:h-[42rem] lg:h-[48rem]">
        <Image
          src="https://cdn.legendholding.com/images/cloudinary_687def13c34d78.81722733_20250721_074107.jpg"
          alt="G1 Specs Banner"
          fill
          className="object-cover w-full"
          priority
          sizes="100vw"
          quality={100}
          style={{ objectPosition: 'center -6rem' }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Product Information Card - Right Side */}
          <div className="absolute right-12 md:right-20 lg:right-24 top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] rounded-xl p-10 shadow-2xl border border-gray-700 max-w-md">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className="text-5xl md:text-6xl">Unitree</span>
                <br />
                <span className="text-3xl md:text-4xl">G1</span>
              </h1>
              <p className="text-white text-lg mb-4">Humanoid agent AI avatar</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-xl font-semibold mb-4">
                Price from $16K
              </p>
              <div className="w-full h-px bg-gradient-to-r from-purple-400 to-cyan-400 mb-6"></div>
              <button 
                onClick={() => setShowVideo(true)}
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg border border-gray-600 transition-colors duration-300 mb-4"
              >
                Video
              </button>
              <p className="text-white text-sm opacity-80">
                Continuous OTA Software Upgrade and Update
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-black rounded-lg max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            <video
              className="w-full h-full rounded-lg"
              controls
              autoPlay
              src="https://cdn.legendholding.com/videos/video_cdn_687e25a426cb22.10735691_20250721_113356.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Specs Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5E366D] mb-4 text-center">G1 Specs</h2>
          <div className="w-24 h-1 bg-[#EE8900] mx-auto rounded-full mb-6"></div>
        </div>
        <img 
          src="https://cdn.legendholding.com/images/cloudinary_687df3922cfbf9.75666994_20250721_080018.png" 
          alt="G1 Specs"
          style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
        />
      </section>

      {/* Technical Details Section */}
      <section className="w-full bg-black py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">Technical Details</h2>
            <div className="w-24 h-1 bg-[#EE8900] mx-auto rounded-full mb-6"></div>
          </div>
          <div className="w-full flex justify-center">
            <img
              src="https://cdn.legendholding.com/images/cdn_687e33025e1d55.07412621_20250721_123058.png"
              alt="Technical Details"
              style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
            />
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="bg-black hover:bg-[#222] text-white font-semibold px-8 py-3 rounded-lg border-2 border-[#EE8900] transition-colors duration-300 text-base shadow-lg"
              onClick={() => setShowSpecs((prev) => !prev)}
            >
              {showSpecs ? 'Hide Spec Details' : 'View Spec Details'}
            </button>
          </div>
          {showSpecs && <>
            <SpecificationsTable />
            <ul className="mt-8 text-white text-sm space-y-2 max-w-4xl mx-auto list-decimal list-inside opacity-90">
              <li>The maximum torque of the joint motors of the whole machine is different. This is the maximum torque of the largest joint motor among them.</li>
              <li>The maximum load of the arm varies greatly under different arm extension postures.</li>
              <li>For more information, please read the secondary development manual.</li>
              <li>For more detailed warranty terms, please read the product warranty brochure.</li>
              <li>The above parameters may vary in different scenarios and configurations, please subject to actual situation.</li>
              <li>The humanoid robot has a complex structure and extremely powerful power. Users are asked to keep a sufficient safe distance between the humanoid robot and the humanoid robot. Please use with caution</li>
              <li>If any change in the appearance of the product, please refer to the actual product.</li>
              <li>Some sample functions on this page are still being developed and tested, and will be opened to users in the future.</li>
              <li>Currently, the global humanoid robot industry is in the early stages of exploration. Individual users are strongly advised to thoroughly understand the limitations of humanoid robots before making a purchase.</li>
              <li>This product is a civilian robot. We kindly request that all users refrain from making any dangerous modifications or using the robot in a hazardous manner.</li>
              <li>Please visit Unitree Robotics Website for more related terms and policies, and comply with local laws and regulations.</li>
            </ul>
          </>}
        </div>
      </section>

      {/* Get in Touch Section */}
      <section
        className="w-full py-12 relative"
        style={{
          backgroundImage: 'url(https://cdn.legendholding.com/images/cdn_687a26aa467e88.57510195_20250718_104914.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative z-10">
          {/* Left Side Content: Heading + Image */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="mt-8 mb-8">
              <h1 className="text-4xl font-bold text-[#5D376E] mb-2">Get in Touch</h1>
              <p className="text-lg text-gray-600 mb-6">
                Visit our office or reach out to us through any of the following channels.
              </p>
            </div>
            <img
              src="https://cdn.legendholding.com/images/cdn_687a1f4c67df37.03007310_20250718_101748.png"
              alt="Get in Touch"
              className="w-80 md:w-[28rem] lg:w-[32rem] h-auto object-contain drop-shadow-xl -ml-4 md:-ml-8 lg:-ml-12"
              style={{ maxWidth: '100%' }}
            />
          </div>
          {/* Right Side: Contact Us Form Card */}
          <div className="flex-1 flex justify-center md:justify-end items-start pt-32 md:pt-40">
            <ContactUsFormCard />
          </div>
        </div>
      </section>
    </main>
  );
} 

// Contact Us Form Card (standalone, for G1 Specs page)
function ContactUsFormCard() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
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
    <div className="p-0 flex flex-col h-auto w-full max-w-2xl">
      <div className="mb-4">
        <h2 className="text-black text-lg font-medium mb-1">Contact Us</h2>
        <h3 className="text-black text-2xl font-bold">Fill the Form</h3>
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