import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,    
} from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
     { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#order-process' },
    { label: 'Our Platform', href: '#our-platform' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'TMT & Cement Supply',
    'Full Construction',
    'Architectural Design',
    'Interior Solutions',
    'Project Consultation'
  ];

//   const socialLinks = [
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Instagram, href: '#', label: 'Instagram' },
//   ];

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-black tracking-tighter text-orange-500 mb-6">
              BRICKN<span className="text-white">BAR</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-sm">
              Your premier PAN India construction ecosystem. Delivering transparency, quality materials, and expert engineering to your doorstep.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-600"></span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-orange-600 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-8 relative inline-block">
              Our Expertise
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-600"></span>
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-slate-400 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-8 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-600"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Call Us</p>
                  <p className="text-white">+91 9777-772-782</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Email Us</p>
                  <a href="mailto:info@bricknbar.com" className="text-white hover:text-orange-500 transition-colors">
                    info@bricknbar.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Location</p>
                  <p className="text-white">Bricknbar, K4 Kalinga vihar, Bhubaneswar</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              © {currentYear} <span className="text-white font-bold">BricknBar</span>. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}