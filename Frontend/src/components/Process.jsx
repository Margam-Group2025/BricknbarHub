import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Planning",
    desc: "We begin with a deep dive into your vision, site analysis, and budget planning to create a rock-solid project roadmap.",
    img: "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=1000"
  },
  {
    num: "02",
    title: "Architectural Mapping",
    desc: "Our visionary designers create 2D/3D layouts ensuring optimal space utilization, ventilation, and modern aesthetics.",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000"
  },
  {
    num: "03",
    title: "Precision Engineering",
    desc: "From advanced waterproofing to RustGuard TMT selection, our engineering team ensures structural longevity.",
    img: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1000"
  },
  {
    num: "04",
    title: "Smart Construction",
    desc: "Experience real-time updates through our platform as our expert contractors bring the blueprint to life with 5X supervision.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000"
  }
];

const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function ProcessSection() {
  const containerRef = useRef(null);
  
  // Tracking scroll progress for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="process" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-400 mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Side: Sticky Content */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <FadeIn>
              <span className="text-orange-600 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                The Roadmap
              </span>
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold leading-tight mb-6">
                A Structured Path <br /> To Perfection.
              </h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                We've refined our workflow to eliminate surprises and ensure a 
                seamless journey from the first sketch to the final handover.
              </p>
              
              {/* Decorative Element */}
              <div className="mt-10 hidden lg:block">
                <div className="w-12 h-1 bg-orange-600 rounded-full" />
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Timeline Steps */}
          <div className="lg:col-span-7 lg:col-start-6 relative">
            
            {/* Background Grey Line */}
            <div className="absolute left-6.75 top-0 bottom-0 w-0.5 bg-slate-100 hidden md:block" />

            {/* Dynamic Orange Animated Line */}
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-6.75 top-0 bottom-0 w-0.5 bg-orange-600 hidden md:block z-10"
            />

            <div className="space-y-32">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-16 group">

                  {/* Circle Indicator */}
                  <div className="relative z-20 shrink-0 w-14 h-14 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center group-hover:border-orange-600 group-hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all duration-500">
                    <span className="font-heading text-xl font-bold text-slate-400 group-hover:text-orange-600 transition-colors duration-500">
                      {step.num}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="grow pt-2">
                    <FadeIn>
                      <h4 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-slate-500 text-lg font-light leading-relaxed mb-8 max-w-xl">
                        {step.desc}
                      </p>
                      
                      {/* Image Card */}
                      <div className="group relative h-72 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                        <img
                          src={step.img}
                          alt={step.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-50 group-hover:grayscale-0"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                      </div>
                    </FadeIn>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}