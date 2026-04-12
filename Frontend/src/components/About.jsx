import React from 'react';
import { motion } from 'framer-motion';

// Replace with your actual construction/architecture image
const ABOUT_IMG = "https://media.istockphoto.com/id/1269527219/photo/construction-engineer-supervising-building-process.jpg?b=1&s=612x612&w=0&k=20&c=Enj5U1GyjpppkQnQMfOfER4rmPKWaSM_n_N-0X04QUk=";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 w-full bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-orange-50/50 rounded-bl-full -z-10" />

      <div className="max-w-400 mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Image Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FadeIn>
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative h-125 md:h-150 w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={ABOUT_IMG}
                    alt="Architectural planning and construction"
                    className="w-full h-full object-cover"
                  />
                  {/* Internal border overlay */}
                  <div className="absolute inset-0 border-12 border-white/10 m-4 rounded-xl pointer-events-none" />
                </div>

                {/* Floating Experience Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-8 rounded-2xl shadow-xl hidden md:block"
                >
                  <p className="text-2xl font-bold font-sans">Unified Platform</p>
                  <p className="text-xs uppercase tracking-widest opacity-80">100% Transparency</p>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <FadeIn>
              <span className="text-orange-600 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                About BricknBar
              </span>
              
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold leading-[1.15] mb-8">
                Redefining the Indian <span className="text-orange-600">Construction</span> Landscape.
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                <p>
                  BricknBar is more than a service provider; we are your dedicated partner in building the future. 
                  We recognized the fragmentation and opacity in the traditional construction industry and set 
                  out to create a unified, transparent ecosystem.
                </p>
                <p>
                  <span className="font-medium text-slate-900">At BricknBar</span>, we redefine excellence by ensuring timeless delivery, sourcing only the finest materials, and providing  
                  <span className="font-medium text-orange-600"> seamless construction services </span> across India.
                </p>
              </div>

              {/* Stats / Features Grid */}
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
                <div className="group">
                  <p className="font-heading text-4xl md:text-5xl text-slate-900 font-bold mb-2 group-hover:text-orange-600 transition-colors">
                    100%
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-orange-600" />
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">Transparency</p>
                  </div>
                </div>

                <div className="group">
                  <p className="font-heading text-4xl md:text-5xl text-slate-900 font-bold mb-2 group-hover:text-orange-600 transition-colors">
                    PAN
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-orange-600" />
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">India Reach</p>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <motion.div className="mt-12" whileHover={{ x: 10 }}>
                <a href="#contact" className="inline-flex items-center gap-3 text-slate-900 font-bold group">
                  <span className="border-b-2 border-orange-600 pb-1">Learn more about our mission</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M4.16663 10H15.8333M15.8333 10L10 4.16669M15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}