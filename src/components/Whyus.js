import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Sliders, Target } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: MapPin,
      title: 'Strategic Location',
      description: 'Positioned in the heart of the Indian Ocean, serving diverse clientele.',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Years of experience in aviation services and deep understanding of regional needs.',
    },
    {
      icon: Sliders,
      title: 'Tailored Solutions',
      description: 'Customized services to meet the unique challenges of each client.',
    },
    {
      icon: Target,
      title: 'Commitment to Excellence',
      description: 'Unwavering dedication to operational efficiency, safety, and customer satisfaction.',
    },
  ];

  return (
    <section id="why-us" className="py-24" style={{ backgroundColor: '#07272D' }}>
      <div className="container mx-auto px-10">
        <motion.h2
          className="font-playfair-display-black text-4xl md:text-5xl mb-16 text-center text-[#D9D9D6]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose OverTheSeas?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#F5F5F5] p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-6">
                <item.icon className="w-12 h-12 text-[#CBA052] mr-4" />
                <h3 className="font-playfair-display-medium text-2xl text-[#07272D]">{item.title}</h3>
              </div>
              <p className="font-playfair-display-regular text-lg text-[#CBA052]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}