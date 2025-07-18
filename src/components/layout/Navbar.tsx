'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`bg-white border-b border-gray-200 sticky top-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-44 h-44">
              <Image
                src="/logo/legendx-logo.svg"
                alt="LegendX Logo"
                width={176}
                height={176}
                className="w-full h-full"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-4">
            <div className="relative cursor-pointer group">
              <div className="flex items-center space-x-1">
                <span className="text-black group-hover:text-orange-500 transition-all duration-300 font-medium relative z-10">Products</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-orange-500 group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </div>
            
            <div className="relative cursor-pointer group">
              <div className="flex items-center space-x-1">
                <span className="text-black group-hover:text-orange-500 transition-all duration-300 font-medium relative z-10">Services</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-orange-500 group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </div>
            
            <div className="relative cursor-pointer group">
              <div className="flex items-center space-x-1">
                <span className="text-black group-hover:text-orange-500 transition-all duration-300 font-medium relative z-10">Support</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-orange-500 group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </div>
            
            <Link href="/contact" className="relative text-black hover:text-orange-500 transition-all duration-300 font-medium group">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between hover:text-orange-500 transition-all duration-300 cursor-pointer">
                <span className="text-gray-700 group-hover:text-orange-500">Products</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-orange-500 group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center justify-between hover:text-orange-500 transition-all duration-300 cursor-pointer">
                <span className="text-gray-700 group-hover:text-orange-500">Services</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-orange-500 group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center justify-between hover:text-orange-500 transition-all duration-300 cursor-pointer">
                <span className="text-gray-700 group-hover:text-orange-500">Support</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-orange-500 group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 