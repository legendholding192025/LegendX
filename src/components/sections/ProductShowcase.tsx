import Link from 'next/link';
import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <section className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#5E366D] mb-4 text-center">Product Showcase</h2>
        <div className="w-24 h-1 bg-[#EE8900] mx-auto rounded-full mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Product Card 1 - G1 Robot */}
          <div className="text-center">
            <div className="relative group overflow-hidden rounded-lg mb-2">
              <div className="relative transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  src="/product-card-template.png"
                  alt="Product Card 1"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
                <Image
                  src="https://cdn.legendholding.com/images/cdn_6878f98bc62536.75650695_20250717_132427.png"
                  alt="G1 Robot"
                  width={300}
                  height={375}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-auto opacity-90"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  quality={85}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-2xl font-bold text-gray-900">G1</h3>
              <button className="bg-[rgb(43,28,72)] hover:bg-[rgb(53,38,82)] text-white px-8 py-3 rounded-lg transition-colors duration-300 text-sm">
                View Specs
              </button>
            </div>
          </div>
          
          {/* Product Card 2 - B1 Robot */}
          <div className="text-center">
            <div className="relative group overflow-hidden rounded-lg mb-2">
              <div className="relative transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  src="/product-card-template.png"
                  alt="Product Card 2"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
                <Image
                  src="https://cdn.legendholding.com/images/cdn_6878f99f709cd3.49402397_20250717_132447.png"
                  alt="B1 Robot"
                  width={300}
                  height={375}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-auto opacity-90"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  quality={85}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-2xl font-bold text-gray-900">B1</h3>
              <button className="bg-[rgb(43,28,72)] hover:bg-[rgb(53,38,82)] text-white px-8 py-3 rounded-lg transition-colors duration-300 text-sm">
                View Specs
              </button>
            </div>
          </div>
          
          {/* Product Card 3 - GO1 Robot */}
          <div className="text-center">
            <div className="relative group overflow-hidden rounded-lg mb-2">
              <div className="relative transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  src="/product-card-template.png"
                  alt="Product Card 3"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
                <Image
                  src="https://cdn.legendholding.com/images/cdn_6878f9b660f4d3.77162304_20250717_132510.png"
                  alt="GO1 Robot"
                  width={300}
                  height={375}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-auto opacity-90"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  quality={85}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-2xl font-bold text-gray-900">GO1</h3>
              <button className="bg-[rgb(43,28,72)] hover:bg-[rgb(53,38,82)] text-white px-8 py-3 rounded-lg transition-colors duration-300 text-sm">
                View Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 