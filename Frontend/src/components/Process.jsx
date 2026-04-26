import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ORDER_PROCESS = [
  {
    num: "01",
    title: "Smart Product Selection",
    desc: "Browse through our verified inventory of high-grade TMT bars, cement, and construction essentials. Compare prices and specifications in real-time.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000"
  },
  {
    num: "02",
    title: "Instant Quotation & Order",
    desc: "Get transparent, bulk-order pricing with no hidden costs. Place your order through our secure gateway with flexible payment options.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000"
  },
  {
    num: "03",
    title: "Quality Check & Loading",
    desc: "Every item undergoes a strict 3-point quality inspection at our warehouse before being loaded onto our heavy-duty logistics fleet.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000"
  },
  {
    num: "04",
    title: "Real-Time GPS Tracking",
    desc: "Stay updated with live tracking. Know exactly where your construction material is and get precise ETAs for site arrival.",
    img: "https://img.freepik.com/premium-photo/realtime-delivery-tracking-technology-concept-with-moving-vehicle-icon-smartphone-map-interface_416256-80136.jpg?w=360"
  },
  {
    num: "05",
    title: "On-Site Delivery & Unloading",
    desc: "Our professional team ensures safe unloading at your project site, providing digital invoices and material test certificates on the spot.",
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

export default function OrderDeliveryProcess() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="order-process" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Side: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5 bg-orange-600" />
                <span className="text-orange-600 text-sm font-bold tracking-widest uppercase">
                  Seamless Logistics
                </span>
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-black leading-[1.1] mb-8">
                From Warehouse <br /> 
                <span className="text-orange-600">To Your Site.</span>
              </h3>
              <p className="text-slate-600 text-xl font-light leading-relaxed max-w-md">
                We have made construction material delivery fast, transparent, and reliable. Track your order every step of the way.
              </p>
              <motion.a
                href="https://bricknbar.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-block px-8 py-4 bg-black text-white font-bold hover:bg-orange-600 transition-colors duration-300 rounded-sm text-center"
             >
               Start Your Order
              </motion.a>
            </FadeIn>
          </div>

          {/* Right Side: Delivery Steps */}
          <div className="lg:col-span-6 lg:col-start-7 relative">
            
            {/* Timeline Line (Background) */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            {/* Animated Orange Line */}
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-7 top-0 bottom-0 w-0.5 bg-orange-600 hidden md:block z-10"
            />

            <div className="space-y-24">
              {ORDER_PROCESS.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-12 group">

                  {/* Step Marker */}
                  <div className="relative z-20 shrink-0 w-14 h-14 bg-black flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-500 shadow-xl">
                    <span className="text-white font-bold text-lg">
                      {step.num}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="grow">
                    <FadeIn>
                      <h4 className="text-2xl font-bold text-orange-600 mb-3 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-slate-500 text-lg leading-relaxed mb-6">
                        {step.desc}
                      </p>

                      <div className="relative h-64 w-full overflow-hidden bg-slate-100 rounded-sm border-b-4 border-orange-600 transition-all duration-500">
                     <img
                       src={step.img}
                       alt={step.title}
                      className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                     />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
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