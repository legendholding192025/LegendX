"use client";
import Image from 'next/image';
import { useState } from 'react';
import ContactForm from '@/components/ui/ContactForm';

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
              src="https://cdn.legendholding.com/images/cloudinary_687def13c34d78.81722733_20250721_074107.jpg"
              alt="G1 Specs Banner Desktop"
              fill
              className="object-cover w-full transition-all duration-700 ease-in-out hidden md:block"
              priority
              sizes="100vw"
              quality={100}
              style={{ objectPosition: 'center' }}
            />
            <Image
              src="https://cdn.legendholding.com/images/cdn_68836fe019f8a2.68471822_20250725_115200.png"
              alt="G1 Specs Banner Mobile"
              fill
              className="object-cover w-full transition-all duration-700 ease-in-out md:hidden"
              priority
              sizes="100vw"
              quality={100}
              style={{ objectPosition: 'center' }}
            />
            <div className="absolute inset-0 flex items-center justify-end z-10 transition-all duration-700 ease-in-out">
              {/* Product Information Card - Right Side */}
              <div className="absolute right-8 md:right-8 lg:right-12 xl:right-16 top-1/2 transform -translate-y-1/2 bg-[#2c1b47]/71 rounded-xl p-6 md:p-8 shadow-2xl border border-gray-700 w-80 md:w-96 transition-all duration-700 ease-in-out transform hover:scale-105">
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 transition-all duration-500">
                    <span className="text-4xl md:text-6xl">Unitree</span>
                    <br />
                    <span className="text-2xl md:text-4xl">G1</span>
                  </h1>
                  <p className="text-white text-base md:text-lg mb-4 transition-all duration-500">Humanoid agent AI avatar</p>
                  <div className="w-full h-px bg-[#EE8900] mb-6 transition-all duration-500"></div>
                  <div className="flex items-center justify-center mb-4">
                    <button 
                      onClick={handleVideoClick}
                      className="bg-[#EE8900] hover:bg-[#d67a00] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg border border-[#EE8900] transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-110 hover:shadow-lg text-sm md:text-base"
                    >
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Watch Video
                    </button>
                  </div>
                  <p className="text-white text-xs md:text-sm opacity-80 transition-all duration-500">
                    Continuous OTA Software Upgrade and Update
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="relative w-full h-full animate-fadeIn bg-black">
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
              src="https://cdn.legendholding.com/videos/video_cdn_687e25a426cb22.10735691_20250721_113356.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </section>

      {/* Video Modal - Keep existing modal for fullscreen option */}
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative w-screen h-screen max-w-none max-h-none bg-black">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>
            <video
              className="w-full h-full object-contain"
              controls
              autoPlay
              src="https://cdn.legendholding.com/videos/video_cdn_687e25a426cb22.10735691_20250721_113356.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* G1 Specs Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#5E366D] mb-4 text-center">G1 Specs</h2>
      <div className="w-24 h-1 bg-[#EE8900] mx-auto rounded-full mb-6"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Row - Left: Image, Right: Text */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white h-64 lg:h-full">
            <Image
              src="https://cdn.legendholding.com/images/cdn_68822dea2def77.36328949_20250724_125818.png"
              alt="G1 Robot Body Size"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={90}
            />
          </div>

          <div className="bg-[#2B1C48] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Body Size & Specifications</h3>
            <p className="text-white/80 mb-6">Advanced humanoid robot with precise dimensions and weight distribution</p>
            
            <div className="inline-block bg-[#EE8900] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Key Measurements
            </div>
            
            <ol className="space-y-0 text-white/90">
              <li className="flex items-start">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Weight: 35 kg - Optimized for stability and mobility</span>
              </li>
              <li className="flex items-start">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Height: 132 cm - Human-like proportions for natural interaction</span>
              </li>
              <li className="flex items-start">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Dimensions: 132 × 45 × 20 cm (Stand) / 69 × 45 × 30 cm (Fold)</span>
              </li>
            </ol>
          </div>

          {/* Second Row - Left: Text, Right: Image */}
          <div className="bg-[#EE8900] rounded-xl p-8 shadow-lg order-2 lg:order-none">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Advanced Degrees of Freedom</h3>
            
            <div className="inline-block bg-[#2B1C48] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Joint Freedom
            </div>
            
            <ol className="space-y-0 text-white/90">
              <li className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Total Degrees of Freedom: 23 - 43 (depending on configuration)</span>
              </li>
              <li className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Single Leg: 6 degrees of freedom for natural walking</span>
              </li>
              <li className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Single Arm: 5 degrees of freedom for precise manipulation</span>
              </li>
              <li className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Waist: 1 degree of freedom with optional additional 2</span>
              </li>
            </ol>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white h-64 lg:h-full order-1 lg:order-none">
            <Image
              src="https://cdn.legendholding.com/images/cdn_688231ada30302.59820338_20250724_131421.png"
              alt="G1 Robot Degrees of Freedom"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={90}
            />
          </div>
        </div>

        {/* Additional G1 Capabilities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white h-64 lg:h-full">
            <Image
              src="https://cdn.legendholding.com/images/cdn_6882320fa55d52.17083424_20250724_131559.png"
              alt="G1 Robot Maximum Joint Torque"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={90}
            />
          </div>

          <div className="bg-[#5D376E] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Power & Performance</h3>
            
            <div className="inline-block bg-[#EE8900] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Technical Specifications
            </div>
            
            <div className="space-y-0 text-white/90">
              <div className="flex items-center">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0" />
                <span>Maximum Joint Torque: 120 N.m</span>
              </div>
              <div className="flex items-center">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0" />
                <span>Battery Life: About 2h of continuous operation</span>
              </div>
              <div className="flex items-center">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0" />
                <span>Arm Maximum Load: 3 Kg for manipulation tasks</span>
              </div>
              <div className="flex items-center">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0" />
                <span>360 Detection: 3D LIDAR + Depth Camera for advanced perception</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Row - Left: Text, Right: Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-[#2B1C48] rounded-xl p-8 shadow-lg order-2 lg:order-none">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Dexterous Hand Technology</h3>
            
            <div className="inline-block bg-[#2B1C48] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Advanced Manipulation
            </div>
            
            <div className="space-y-0 text-white/90">
              <div className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>3-finger force control dexterous hand for precise manipulation</span>
              </div>
              <div className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Optional installation of tactile sensor arrays</span>
              </div>
              <div className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Advanced force feedback for delicate object handling</span>
              </div>
              <div className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Human-like grip patterns for natural interaction</span>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white h-64 lg:h-full order-1 lg:order-none">
            <Image
              src="https://cdn.legendholding.com/images/cdn_6882326d473494.28988627_20250724_131733.png"
              alt="G1 Robot Dexterous Hand"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={90}
            />
          </div>
        </div>

        {/* Fifth Row - Left: Image, Right: Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white h-64 lg:h-full">
            <Image
              src="https://cdn.legendholding.com/images/cdn_688232a0bf9e71.48877119_20250724_131824.png"
              alt="G1 Robot Battery Life"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={90}
            />
          </div>

          <div className="bg-[#EE8900] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Battery & Endurance</h3>
            
            <div className="inline-block bg-[#EE8900] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Power Management
            </div>
            
            <div className="space-y-0 text-white/90">
              <div className="flex items-center">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0" />
                <span>Battery Life: About 2h of continuous operation</span>
              </div>
              <div className="flex items-center">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0" />
                <span>Advanced power management for optimal performance</span>
              </div>
              <div className="flex items-center">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0" />
                <span>Quick charging capabilities for minimal downtime</span>
              </div>
              <div className="flex items-center">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0" />
                <span>Energy-efficient design for extended mission duration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sixth Row - Left: Text, Right: Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-[#5D376E] rounded-xl p-8 shadow-lg order-2 lg:order-none">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">360° Detection & Perception</h3>
            
            <div className="inline-block bg-[#2B1C48] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Advanced Sensing
            </div>
            
            <div className="space-y-0 text-white/90">
              <div className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>3D LIDAR + Depth Camera for comprehensive environment mapping</span>
              </div>
              <div className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>360° field of view for complete situational awareness</span>
              </div>
              <div className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Real-time obstacle detection and path planning</span>
              </div>
              <div className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Advanced perception algorithms for safe navigation</span>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white h-64 lg:h-full order-1 lg:order-none">
            <Image
              src="https://cdn.legendholding.com/images/cdn_688232cf7a4181.64510539_20250724_131911.png"
              alt="G1 Robot 360° Detection Perception"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={90}
            />
          </div>
        </div>
      </section>
      {/* Technical Details Section */}
      <section className="w-full bg-black py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center font-heading">Technical Details</h2>
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
                defaultProductOfInterest="G1 Humanoid Robot"
                products={["G1 Humanoid Robot"]}
                bgColor="bg-transparent"
                textColor="text-[rgb(43,28,72)]"
                inputBgColor="bg-white"
                inputTextColor="text-[#2B1C48]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 

 