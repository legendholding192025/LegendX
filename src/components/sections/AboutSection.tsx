import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_687a26aa467e88.57510195_20250718_104914.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Card */}
          <div>
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="relative transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  src="https://cdn.legendholding.com/images/cdn_6879e55f329cb7.27937214_20250718_061039.png"
                  alt="About Legend X Card"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
                {/* First Robot Image - Left Side */}
                <Image
                  src="https://cdn.legendholding.com/images/cdn_6879e56cebfb50.95795410_20250718_061052.png"
                  alt="Humanoid Robot"
                  width={400}
                  height={500}
                  className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  quality={100}
                />
                {/* Second Robot Image - Right Side */}
                <Image
                  src="https://cdn.legendholding.com/images/cdn_6879e57cb89874.42272483_20250718_061108.png"
                  alt="Quadrupedal Robot"
                  width={400}
                  height={300}
                  className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  quality={100}
                />
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#5E366D] mb-4 font-heading">About Legend X</h2>
            <div className="w-24 h-1 bg-[#EE8900] rounded-full mb-6"></div>
              <p className="text-lg text-gray-800 leading-relaxed font-sans mb-4">
                Specialized in cutting-edge technology and AI-driven innovations, the company offers advanced robotics solutions designed to enhance everyday life, both at the corporate and personal level. By harnessing the power of artificial intelligence, it delivers efficiency, convenience, and a meaningful impact on society through smart automation and intelligent systems.
              </p>
              <Link 
                href="/about-us"
                className="inline-block bg-[#EE8900] hover:bg-[#EE8900]/80 text-white px-4 py-1.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Learn More
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 