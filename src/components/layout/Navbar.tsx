'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Close mobile menu when clicking on any link
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileServicesOpen(false);
  };

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
            <Link href="/about-us" className={`relative ${pathname.includes('/about-us') ? 'text-orange-500' : 'text-[#2B1C48]'} hover:text-orange-500 transition-all duration-300 font-medium group`}>
              <span className="relative z-10 font-heading">About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <div
              className="relative cursor-pointer group"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <div className="flex items-center space-x-1">
                <span className={`${pathname.includes('/g1-specs') || pathname.includes('/b1-specs') || pathname.includes('/go1-specs') ? 'text-orange-500' : 'text-[#2B1C48]'} group-hover:text-orange-500 transition-all duration-300 font-medium relative z-10 font-heading`}>Products</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-orange-500 group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              {/* Dropdown menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-40 bg-white rounded-lg shadow-lg transition-all duration-200 z-30 border border-gray-100 ${productsDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <Link href="/g1-specs" className={`block px-4 py-2 ${pathname === '/g1-specs' ? 'bg-orange-50 text-orange-600' : 'text-[#2B1C48]'} hover:bg-orange-50 hover:text-orange-600 transition-colors rounded-t-lg first:rounded-t-lg last:rounded-b-lg font-heading`}>G1</Link>
                <Link href="/b1-specs" className={`block px-4 py-2 ${pathname === '/b1-specs' ? 'bg-orange-50 text-orange-600' : 'text-[#2B1C48]'} hover:bg-orange-50 hover:text-orange-600 transition-colors font-heading`}>B1</Link>
                <Link href="/go1-specs" className={`block px-4 py-2 ${pathname === '/go1-specs' ? 'bg-orange-50 text-orange-600' : 'text-[#2B1C48]'} hover:bg-orange-50 hover:text-orange-600 transition-colors rounded-b-lg last:rounded-b-lg font-heading`}>GO1</Link>
              </div>
            </div>
            
            <div className="relative cursor-pointer group" onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
              <div className="flex items-center space-x-1">
                <span className={`${pathname.includes('/services') ? 'text-orange-500' : 'text-[#2B1C48]'} group-hover:text-orange-500 transition-all duration-300 font-medium relative z-10 font-heading`}>Services</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-orange-500 group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              {/* Services Dropdown menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-40 bg-white rounded-lg shadow-lg transition-all duration-200 z-30 border border-gray-100 ${servicesDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link href="/services/sales" className={`block px-4 py-2 ${pathname === '/services/sales' ? 'bg-orange-50 text-orange-600' : 'text-[#2B1C48]'} hover:bg-orange-50 hover:text-orange-600 transition-colors rounded-t-lg first:rounded-t-lg font-heading`}>Sales</Link>
                <Link href="/services/rental" className={`block px-4 py-2 ${pathname === '/services/rental' ? 'bg-orange-50 text-orange-600' : 'text-[#2B1C48]'} hover:bg-orange-50 hover:text-orange-600 transition-colors rounded-b-lg last:rounded-b-lg font-heading`}>Rental</Link>
              </div>
            </div>
            
            <Link href="/support/terms-policies" className={`relative ${pathname.includes('/support') ? 'text-orange-500' : 'text-[#2B1C48]'} hover:text-orange-500 transition-all duration-300 font-medium group`}>
              <span className="relative z-10 font-heading">Support</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/contact" className={`relative ${pathname.includes('/contact') ? 'text-orange-500' : 'text-[#2B1C48]'} hover:text-orange-500 transition-all duration-300 font-medium group`}>
              <span className="relative z-10 font-heading">Contact Us</span>
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
              <Link 
                href="/about-us" 
                onClick={handleMobileLinkClick}
                className={`${pathname.includes('/about-us') ? 'text-orange-500' : 'text-[#2B1C48]'} hover:text-orange-500 transition-all duration-300 font-medium font-heading`}
              >
                About Us
              </Link>
              
              {/* Products Dropdown for Mobile */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className={`flex items-center justify-between w-full ${pathname.includes('/g1-specs') || pathname.includes('/b1-specs') || pathname.includes('/go1-specs') ? 'text-orange-500' : 'text-[#2B1C48]'} font-semibold font-heading`}
                >
                  <span>Products</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileProductsOpen && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2">
                    <Link 
                      href="/g1-specs" 
                      onClick={handleMobileLinkClick}
                      className={`${pathname === '/g1-specs' ? 'text-orange-500' : 'text-[#2B1C48]'} hover:text-orange-500 transition-all font-heading`}
                    >
                      G1 Humanoid Robot
                    </Link>
                    <Link 
                      href="/b1-specs" 
                      onClick={handleMobileLinkClick}
                      className={`${pathname === '/b1-specs' ? 'text-orange-500' : 'text-[#2B1C48]'} hover:text-orange-500 transition-all font-heading`}
                    >
                      B1 Quadruped Robot
                    </Link>
                    <Link 
                      href="/go1-specs" 
                      onClick={handleMobileLinkClick}
                      className={`${pathname === '/go1-specs' ? 'text-orange-500' : 'text-[#2B1C48]'} hover:text-orange-500 transition-all font-heading`}
                    >
                      GO1 Quadruped Robot
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Services Dropdown for Mobile */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center justify-between w-full ${pathname.includes('/services') ? 'text-orange-500' : 'text-[#2B1C48]'} font-semibold font-heading`}
                >
                  <span>Services</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2">
                    <Link 
                      href="/services/sales" 
                      onClick={handleMobileLinkClick}
                      className={`${pathname === '/services/sales' ? 'text-orange-500' : 'text-[#2B1C48]'} hover:text-orange-500 transition-all font-heading`}
                    >
                      Sales
                    </Link>
                    <Link 
                      href="/services/rental" 
                      onClick={handleMobileLinkClick}
                      className={`${pathname === '/services/rental' ? 'text-orange-500' : 'text-[#2B1C48]'} hover:text-orange-500 transition-all font-heading`}
                    >
                      Rental
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/support/terms-policies" 
                onClick={handleMobileLinkClick}
                className={`${pathname.includes('/support') ? 'text-orange-500' : 'text-[#2B1C48]'} hover:text-orange-500 transition-all duration-300 font-medium font-heading`}
              >
                Support
              </Link>
              <Link 
                href="/contact" 
                onClick={handleMobileLinkClick}
                className={`${pathname.includes('/contact') ? 'text-orange-500' : 'text-[#2B1C48]'} hover:text-orange-500 transition-all duration-300 font-medium font-heading`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 