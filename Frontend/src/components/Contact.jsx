import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function ContactSection() {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // 2. State for Validation and Feedback
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    // Email Regex Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    // 3. Success Logic
    console.log("Form Submitted Successfully:", formData);
    setStatus({ type: 'success', message: 'Message sent successfully! We will contact you soon.' });

    // 4. Clear Fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });

    // Clear success message after 5 seconds
    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-orange-600 text-sm font-bold tracking-widest uppercase">
                Get in Touch
                </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] mb-8 mt-4">
                Build Your Vision <br />
                <span className="text-orange-600 italic">Right Now.</span>
              </h3>
              
              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-xl mb-1">Our Base</h4>
                    <p className="text-slate-500 font-medium italic">Bricknbar, K4 Kalinga vihar, Bhubaneswar </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-xl mb-1">Call Us</h4>
                    <p className="text-slate-500 font-medium">+91 9777772782</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-green-600 font-bold uppercase">
                       <Clock size={12}/> Mon - Sat: 10am - 7pm
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-xl mb-1">Email Support</h4>
                    <a href="mailto:info@bricknbar.com" className="text-slate-500 font-medium hover:text-orange-500 transition-colors">
                      info@bricknbar.com
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <form 
                onSubmit={handleSubmit}
                className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-8 border-orange-500"
              >
                {/* Status Messages */}
                {status.message && (
                  <div className={`mb-8 p-4 flex items-center gap-3 font-bold text-sm ${
                    status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {status.type === 'success' ? <CheckCircle2 size={20}/> : <AlertCircle size={20}/>}
                    {status.message}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-tighter text-black">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-all text-black font-medium placeholder:text-slate-300" 
                      placeholder="e.g. Rahul" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-tighter text-black">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-all text-black font-medium placeholder:text-slate-300" 
                      placeholder="e.g. Sharma" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-8">
                  <label className="text-xs font-black uppercase tracking-tighter text-black">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-all text-black font-medium placeholder:text-slate-300" 
                    placeholder="rahul@company.com" 
                  />
                </div>

                <div className="space-y-2 mb-10">
                  <label className="text-xs font-black uppercase tracking-tighter text-black">Project Details *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-all text-black font-medium placeholder:text-slate-300 resize-none" 
                    placeholder="Tell us about your requirement..."
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full py-5 bg-black text-orange-500 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl"
                >
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}