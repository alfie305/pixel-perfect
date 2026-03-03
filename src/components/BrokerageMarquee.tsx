import { motion } from 'framer-motion';

// Logo data - Add your logo image paths here
const brokerages = [
  { name: 'Compass', logo: '/logos/compass.png' },
  { name: 'Keller Williams', logo: '/logos/keller-williams.png' },
  { name: 'RE/MAX', logo: '/logos/remax.png' },
  { name: 'Redfin', logo: '/logos/redfin.png' },
  { name: 'Coldwell Banker', logo: '/logos/coldwell-banker.png' },
  { name: "Sotheby's International", logo: '/logos/sothebys.png' },
  { name: 'eXp Realty', logo: '/logos/exp-realty.png' },
  { name: 'Century 21', logo: '/logos/century21.png' },
  { name: 'The Keyes Company', logo: '/logos/keyes-company.png' },
];

const BrokerageMarquee = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedBrokerages = [...brokerages, ...brokerages];

  return (
    <section className="py-12 md:py-16 overflow-hidden bg-gradient-to-b from-paper to-transparent">
      <div className="container mx-auto px-4 mb-8">
        <p className="font-mono text-[11px] text-text-muted text-center uppercase tracking-wider">
          Trusted by agents at
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-paper to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-paper to-transparent z-10" />

        {/* Scrolling content */}
        <motion.div
          className="flex gap-12 md:gap-16"
          animate={{
            x: [0, -100 * brokerages.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedBrokerages.map((brokerage, index) => (
            <div
              key={`${brokerage.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              style={{ width: '160px', height: '80px' }}
            >
              <img
                src={brokerage.logo}
                alt={brokerage.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-text font-display font-bold text-sm text-text-muted text-center px-4';
                    fallback.textContent = brokerage.name;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrokerageMarquee;
