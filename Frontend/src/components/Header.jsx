import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Reusable Button Component
const CustomButton = ({ children, onClick, className }) => (
  <button 
    onClick={onClick} 
    className={`bg-orange-600 text-white hover:bg-orange-700 px-6 py-3 rounded transition-colors font-medium ${className}`}
  >
    {children}
  </button>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#order-process' },
    { label: 'Our Platform', href: '#our-platform' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    // 1. Close mobile menu immediately
    setIsMobileMenuOpen(false);

    // 2. Small timeout to allow the menu closure to initiate 
    // This prevents the "jumping" effect during smooth scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Calculate position with an 80px offset for the fixed header
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); 
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="no-underline"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-orange-600 m-0">BricknBar Hub</h1>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors duration-300 no-underline cursor-pointer"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
          >
            <CustomButton onClick={() => scrollToSection('#contact')}>
              Get Started
            </CustomButton>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-800 hover:text-orange-600 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-gray-100 mt-2 overflow-hidden shadow-xl rounded-b-lg"
            >
              <nav className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { 
                      e.preventDefault(); 
                      scrollToSection(link.href); 
                    }}
                    className="text-base font-medium text-gray-800 hover:text-orange-600 hover:bg-orange-50 transition-all px-4 py-3 rounded-md no-underline"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="px-2 pt-4 pb-2">
                  <CustomButton 
                    className="w-full" 
                    onClick={() => scrollToSection('#contact')}
                  >
                    Get Started
                  </CustomButton>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}