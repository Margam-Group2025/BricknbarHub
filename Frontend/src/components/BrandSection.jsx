import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ALL_BRANDS = [
  { name: "Tata Tiscon", logo: "https://tatatiscon.co.in/images/tata-tiscon-logo.png" },
  { name: "JSW Steel", logo: "https://www.jsw.in/wp-content/themes/JSWGroup/images/JSW_Group_Logo.png" },
  { name: "Ultratech", logo: "https://upload.wikimedia.org/wikipedia/en/9/96/Ultratech_Cement_Logo.svg" },
  { name: "Asian Paints", logo: "https://i.pinimg.com/564x/8c/84/81/8c8481982d6475f8c3752c1e204619c7.jpg" },
  { name: "Berger", logo: "https://etimg.etb2bimg.com/photo/101448981.cms" },
  { name: "Birla Opus", logo: "https://assets.birlaopus.com/is/image/grasimindustries/footer-opus-logo-resize?ts=1740568574949&dpr=off" },
  { name: "Havells", logo: "https://iconape.com/wp-content/png_logo_vector/havells-logo.png" },
  { name: "Polycab", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Polycab_India_logo.png?_=20260414150639" },
  { name: "Astral", logo: "https://vectorseek.com/wp-content/uploads/2025/10/Astral-Pipes-Logo-PNG-SVG-Vector.png" }
];

export default function TrustedBrandsSection() {
  const [radius, setRadius] = useState(280);

  // Update radius based on screen size safely
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(130); // Small Mobile
      else if (window.innerWidth < 1024) setRadius(200); // Tablet
      else setRadius(280); // Desktop
    };
    
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section id="partners" className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 z-20 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-orange-600 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                The BricknBar Network
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Build with <br />
                <span className="text-orange-600">Legendary Brands.</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                We believe a strong home starts with premium ingredients. BricknBar partners with India's most trusted manufacturers.
              </p>

              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95">
                Explore All 55+ Brands
              </button>
            </motion.div>
          </div>

          {/* Right Side: Orbital Brand Hub */}
          <div className="lg:col-span-7 relative flex justify-center items-center h-100 md:h-150 lg:h-175">
            
            {/* Center Core */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="absolute w-28 h-28 md:w-44 md:h-44 rounded-full bg-white shadow-2xl z-20 flex items-center justify-center border-4 border-orange-100 p-4"
            >
              <span className="text-orange-600 font-bold text-sm md:text-xl text-center leading-tight">
                BricknBar <br/> Hub
              </span>
            </motion.div>

            {/* Orbit Decorative Rings */}
            <div className="absolute w-60 h-60 md:w-112.5 md:h-112.5 border border-slate-200 rounded-full animate-[spin_20s_linear_infinite] opacity-50" />
            <div className="absolute w-[320px] h-80 md:w-150 md:h-150 border border-slate-100 rounded-full hidden md:block" />

            {/* Brand Orbs */}
            <div className="relative w-full h-full flex items-center justify-center">
              {ALL_BRANDS.map((brand, index) => {
                const angle = (index * (360 / ALL_BRANDS.length)) * (Math.PI / 180);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.05, 
                      type: "spring", 
                      stiffness: 100 
                    }}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className="group"
                  >
                    <motion.div 
                      animate={{ 
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                      className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-white shadow-lg flex items-center justify-center p-3 md:p-5 border border-slate-100 transition-all group-hover:border-orange-400 group-hover:shadow-orange-100 cursor-pointer"
                    >
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                      />
                    </motion.div>
                    
                    {/* Tooltip name */}
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] md:text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                      {brand.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}