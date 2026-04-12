import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Replace this with your actual image path
const PLACEHOLDER_IMG = "https://static.wixstatic.com/media/a3674d_2b36642ff35742c7964ede46491b90b4~mv2.png/v1/fill/w_502,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a3674d_2b36642ff35742c7964ede46491b90b4~mv2.png";

export default function HeroSection() {
  const ref = useRef(null);
  
  // Hook for scroll-linked animations
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"] 
  });

  // Parallax and Fade effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={ref} 
      className="relative h-screen min-h-[70vh] w-full overflow-hidden flex items-center justify-center bg-zinc-900"
    >
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" /> 
        
        <img 
          src={PLACEHOLDER_IMG} 
          alt="Modern construction site" 
          className="w-full h-full object-cover scale-105"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-400 mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center text-center mt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
            The Complete Construction Ecosystem
          </span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight max-w-5xl"
        >
          Build Your Dream Home with One Trusted Platform
        </motion.h1>
        
        {/* Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl font-light"
        >
          Materials, Services, and Complete Construction Solutions – All in One Place. Experience the future of building in India.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#contact" 
            className="group relative px-8 py-4 bg-orange-600 text-white overflow-hidden rounded-sm flex items-center justify-center transition-transform hover:scale-105 duration-300"
          >
            <span className="relative z-10 font-medium tracking-wide">Get Started</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          
          <a 
            href="#services" 
            className="group px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
          >
            <span className="font-medium tracking-wide">Explore Services</span>
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-white/20 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}