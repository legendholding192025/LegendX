import Image from 'next/image';

const solutions = [
  {
    title: 'Security',
    description: 'Advanced surveillance and monitoring capabilities for enhanced security operations.',
    image: 'https://cdn.legendholding.com/images/cdn_687f879ccd7371.25648149_20250722_124412.jpg',
  },
  {
    title: 'Firefighting',
    description: 'Robust robots designed to handle extreme conditions and emergency response scenarios.',
    image: 'https://cdn.legendholding.com/images/cdn_687f9333cab3d7.89801651_20250722_133339.jpg',
  },
  {
    title: 'Inspection',
    description: 'Precision inspection and quality control for industrial and infrastructure applications.',
    image: 'https://cdn.legendholding.com/images/cdn_687f925f50a2a3.83903043_20250722_133007.jpg',
  },
  {
    title: 'Construction',
    description: 'Heavy-duty automation solutions for construction and infrastructure development.',
    image: 'https://cdn.legendholding.com/images/cdn_687a26aa467e88.57510195_20250718_104914.png',
  },
];

export default function SolutionsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#5E366D] mb-4 text-center">Real-World Solutions</h2>
      <div className="w-24 h-1 bg-[#EE8900] mx-auto rounded-full mb-6"></div>
      <div className="space-y-12">
        {solutions.map((solution, idx) => (
          <div
            key={solution.title}
            className={`flex flex-col md:flex-row items-center rounded-xl shadow-lg bg-white overflow-hidden ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            style={{ minHeight: 240 }}
          >
            {/* Image Side */}
            <div className="md:w-1/2 w-full h-60 md:h-64 relative">
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                priority={idx === 0}
              />
            </div>
            {/* Content Side */}
            <div className="md:w-1/2 w-full flex flex-col justify-center h-60 md:h-64 p-6 bg-[#2c1b47]">
              <div className="flex items-center mb-2">
                <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
              </div>
              <p className="text-white/80 text-base">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 