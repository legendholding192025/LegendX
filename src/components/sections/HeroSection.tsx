'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 16000;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= target) {
          clearInterval(timer);
          return target;
        }
        return Math.min(prevCount + increment, target);
      });
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const formattedCount = Math.floor(count).toLocaleString();
  
  return (
    <section className="relative overflow-hidden text-white min-h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center'
          }}
        >
          <source src="https://cdn.legendholding.com/videos/video_cdn_687900259effc9.02795891_20250717_135237.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative w-full h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Content - Bottom Left */}
          <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-2/5 mt-32 sm:mt-40 lg:mt-48">
            <h1 className="font-heading">
              {/* First Line */}
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 lg:mb-6 whitespace-nowrap">
                <span className="text-[#2B1C48]">
                  Welcome To The Future With
                </span>
              </div>
              
              {/* Second Line */}
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight whitespace-nowrap">
                <span className="text-[#FFFFF] drop-shadow-lg">
                  Legend X Robotics
                </span>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
} 