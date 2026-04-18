import React from 'react';
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
  return (
    <section id="partners" className="py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-400 mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-600 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                The BricknBar Network
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8">
                Build with <br />
                <span className="text-orange-600">Legendary Brands.</span>
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-10 max-w-md">
                  We believe a strong home starts with premium ingredients. BricknBar partners with India's most trusted manufacturers to ensure your peace of mind.
              </p>

              <div className="flex items-center gap-6">
                 <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg">
                   Explore All 55+ Brands
                 </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Orbital Brand Hub */}
          <div className="lg:col-span-7 relative flex justify-center items-center h-125 md:h-175">
            
            {/* Center Core (BricknBar Logo placeholder) */}
            <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-white shadow-2xl z-20 flex items-center justify-center border-4 border-orange-50">
               <span className="text-orange-600 font-bold text-xl md:text-2xl text-center">BricknBar <br/> Hub</span>
            </div>

            {/* Orbit Lines (Design Visual) */}
            <div className="absolute w-75 h-75 md:w-125 md:h-125 border border-slate-200 rounded-full animate-pulse" />
            <div className="absolute w-112.5 h-112.5 md:w-162.5 md:h-162.5 border border-slate-100 rounded-full" />

            {/* Brand Orbs */}
            <div className="relative w-full h-full">
              {ALL_BRANDS.map((brand, index) => {
                // Circular Math for positioning
                const angle = (index * (360 / ALL_BRANDS.length)) * (Math.PI / 180);
                const radius = window.innerWidth < 768 ? 160 : 280; // Distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.2, zIndex: 50 }}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className="group"
                  >
                    <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-white shadow-xl flex items-center justify-center p-4 md:p-6 border border-slate-50 transition-all group-hover:border-orange-200 cursor-pointer">
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                    {/* Tooltip name */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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