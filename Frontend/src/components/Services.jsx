import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Service Data
const SERVICES = [
  {
    id: "01",
    title: "Premium Materials",
    desc: "Sourcing high-grade cement, steel, and bricks directly from trusted manufacturers to ensure your structure's longevity.",
    img: "https://tiimg.tistatic.com/fp/1/004/388/building-materials-services-761.jpg"
  },
  {
    id: "02",
    title: "Foundation Waterproofing",
    desc: "Multi-layer specialized membrane protection and chemical coating to prevent capillary dampness and ensure a leak-proof structural base.",
    img: "https://res.cloudinary.com/dqxlte6wf/image/upload/v1768040906/vbhrck0oidgtcttog9jb.png"
  },
  {
    id: "03",
    title: "Smart Curing Monitoring System",
    desc: "Digital tracking and automated scheduling of the curing process to achieve maximum concrete compressive strength and durability.",
    img: "https://res.cloudinary.com/dqxlte6wf/image/upload/v1768041336/ha5retyey4tfhgwgjexe.png"
  },
  {
    id: "04",
    title: "RustGuard TMT Protection",
    desc: "Anti-corrosive treatment applied to high-grade TMT bars, protecting the reinforcement from oxidation and increasing structural lifespan.",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/5/507647409/YV/RZ/UV/197534267/10mm-captain-rust-guard-fe600-eqr-epoxy-coated-iron-tmt-rebars-1000x1000.png"
  },
  {
    id: "05",
    title: "5X Engineering Supervision",
    desc: "Rigorous five-tier quality checks and on-site oversight by senior civil engineers to ensure zero compromise on design specifications.",
    img: "https://res.cloudinary.com/dqxlte6wf/image/upload/v1768042192/zqhvc81rj5h0upmaldcg.png"
  },
];


const FadeIn = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="py-24 md:py-32 w-full bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="max-w-400 mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <FadeIn className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-orange-600 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Our Expertise
            </span>
            <h3 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
              Comprehensive Solutions <br /> For Every Phase.
            </h3>
          </div>
          <p className="text-slate-500 max-w-md text-lg font-light leading-relaxed">
            From the first brick to the final brushstroke, our integrated services ensure quality, 
            timely delivery, and consistency throughout your project.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
          
          {/* Interactive List Side */}
          <div className="flex flex-col relative z-10">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="group border-b border-slate-200 py-10 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-slate-300 font-heading text-xl md:text-2xl transition-colors group-hover:text-orange-600">
                      {service.id}
                    </span>
                    <h4 className="text-2xl md:text-4xl font-heading font-bold transition-transform duration-500 group-hover:translate-x-4">
                      {service.title}
                    </h4>
                  </div>
                  <ArrowRight 
                    className={`w-6 h-6 transition-all duration-500 text-orange-600 
                    ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} 
                  />
                </div>
                
                {/* Expandable Description */}
                <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-500 max-w-md pl-12 md:pl-14 text-lg font-light">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Image Preview Side */}
          <div className="hidden lg:block sticky top-32 h-150 w-full self-start">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-200 shadow-2xl relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex !== null ? hoveredIndex : 'default'}
                  initial={{ opacity: 0, scale: 1.1, filter: "grayscale(100%)" }}
                  animate={{ opacity: 1, scale: 1, filter: "grayscale(0%)" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={hoveredIndex !== null ? SERVICES[hoveredIndex].img : SERVICES[0].img}
                    alt="Service visualization"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-black/10" />
                </motion.div>
              </AnimatePresence>

              {/* Guide Overlay when not hovering */}
              {hoveredIndex === null && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                   <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white font-heading text-xl tracking-widest uppercase border border-white/30 px-6 py-2"
                   >
                    Explore Our Expertise
                   </motion.p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
