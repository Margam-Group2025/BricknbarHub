import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Globe } from 'lucide-react';

// Replace with your actual app mockups or high-quality dashboard images
const APP_MOCKUP_1 = "/images/web.png";
const APP_MOCKUP_2 = "/images/android.jpeg";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function PlatformSection() {
  const containerRef = useRef(null);
  
  // Parallax Setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section ref={containerRef} id="platform" className="py-24 md:py-32 w-full bg-slate-50 relative overflow-hidden">
      <div className="max-w-400 mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Text Content */}
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-orange-600 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                Digital First
              </span>
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold leading-tight mb-8">
                Manage Your Build <br /> From Anywhere.
              </h3>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-10">
                Our proprietary ecosystem puts the power of construction management in your pocket. 
                Experience total visibility over your site, payments, and materials with BricknBar.
              </p>

              <ul className="space-y-5 mb-12">
                {[
                  'Easy material ordering & tracking', 
                  'Real-time project updates', 
                  'Seamless vendor communication', 
                  'Secure digital escrow payments'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-orange-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Image & Buttons Side */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Parallax Image Container */}
            <div className="relative h-125 md:h-160 w-full flex flex-row gap-6 md:gap-12 justify-center items-end mb-12 px-4">
  
  {/* WEB MOCKUP: Isse thoda bada aur wide rakha gaya hai */}
  <motion.div 
    style={{ y: y1 }} 
    className="w-3/5 h-[80%] relative rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-white"
  >
    {/* Browser top bar effect for web */}
    <div className="h-6 bg-gray-200 w-full flex items-center gap-1 px-2 border-b border-gray-300">
      <div className="w-2 h-2 rounded-full bg-red-400"></div>
      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
      <div className="w-2 h-2 rounded-full bg-green-400"></div>
    </div>
    <img src={APP_MOCKUP_1} alt="Web Platform Dashboard" className="w-full h-full object-top object-cover" />
    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
  </motion.div>
  
  {/* MOBILE MOCKUP: Isse patla (narrow) aur uncha rakha gaya hai */}
  <motion.div 
    style={{ y: y2 }} 
    className="w-[28%] aspect-9/19 max-h-[95%] relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-black bg-black mb-[-20px] z-10"
  >
    {/* Mobile Notch effect */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20" />
    
    <img src={APP_MOCKUP_2} alt="Mobile App View" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
  </motion.div>

</div>

            {/* Platform Download Buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                
                {/* Android / Mobile Button */}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.bricknbarapp&pcampaignid=web_share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-xl"
                >
                  <Smartphone className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest opacity-70 leading-none">Download for</p>
                    <p className="text-lg font-bold leading-tight">Android App</p>
                  </div>
                </a>

                {/* Web Platform Button */}
                <a 
                  href="https://www.bricknbar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl hover:border-orange-600 hover:text-orange-600 transition-all duration-300 shadow-lg"
                >
                  <Globe className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest opacity-70 leading-none">Access Our</p>
                    <p className="text-lg font-bold leading-tight">Web Platform</p>
                  </div>
                </a>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}