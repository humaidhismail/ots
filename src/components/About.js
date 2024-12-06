import React from 'react';
import { motion } from 'framer-motion';
import image from '../images/cockpit.jpg';

export default function Hero() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-10">
        <motion.h2 
          className="font-playfair-display-black text-5xl font-semibold md:text-6xl mb-16 text-center text-black pt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About OverTheSeas Aviation
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-playfair-display-regular text-black text-lg mb-4 leading-relaxed">
              OverTheSeas Aviation is a premier provider of aviation services, committed to excellence and safety in every aspect of our operations. With years of experience and a passion for aviation, we deliver unparalleled service to our clients.
            </p>
            <p className="font-playfair-display-regular text-black text-lg mb-4 leading-relaxed">
              Our team of expert pilots, technicians, and support staff work tirelessly to ensure that every flight is a seamless and enjoyable experience. We pride ourselves on our attention to detail and our commitment to customer satisfaction.
            </p>
          </motion.div>
          <motion.div 
            className="relative h-80 md:h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src={image}
              alt="Aviation professionals discussing"
              className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
