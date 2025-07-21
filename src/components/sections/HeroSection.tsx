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
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
        <div className="relative">
          {/* Text Content */}
          {/* <div className="text-center">
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Unitree </span>
              <span className="bg-gradient-to-r from-cyan-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-lg">G1</span>
            </h1>
            <div className="text-3xl md:text-5xl mb-6">
              <span className="text-purple-300">Price from </span>
              <span className="text-cyan-400 font-bold text-5xl md:text-7xl">${formattedCount}</span>
            </div>
            <p className="text-white text-xl md:text-3xl">
              Humanoid agent AI avatar
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
} 