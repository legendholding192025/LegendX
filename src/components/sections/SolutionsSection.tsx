import Image from 'next/image';

const solutions = [
  {
    title: 'Security',
    description: 'Robots can be programmed to serve as patrolling units, enhancing security across properties and various facilities.',
    image: 'https://cdn.legendholding.com/images/cdn_68822540b5df73.68688615_20250724_122120.png',
  },
  {
    title: 'Firefighting',
    description: 'Robots can be programmed and equipped with advanced firefighting tools to help save lives. Through real-time object detection and analysis, they can identify hazards, flag critical threats, and share live data to support rapid emergency response.',
    image: 'https://cdn.legendholding.com/images/cdn_687f9333cab3d7.89801651_20250722_133339.jpg',
  },
  {
    title: 'Inspection',
    description: 'Robots can be programmed to perform routine and high-risk inspections with precision at facilities. Equipped with advanced sensors and cameras, they can monitor equipment, detect anomalies, and transmit real-time data to enhance safety and operational efficiency across industrial and commercial environments.',
    image: 'https://cdn.legendholding.com/images/cdn_687f925f50a2a3.83903043_20250722_133007.jpg',
  },
  {
    title: 'Construction',
    description: 'Robots - B1 can support construction sites by transporting materials of up to 80 kg standing and 20kg walking, conducting site monitoring, and performing safety inspections. Its ability to operate in challenging environments across terrains, and deliver real-time data helps reduce risks and enhance overall project efficiency.',
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
            <div className={`md:w-1/2 w-full flex flex-col justify-center h-60 md:h-64 p-6 ${idx % 2 === 0 ? 'bg-[#2B1C48]' : 'bg-[#EE8900]'}`}>
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