import Link from 'next/link';
import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <section className="pt-12 pb-8 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#5E366D] mb-4 text-center">Products</h2>
        <div className="w-24 h-1 bg-[#EE8900] mx-auto rounded-full mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Product Card 1 - G1 Robot */}
          <div className="flex flex-col items-center h-full">
            <div className="relative group overflow-hidden rounded-lg mb-2 flex-shrink-0 flex-1 flex items-center justify-center">
              <div className="relative transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  src="https://cdn.legendholding.com/images/cdn_6878f98bc62536.75650695_20250717_132427.png"
                  alt="G1 Robot"
                  width={300}
                  height={375}
                  className="w-4/5 h-auto opacity-90 mx-auto max-w-xs"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  quality={85}
                />
              </div>
            </div>
            <div className="w-full flex justify-center mt-auto">
              <Link href="/g1-specs" className="flex items-center rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md h-12">
                <div className="bg-[#EE8900] text-white px-4 font-bold text-lg flex items-center justify-center h-full min-w-[60px]">
                  G1
                </div>
                <div className="bg-[#2B1C48] text-white px-6 font-medium text-sm hover:bg-[#3A2A5A] transition-colors duration-300 flex items-center justify-center h-full min-w-[140px]">
                  View Specs
                </div>
              </Link>
            </div>
          </div>
          
          {/* Product Card 2 - B1 Robot */}
          <div className="flex flex-col items-center h-full">
            <div className="relative group overflow-hidden rounded-lg mb-2 flex-shrink-0 flex-1 flex items-center justify-center">
              <div className="relative transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  src="https://cdn.legendholding.com/images/cdn_6878f99f709cd3.49402397_20250717_132447.png"
                  alt="B1 Robot"
                  width={300}
                  height={375}
                  className="w-4/5 h-auto opacity-90 mx-auto max-w-xs"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  quality={85}
                />
              </div>
            </div>
            <div className="w-full flex justify-center mt-auto">
              <Link href="/b1-specs" className="flex items-center rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md h-12">
                <div className="bg-[#EE8900] text-white px-4 font-bold text-lg flex items-center justify-center h-full min-w-[60px]">
                  B1
                </div>
                <div className="bg-[#2B1C48] text-white px-6 font-medium text-sm hover:bg-[#3A2A5A] transition-colors duration-300 flex items-center justify-center h-full min-w-[140px]">
                  View Specs
                </div>
              </Link>
            </div>
          </div>
          
          {/* Product Card 3 - GO1 Robot */}
          <div className="flex flex-col items-center h-full">
            <div className="relative group overflow-hidden rounded-lg mb-2 flex-shrink-0 flex-1 flex items-center justify-center">
              <div className="relative transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  src="https://cdn.legendholding.com/images/cdn_6878f9b660f4d3.77162304_20250717_132510.png"
                  alt="GO1 Robot"
                  width={300}
                  height={375}
                  className="w-4/5 h-auto opacity-90 mx-auto max-w-xs"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  quality={85}
                />
              </div>
            </div>
            <div className="w-full flex justify-center mt-auto">
              <Link href="/go1-specs" className="flex items-center rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md h-12">
                <div className="bg-[#EE8900] text-white px-4 font-bold text-lg flex items-center justify-center h-full min-w-[60px]">
                  GO1
                </div>
                <div className="bg-[#2B1C48] text-white px-6 font-medium text-sm hover:bg-[#3A2A5A] transition-colors duration-300 flex items-center justify-center h-full min-w-[140px]">
                  View Specs
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 