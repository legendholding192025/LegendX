"use client"
 
import Image from "next/image"
import { useEffect, useState } from "react"

// Preload critical images
const preloadImages = () => {
  const imageUrls = [
    'https://cdn.legendholding.com/images/cdn_6862a6e1eef048.35976175_20250630_150153.jpg',
    'https://cdn.legendholding.com/images/cdn_6862aedc3ac7d3.80278555_20250630_153556.png',
    'https://cdn.legendholding.com/images/cdn_686295fca18de1.20003521_20250630_134948.png'
  ]
  
  imageUrls.forEach(url => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = url
    document.head.appendChild(link)
  })
}
 

 
export default function AboutUsPage() {
  const [scrollY, setScrollY] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
 
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    
    // Preload critical images
    preloadImages()
    
    // Set images as loaded after a short delay to allow for preloading
    const timer = setTimeout(() => setImagesLoaded(true), 100)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])
 
  return (
    <main>
        {/* About Us and Our Story Section */}
        <div className="min-h-screen flex flex-col items-center relative overflow-hidden bg-white">
          {/* Our Story Section */}
          <section className="w-full py-8 md:py-14 px-0 relative bg-[#5D376E] overflow-hidden">
            {/* Background Image with Next.js Image component */}
            <div className="absolute inset-0 z-0 flex justify-end items-end">
              <Image
                src="https://cdn.legendholding.com/images/cdn_6862a6e1eef048.35976175_20250630_150153.jpg"
                alt="Legend Holding Group background"
                width={2000}
                height={1500}
                priority
                className={`transition-opacity duration-500 ${
                  imagesLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  maxWidth: '95%',
                  width: '95%',
                  height: '95%',
                  objectFit: 'contain',
                  objectPosition: 'right bottom'
                }}
                quality={85}
                onLoad={() => setImagesLoaded(true)}
              />
              {!imagesLoaded && (
                <div className="absolute inset-0 bg-[#5D376E] animate-pulse"></div>
              )}
            </div>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-[#5D376E]/40 z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              {/* About Us Heading - Centered across full width */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  About Us
                </h1>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative">
                {/* Our Story Content */}
                <div className="order-1 lg:order-1 z-10 relative">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#F3A13B] mb-8 leading-tight">
                      Legend X
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-white leading-relaxed">
                      Is a robotics company specialized in cutting-edge technology and
                      AI-driven innovations. We offer advanced robotics solutions designed
                      to integrate everyday life with AI, both at the corporate and personal
                      level.
                    </p>
                    <p className="text-lg md:text-xl text-white leading-relaxed">
                      By harnessing the power of artificial intelligence, our smart automation
                      systems deliver efficiency, convenience, and a meaningful impact on
                      society. From service and surveillance robots to inspection and
                      personal assistants, our technologies are built to seamlessly integrate
                      into real-world environments.
                    </p>
                    <p className="text-lg md:text-xl text-white leading-relaxed">
                      As part of Legend Holding Group, a diversified enterprise
                      headquartered in Dubai, Legend X benefits from a legacy of innovation
                      spanning industries such as Technology, automotive, trading, energy,
                      travel & tourism, and mobility services across the Middle East and
                      Africa.
                    </p>
                  </div>
                </div>

                {/* Empty div for grid layout balance */}
                <div className="order-2 lg:order-2"></div>
              </div>
              
            </div>
          </section>

          {/* Vision Section */}
          <section className="w-full py-12 md:py-20 px-0 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Vision Content */}
                <div className="order-1 lg:order-1">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#F08900] mb-8 leading-tight">
                      Our Vision
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      To seamlessly connect the physical and digital worlds, revolutionizing
                      supply chains with cutting-edge financial technology, and become the
                      global leader in intelligent, data-driven solutions that empower
                      businesses to thrive through efficiency, transparency, and sustainable
                      growth.
                    </p>
                  </div>
                </div>

                {/* Vision Card Image */}
                <div className="order-2 lg:order-2">
                  <div className="relative">
                    <Image
                      src="https://cdn.legendholding.com/images/cdn_687a1f4c67df37.03007310_20250718_101748.png"
                      alt="Vision illustration"
                      width={550}
                      height={400}
                      className="w-96 h-auto opacity-90 mx-auto"
                      priority
                      sizes="(max-width: 768px) 384px, (max-width: 1200px) 384px, 384px"
                      quality={85}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section
            className="w-full relative overflow-hidden"
            style={{
              minHeight: '500px',
              background: '#E69736',
            }}
          >
            {/* Purple diagonal overlay - Desktop */}
            <div
              className="absolute inset-0 z-0 hidden md:block"
              style={{
                background: '#5D376E',
                clipPath: 'polygon(100% 0px, 100% 100%, 50% 100%)',
              }}
            />
            {/* Purple diagonal overlay - Mobile */}
            <div
              className="absolute inset-0 z-0 block md:hidden"
              style={{
                background: '#5D376E',
                clipPath: 'polygon(100% 40%, 100% 100%, 0% 100%)',
              }}
            />
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center min-h-[500px] px-4 md:px-6 lg:px-8 z-10">
              {/* Mission Content */}
              <div className="order-1 lg:order-1 py-16 lg:py-24 pr-0 lg:pr-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight text-left">
                  Our Mission
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-10 text-[#5D376E] text-left max-w-xl">
                  We are dedicated to fostering happiness and delivering value, focusing on
                  building a sustainable future.
                </p>
              </div>
              {/* Mascot Image and Stat */}
              <div className="order-2 lg:order-2 relative flex flex-col items-center justify-center h-full min-h-[400px]">
                <div className="flex-1 flex items-center justify-center w-full lg:ml-16 -mt-12 md:mt-0">
                  <Image
                    src="https://cdn.legendholding.com/images/cdn_68831dafb50c56.86321986_20250725_060119.png"
                    alt="Mascot"
                    width={350}
                    height={350}
                    className="object-contain drop-shadow-2xl bg-transparent w-72 h-72 md:w-72 md:h-72 lg:w-96 lg:h-96"
                    priority
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 288px, 384px"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl text-[#2C2341] mb-4">Our Core Values</h2>
                <p className="text-lg text-[#2C2341] max-w-2xl mx-auto">
                  Are the principles that guide every decision and action we take.
                </p>
              </div>
              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {[
                  {
                    icon: "/loyalty.svg",
                    title: "Loyalty",
                    desc: "Commitment to our stakeholders and partners, building lasting relationships based on trust and mutual respect.",
                  },
                  {
                    icon: "/excellence.svg",
                    title: "Excellence",
                    desc: "Striving for the highest standards in all we do, continuously improving and delivering exceptional results.",
                  },
                  {
                    icon: "/growth.svg",
                    title: "Growth",
                    desc: "Continuous improvement and sustainable development, fostering innovation and embracing new opportunities.",
                  },
                  {
                    icon: "/empathy.svg",
                    title: "Empathy",
                    desc: "Understanding and addressing the needs of others, creating solutions that truly make a difference.",
                  },
                  {
                    icon: "/nimble.svg",
                    title: "Nimble",
                    desc: "Agility and adaptability in a changing world, responding quickly to new challenges and opportunities.",
                  },
                  {
                    icon: "/diversity.svg",
                    title: "Diversity",
                    desc: "Embracing different perspectives and backgrounds, fostering an inclusive environment for innovation.",
                  },
                ].map((value, index) => (
                  <div
                    key={value.title}
                    className="group bg-[#5D376E] rounded-xl p-6 flex flex-col items-center text-center min-h-40 max-w-lg mx-auto transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#5D376E]/20 cursor-pointer transform hover:scale-[1.02]"
                  >
                    <div className="text-white mb-2 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={value.icon}
                        alt={`${value.title} icon`}
                        width={48}
                        height={48}
                        className="w-12 h-12 mx-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#F3A13B] mb-2">{value.title}</h3>
                    <p className="text-white text-base leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
  )
} 