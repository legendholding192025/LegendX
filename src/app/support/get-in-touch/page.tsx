"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';

export default function GetInTouchPage() {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play/pause video based on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 300); // slight delay for smoothness
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <main>
      {/* Banner Image */}
      <section className="relative w-full h-96 md:h-[32rem] lg:h-[40rem] overflow-hidden flex items-center justify-center">
        <Image
          src="https://cdn.legendholding.com/images/cdn_687f7e1ae07780.21025857_20250722_120338.png"
          alt="Get in Touch Banner"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16 lg:px-24">
          {/* Left Side Content */}
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
              Get in Touch
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-md">
              Visit our office or reach out to us through any of the following channels.
            </p>
          </div>
          {/* Right Side Buttons */}
          <div className="flex flex-col justify-center h-full space-y-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              SALES
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              RENT
            </button>
          </div>
        </div>
      </section>

      {/* Solution Section with Hover Card */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Solution</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Card 1: Expanding Video Card */}
          <div
            className={`relative bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${isHovered ? 'scale-105' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer', transition: 'box-shadow 0.7s, transform 0.7s, max-height 0.7s' }}
          >
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Left Side - Image Container */}
              <div className="relative lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                <Image
                  src="https://cdn.legendholding.com/images/cdn_687f879ccd7371.25648149_20250722_124412.jpg"
                  alt="GO1 Personal Companion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-sm">GO1</span>
                </div>
              </div>
              {/* Right Side - Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  PERSONAL COMPANION
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </p>
                {/* Hover Indicator */}
                <div className={`mt-8 flex items-center text-white/70 transition-colors duration-300 ${isHovered ? 'text-white' : ''}`}>
                  <div className={`w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 transition-colors duration-300 ${isHovered ? 'bg-white/30' : ''}`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Hover to watch video</span>
                </div>
              </div>
            </div>
            {/* Expanding Video Section INSIDE the card */}
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden bg-gray-900 ${isHovered ? 'max-h-[600px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              style={{ borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}
            >
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-2xl"
                  muted
                  loop
                  playsInline
                  // autoPlay is handled by play() in useEffect
                >
                  <source src="https://cdn.legendholding.com/videos/video_cdn_687f882ae02b05.87076940_20250722_124634.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-sm">GO1</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/30 backdrop-blur-sm rounded-full p-4">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Content Left, Image Right */}
          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-[#6B438B]">
            {/* Content Left */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">DOMESTIC HELP</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
            {/* Image Right */}
            <div className="relative md:w-1/2 h-72 md:h-auto min-h-[250px]">
              <Image
                src="https://cdn.legendholding.com/images/g1.png"
                alt="G1 Domestic Help"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white font-semibold text-sm">G1</span>
              </div>
            </div>
          </div>

          {/* Card 3: Image Left, Content Right */}
          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-[#2D204B]">
            {/* Image Left */}
            <div className="relative md:w-1/2 h-72 md:h-auto min-h-[250px] order-1 md:order-none">
              <Image
                src="https://cdn.legendholding.com/images/b1.png"
                alt="B1 All Terrain"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white font-semibold text-sm">B1</span>
              </div>
            </div>
            {/* Content Right */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">ACROSS ALL TERRIAN</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 