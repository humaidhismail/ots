import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

export default function VisionMissionValues() {
  const sections = [
    {
      title: 'Our Mission',
      icon: Target,
      content: 'To provide world-class aviation services that prioritize safety, innovation, and customer satisfaction, while supporting the growth and connectivity of the aviation industry in the Maldives and beyond.'
    },
    {
      title: 'Our Vision',
      icon: Eye,
      content: 'To be the leading aviation services provider in the Maldives, renowned for our expertise, reliability, and commitment to excellence, and to play a pivotal role in advancing the region\'s aviation sector.'
    },
    {
      title: 'Core Values',
      icon: Heart,
      content: [
        'Safety First: Upholding the highest standards of safety in all aspects of our operations',
        'Excellence: Delivering superior services with a commitment to quality and continuous improvement',
        'Integrity: Conducting business with honesty, transparency, and respect for our clients and partners',
        'Innovation: Embracing new technologies and methodologies to provide cutting-edge solutions',
        'Customer Focus: Building strong relationships by understanding and exceeding client expectations'
      ]
    }
  ];

  return (
    <section id="vision-mission-values" className="py-24 bg-[#07272D]">
      <div className="container mx-auto px-10">
        <motion.h2
          className="font-playfair-display-black text-4xl md:text-5xl text-[#D9D9D6] mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Vision, Mission & Values
        </motion.h2>
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-[#0F3A42] p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <section.icon className="w-12 h-12 text-[#CBA052] mr-4" />
                <h3 className="font-playfair-display-black text-2xl text-[#D9D9D6]">{section.title}</h3>
              </div>
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="font-playfair-display-regular text-lg text-[#A7B5B9]">{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="font-playfair-display-regular text-lg text-[#A7B5B9]">{section.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}