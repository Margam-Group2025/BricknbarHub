import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  Gem, 
  Users, 
  Zap, 
  MapPin 
} from 'lucide-react';

const FEATURES = [
  {
    title: "100% Transparency",
    desc: "Real-time updates and clear pricing. No hidden costs, no surprise delays—just honest building.",
    icon: ShieldCheck,
  },
  {
    title: "Timely Delivery",
    desc: "Our project management systems ensure your dream home is delivered on the promised schedule.",
    icon: Clock,
  },
  {
    title: "Premium Materials",
    desc: "From RustGuard TMT to advanced waterproofing, we source only the highest-grade materials.",
    icon: Gem,
  },
  {
    title: "Expert Supervision",
    desc: "5X Engineering oversight means senior professionals check every detail of your construction site.",
    icon: Users,
  },
  {
    title: "Smart Monitoring",
    desc: "Digital curing tracking and automated reporting keep you informed without having to visit the site.",
    icon: Zap,
  },
  {
    title: "PAN India Reach",
    desc: "Standardized high-quality construction services available across all major cities in India.",
    icon: MapPin,
  },
];

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-24 md:py-32 w-full bg-slate-50 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-orange-100/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-400 mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <FadeIn>
            <span className="text-orange-600 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              The BricknBar Advantage
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold leading-tight">
              Why We Are the <span className="text-orange-600">Trusted Choice.</span>
            </h2>
            <div className="w-20 h-1.5 bg-orange-600 mx-auto mt-8 rounded-full" />
          </FadeIn>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="relative h-full p-8 md:p-10 bg-white border border-slate-200 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(234,88,12,0.1)] hover:-translate-y-2 group overflow-hidden">
                
                {/* Top decorative element on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-orange-600 transition-colors duration-500 shadow-sm">
                  <feature.icon className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold mb-4 text-slate-900 font-heading">
                  {feature.title}
                </h4>
                <p className="text-slate-500 font-light leading-relaxed text-lg">
                  {feature.desc}
                </p>

                {/* Subtle bottom-right number indicator */}
                <span className="absolute bottom-6 right-8 text-slate-100 text-6xl font-bold -z-10 group-hover:text-orange-50 transition-colors duration-500">
                  0{index + 1}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Call to Action area (Optional) */}
        <FadeIn delay={0.6}>
          <div className="mt-20 text-center">
            <p className="text-slate-400 italic font-light">
              "Building homes with the precision of science and the warmth of trust."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}