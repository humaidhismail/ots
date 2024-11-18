import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import image from '../images/cockpit.jpg';

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#D9D9D6]">
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#hero-gradient)" />
        </svg>
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.h1
              className="font-playfair-display-black text-4xl lg:text-5xl xl:text-6xl text-[#07272D] mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Elevating Aviation Services in the Maldives
            </motion.h1>
            <motion.p
              className="font-playfair-display-regular text-xl text-[#07272D] mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              OverTheSeas Pvt Ltd is a premier aviation services company based in the Maldives, specializing in delivering a comprehensive range of aviation solutions to enhance operational efficiency, safety, and customer satisfaction.
            </motion.p>
            <motion.p
              className="font-playfair-display-regular text-xl text-[#07272D] mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              With a strategic location in the heart of the Indian Ocean, we serve a diverse clientele, including commercial airlines, private operators, and government agencies, providing tailored services that meet the unique challenges of the region.
            </motion.p>
            <motion.a
              href="#services"
              className="inline-flex items-center bg-[#CBA052] text-[#07272D] font-playfair-display-medium px-8 py-3 rounded-full text-lg transition-all duration-300 hover:bg-[#b18a42] hover:text-[#07272D]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.6, // Ensures smooth follow-up to text
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Explore Our Services
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative">
              <motion.img
                src={image}
                alt="OverTheSeas Aviation Services"
                className="rounded-lg shadow-2xl w-full h-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#07272D] via-transparent to-transparent opacity-50 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
