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
      </div>
      
      {/* Content Container */}
      <div className="relative w-full h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Content - Bottom Left */}
          <div className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 mt-32 sm:mt-40 lg:mt-48">
            <h1 className="font-heading">
              {/* First Line */}
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4 whitespace-nowrap">
                <span className="bg-gradient-to-r from-[#2B1C48] via-[#4A2B6B] to-[#EE8900] bg-clip-text text-transparent">
                  Welcome To The Future With
                </span>
              </div>
              
              {/* Second Line */}
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight whitespace-nowrap">
                <span className="bg-gradient-to-br from-[#EE8900] via-[#FFA726] to-[#2B1C48] bg-clip-text text-transparent drop-shadow-lg">
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