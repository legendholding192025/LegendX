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
    image: 'https://cdn.legendholding.com/images/cdn_68822c9d96a7e4.31710694_20250724_125245.png',
  },
  {
    title: 'Inspection',
    description: 'Robots can be programmed to perform routine and high-risk inspections with precision at facilities. Equipped with advanced sensors and cameras, they can monitor equipment, detect anomalies, and transmit real-time data to enhance safety and operational efficiency across industrial and commercial environments.',
    image: 'https://cdn.legendholding.com/images/cdn_68822dea2def77.36328949_20250724_125818.png',
  },
  {
    title: 'Exploration & Detection',
    description: 'Our robots can be programmed and deployed for advanced exploration and detection tasks, helping facilities maintain a consistent and efficient operational workflow. They ensure reliable monitoring and data collection, supporting uninterrupted performance and output.',
    image: 'https://cdn.legendholding.com/images/cdn_6882300ae09421.53270817_20250724_130722.png',
  },
];

export default function SolutionsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#5D376E] mb-4 text-center">Real-World Solutions</h2>
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
            <div className={`md:w-1/2 w-full flex flex-col justify-center h-60 md:h-64 p-6 ${idx % 2 === 0 ? 'bg-[#5D376E]' : 'bg-[#EE8900]'}`}>
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