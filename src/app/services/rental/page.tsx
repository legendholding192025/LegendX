"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';
import ContactForm from '@/components/ui/ContactForm';

export default function RentalPage() {
  // State to track hover for each card
  const [isHoveredGO1, setIsHoveredGO1] = useState(false);
  const [isHoveredG1, setIsHoveredG1] = useState(false);
  const [isHoveredB1, setIsHoveredB1] = useState(false);
  
  const videoRefGO1 = useRef<HTMLVideoElement>(null);
  const videoRefG1 = useRef<HTMLVideoElement>(null);
  const videoRefB1 = useRef<HTMLVideoElement>(null);

  // Play/pause video based on hover for GO1
  const handleMouseEnterGO1 = () => {
    setIsHoveredGO1(true);
    setTimeout(() => {
      if (videoRefGO1.current) {
        videoRefGO1.current.play();
      }
    }, 300);
  };
  const handleMouseLeaveGO1 = () => {
    setIsHoveredGO1(false);
    if (videoRefGO1.current) {
      videoRefGO1.current.pause();
      videoRefGO1.current.currentTime = 0;
    }
  };

  // Play/pause video based on hover for G1
  const handleMouseEnterG1 = () => {
    setIsHoveredG1(true);
    setTimeout(() => {
      if (videoRefG1.current) {
        videoRefG1.current.currentTime = 69; // Start from 1:09
        videoRefG1.current.play();
      }
    }, 300);
  };
  const handleMouseLeaveG1 = () => {
    setIsHoveredG1(false);
    if (videoRefG1.current) {
      videoRefG1.current.pause();
      videoRefG1.current.currentTime = 0;
    }
  };

  // Play/pause video based on hover for B1
  const handleMouseEnterB1 = () => {
    setIsHoveredB1(true);
    setTimeout(() => {
      if (videoRefB1.current) {
        videoRefB1.current.play();
      }
    }, 300);
  };
  const handleMouseLeaveB1 = () => {
    setIsHoveredB1(false);
    if (videoRefB1.current) {
      videoRefB1.current.pause();
      videoRefB1.current.currentTime = 0;
    }
  };

  // Mobile click handlers to scroll to video sections
  const handleCardClickGO1 = () => {
    if (window.innerWidth < 1024) { // Only on mobile/tablet
      const videoSection = document.getElementById('video-go1');
      if (videoSection) {
        videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleCardClickG1 = () => {
    if (window.innerWidth < 1024) { // Only on mobile/tablet
      const videoSection = document.getElementById('video-g1');
      if (videoSection) {
        videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleCardClickB1 = () => {
    if (window.innerWidth < 1024) { // Only on mobile/tablet
      const videoSection = document.getElementById('video-b1');
      if (videoSection) {
        videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <main>
      {/* Banner Image */}
      <section className="relative w-full h-[40rem] md:h-96 lg:h-[28rem] overflow-hidden flex items-center justify-center">
        <Image
          src="https://cdn.legendholding.com/images/cdn_687f7e1ae07780.21025857_20250722_120338.png"
          alt="Rental Services Banner"
          fill
          className="object-cover w-full h-full"
          style={{ objectPosition: 'center 60%' }}
          priority
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16 lg:px-24">
          {/* Left Side Content */}
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
              Rental Services
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-md mb-8">
              Rent LegendX robots for your specific needs and experience cutting-edge AI technology.
            </p>
            {/* Contact Us Button */}
            <button 
              onClick={() => {
                document.getElementById('get-in-touch')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="bg-[#EE8900] hover:bg-[#EE8900]/80 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Solution Section with Hover Card */}
      <section className="py-16 px-2 sm:px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5E366D] mb-4 text-center">Available for Rent</h2>
          <div className="w-24 h-1 bg-[#EE8900] mx-auto rounded-full mb-6"></div>
          </div>

          {/* Card 1: Expanding Video Card - GO1 */}
          <div
            className={`relative bg-[#2B1C48] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${isHoveredGO1 ? 'scale-105' : ''}`}
            onMouseEnter={handleMouseEnterGO1}
            onMouseLeave={handleMouseLeaveGO1}
            onClick={handleCardClickGO1}
            style={{ cursor: 'pointer', transition: 'box-shadow 0.7s, transform 0.7s, max-height 0.7s' }}
          >
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Left Side - Image Container */}
              <div className="relative lg:w-1/2 h-80 lg:h-auto overflow-hidden order-1 lg:order-none">
                <Image
                  src="https://cdn.legendholding.com/images/cdn_687f879ccd7371.25648149_20250722_124412.jpg"
                  alt="GO1 Personal Companion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-bold text-lg">GO1</span>
                </div>
              </div>
              {/* Right Side - Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-none">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Corporate Events
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                Robots offer a unique and engaging presence at corporate events, conferences, product launches, and brand activations. Whether welcoming guests, delivering branded messages, or performing interactive routines, they create a memorable experience that reflects innovation and forward-thinking.
                </p>
                <p className="text-white/70 text-sm mt-4 lg:hidden">
                  💡 Tap to watch video
                </p>
              </div>
            </div>
            {/* Expanding Video Section INSIDE the card */}
            <div
              id="video-go1"
              className={`transition-all duration-700 ease-in-out overflow-hidden bg-gray-900 ${isHoveredGO1 ? 'max-h-[600px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              style={{ borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}
            >
              <div className="relative aspect-video">
                <video
                  ref={videoRefGO1}
                  className="w-full h-full object-cover rounded-2xl"
                  muted
                  loop
                  playsInline
                >
                  <source src="https://cdn.legendholding.com/videos/video_cdn_687f882ae02b05.87076940_20250722_124634.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-bold text-lg">GO1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Content Left, Image Right - G1 */}
          <div
            className={`relative bg-[#EE8900] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${isHoveredG1 ? 'scale-105' : ''}`}
            onMouseEnter={handleMouseEnterG1}
            onMouseLeave={handleMouseLeaveG1}
            onClick={handleCardClickG1}
            style={{ cursor: 'pointer', transition: 'box-shadow 0.7s, transform 0.7s, max-height 0.7s' }}
          >
            <div className="flex flex-col md:flex-row min-h-[500px]">
              {/* Content Left */}
              <div className="md:w-1/2 p-10 flex flex-col justify-center order-2 md:order-none">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Research and Development</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                Robots serve as powerful platforms for research and innovation. With advanced hardware, open programming capabilities, and open AI integration, they provide researchers and developers with a reliable tool for testing robotics applications, algorithms, and real-world use cases.
                </p>
                <p className="text-white/70 text-sm mt-4 lg:hidden">
                  💡 Tap to watch video
                </p>
              </div>
              {/* Image Right */}
              <div className="relative md:w-1/2 h-72 md:h-auto min-h-[250px] order-1 md:order-none">
                <Image
                  src="https://cdn.legendholding.com/images/cdn_687f925f50a2a3.83903043_20250722_133007.jpg"
                  alt="G1 Domestic Help"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-bold text-lg">G1</span>
                </div>
              </div>
            </div>
            {/* Expanding Video Section INSIDE the card */}
            <div
              id="video-g1"
              className={`transition-all duration-700 ease-in-out overflow-hidden bg-gray-900 ${isHoveredG1 ? 'max-h-[600px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              style={{ borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}
            >
              <div className="relative aspect-video">
                <video
                  ref={videoRefG1}
                  className="w-full h-full object-cover rounded-2xl"
                  muted
                  loop
                  playsInline
                >
                  <source src="https://cdn.legendholding.com/videos/video_cdn_688371cf31eb63.85920242_20250725_120015.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-bold text-lg">G1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Image Left, Content Right - B1 */}
          <div
            className={`relative bg-[#5D376E] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${isHoveredB1 ? 'scale-105' : ''}`}
            onMouseEnter={handleMouseEnterB1}
            onMouseLeave={handleMouseLeaveB1}
            onClick={handleCardClickB1}
            style={{ cursor: 'pointer', transition: 'box-shadow 0.7s, transform 0.7s, max-height 0.7s' }}
          >
            <div className="flex flex-col md:flex-row min-h-[500px]">
              {/* Image Left */}
              <div className="relative md:w-1/2 h-72 md:h-auto min-h-[250px] order-1 md:order-none">
                <Image
                  src="https://cdn.legendholding.com/images/cdn_687f9333cab3d7.89801651_20250722_133339.jpg"
                  alt="B1 All Terrain"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-bold text-lg">B1</span>
                </div>
              </div>
              {/* Content Right */}
              <div className="md:w-1/2 p-10 flex flex-col justify-center order-2 md:order-none">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Entertainment</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                Legend X robots bring excitement and innovation to entertainment experiences. The humanoid G1 and quadruped B1 can be programmed to walk, interact with audiences, perform themed routines, making them a unique attraction for tech shows, malls, festivals, or media productions.
                </p>
                <p className="text-white/70 text-sm mt-4 lg:hidden">
                  💡 Tap to watch video
                </p>
              </div>
            </div>
            {/* Expanding Video Section INSIDE the card */}
            <div
              id="video-b1"
              className={`transition-all duration-700 ease-in-out overflow-hidden bg-gray-900 ${isHoveredB1 ? 'max-h-[600px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              style={{ borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}
            >
              <div className="relative aspect-video">
                <video
                  ref={videoRefB1}
                  className="w-full h-full object-cover rounded-2xl"
                  muted
                  loop
                  playsInline
                >
                  <source src="https://cdn.legendholding.com/videos/video_cdn_687f71d27e7d72.66005474_20250722_111114.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-bold text-lg">B1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section
        id="get-in-touch"
        className="w-full py-10 relative"
        style={{
          backgroundImage: 'url(https://cdn.legendholding.com/images/cdn_687f41ed958c55.63868180_20250722_074653.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 relative z-10 min-h-[320px]">
          {/* Content Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side: Get in Touch Heading */}
            <div className="flex-1 flex justify-center md:justify-start">
              <div className="text-left">
                <h1 className="text-4xl font-bold text-white mb-2">Get in Touch</h1>
                <p className="text-lg text-white">
                  For more information please share your details and one of our representative will contact you shortly.
                </p>
              </div>
            </div>
            {/* Right Side: Contact Us Form Card */}
            <div className="flex-1 flex justify-center md:justify-end">
              <ContactForm 
                defaultServiceType="rental"
                bgColor="bg-[rgb(43,28,72)]/90"
                textColor="text-white"
                inputBgColor="bg-white"
                inputTextColor="text-[#2B1C48]"
                serviceTypes={["rental"]}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

 