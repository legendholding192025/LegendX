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
        <div className="relative h-full flex items-end">
          {/* Text Content */}
          <div className="text-left mt-32">
            <h1 className="mb-8 font-heading">
              <div className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Welcome To The Future With</span>
              </div>
              <div className="text-7xl md:text-8xl lg:text-[5rem] font-bold">
                <span className="bg-gradient-to-r from-cyan-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-lg">Legend X Robotics</span>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
} 