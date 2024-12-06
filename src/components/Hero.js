import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import images from '../images/hero.jpg'; 

export default function HeroPage() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.scrollY); 
  };

  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 768); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkIfMobile);
    checkIfMobile(); // Run on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images})`,
          transform: isMobile ? 'none' : `translateY(${offsetY * 0.3}px)`, // Parallax effect for desktop
          transition: 'transform 0.2s ease-out', // Smooth effect
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#07272D] opacity-80"></div>

      {/* Content */}
      <div className=" relative z-10 text-center text-[#CBA052] px-6 max-w-3xl">
        <motion.h1
          className="font-playfair-display-black text-4xl md:text-6xl leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevating Aviation Services
        </motion.h1>
        <motion.p
          className="text-white font-playfair-display-medium text-sm md:text-base mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Experience the pinnacle of aviation services, where safety, efficiency, and excellence take flight.
        </motion.p>
        <div className="font-playfair-display-regular flex justify-center space-x-4">
          <motion.a
            href="#services"
            className="bg-[#CBA052] text-[#07272D] px-6 py-3 rounded-full font-medium hover:bg-[#A97F38] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-white text-[#07272D] px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </section>
  );
}
