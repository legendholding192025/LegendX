"use client";
import Image from 'next/image';
import { useState } from 'react';
import ContactForm from '@/components/ui/ContactForm';

export default function GO1SpecsPage() {
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
            {/* Banner Section with Video Card */}
      <section className="relative w-full h-[36rem] md:h-[42rem] lg:h-[48rem] overflow-hidden">
        {!isVideoPlaying ? (
          <>
            <video
              className="w-full h-full object-cover hidden md:block"
              autoPlay
              muted
              loop
              playsInline
              src="https://cdn.legendholding.com/videos/video_cdn_687f73a8d578e9.07257181_20250722_111904.mp4"
            >
              Your browser does not support the video tag.
            </video>
            <Image
              src="https://cdn.legendholding.com/images/cdn_68837e2b41fd30.85027467_20250725_125259.png"
              alt="GO1 Specs Banner Desktop"
              fill
              className="object-cover w-full transition-all duration-700 ease-in-out hidden md:block"
              priority
              sizes="100vw"
              quality={100}
              style={{ objectPosition: 'center' }}
            />
            <Image
              src="https://cdn.legendholding.com/images/cdn_687f879ccd7371.25648149_20250722_124412.jpg"
              alt="GO1 Specs Banner Mobile"
              fill
              className="object-cover w-full transition-all duration-700 ease-in-out md:hidden"
              priority
              sizes="100vw"
              quality={100}
              style={{ objectPosition: '75% 65%', transform: 'scale(1.5)' }}
            />
            <div className="absolute inset-0 flex items-center justify-end z-10 transition-all duration-700 ease-in-out">
              {/* Product Information Card - Right Side */}
              <div className="absolute top-1/2 left-1/2 md:left-auto md:right-8 lg:right-12 xl:right-16 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 bg-[#5D376E]/71 rounded-xl p-6 md:p-8 shadow-2xl border border-gray-700 w-80 md:w-96 transition-all duration-700 ease-in-out transform hover:scale-105">
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-white md:text-[#2B1C48] mb-2 transition-all duration-500">
                    <span className="text-4xl md:text-6xl">Unitree</span>
                    <br />
                    <span className="text-2xl md:text-4xl">GO1</span>
                  </h1>
                  <p className="text-white md:text-[#2B1C48] text-base md:text-lg mb-4 transition-all duration-500">Quadruped Robot</p>
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
                  <p className="text-white md:text-[#2B1C48] text-xs md:text-sm opacity-80 transition-all duration-500">
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
              src="https://cdn.legendholding.com/videos/video_cdn_687f73a8d578e9.07257181_20250722_111904.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        

      </section>

      {/* Video Modal - Works for both mobile and desktop */}
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
              src="https://cdn.legendholding.com/videos/video_cdn_687f73a8d578e9.07257181_20250722_111904.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

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
            
            <ol className="space-y-3 text-white/90">
              <li className="flex items-start">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>The robot is in the person's lateral peripheral vision, it is better than the conventional follow mode with natural human-computer interaction, safe and secure.</span>
              </li>
              <li className="flex items-start">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>No need to always look back and worry about whether the robot is lost or encounters obstacles.</span>
              </li>
              <li className="flex items-start">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>When the environment is complex, people can actively choose a simpler route to help the robot pass.</span>
              </li>
            </ol>
          </div>

          {/* Second Row - Left: Text, Right: Video */}
          <div className="bg-[#EE8900] rounded-xl p-8 shadow-lg order-2 lg:order-none">
            <h3 className="text-2xl font-bold text-white mb-4">Robust and Reliable Powertrain</h3>
            
            <div className="inline-block bg-[#2B1C48] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Flexible and Adaptive Joints
            </div>
            
            <ol className="space-y-3 text-white/90">
              <li className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>The new patented design of ultra-lightweight low-noise long-life power joints.</span>
              </li>
              <li className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Body/Thigh Joint C520:8-1g 23.70N.m (MAX).</span>
              </li>
              <li className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>Knee Joint C1.5×8-1 ratio 35.55N.m (MAX).</span>
              </li>
              <li className="flex items-start">
                <Image src="/white-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span>A patented heat pipe-assisted heat dissipation system is built into the vicinity of the knee joint motor.</span>
              </li>
            </ol>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-lg bg-white order-1 lg:order-none">
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

          <div className="bg-[#5D376E] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">GO1 with Built-in Super AI</h3>
            
            <div className="inline-block bg-[#EE8900] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Hash Rate
            </div>
            
            <div className="space-y-4 text-white/90">
              <p className="text-lg font-semibold text-white">
                Total: 16-core top CPU + GPU (384Core, 1.5TFLOPS)
              </p>
              <div className="flex items-start">
                <Image src="/yellow-icon.png" alt="Icon" width={12} height={12} className="mr-3 flex-shrink-0 mt-1" />
                <span className="text-white/80">Reference, NVIDIA TX2 only has CPU (4 cores) + GPU (256Core, 1.3TFLOPS), and the unit price of the chip is chargeable as an add-on.</span>
              </div>
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
                defaultProductOfInterest="GO1 Quadruped Robot"
                products={["GO1 Quadruped Robot"]}
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

 