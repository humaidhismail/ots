import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import image from '../images/Overtheseas-logo-light.png';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us?', href: '#why-us' },
    { name: 'Team', href: '#team' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#07272D] shadow-lg' : 'bg-[#07272D] bg-opacity-90'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-10">
        <div className="flex justify-between items-center py-4">
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={image} alt="OverTheSeas Logo" className="w-auto h-8 object-contain" />
          </motion.a>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-[#D9D9D6] hover:text-[#CBA052] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <motion.button
            className="md:hidden text-[#CBA052]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-[#07272D] shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block py-2 text-[#D9D9D6] hover:text-[#CBA052] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}