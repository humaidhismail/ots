import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import turbineImage from '../images/turbine.jpg'; // Ensure the correct path to the image

export default function VisionMissionValues() {
  const sections = [
    {
      title: 'Our Mission',
      icon: Target,
      content:
        'To provide world-class aviation services that prioritize safety, innovation, and customer satisfaction, while supporting the growth and connectivity of the aviation industry in the Maldives and beyond.',
    },
    {
      title: 'Our Vision',
      icon: Eye,
      content:
        "To be the leading aviation services provider in the Maldives, renowned for our expertise, reliability, and commitment to excellence, and to play a pivotal role in advancing the region's aviation sector.",
    },
    {
      title: 'Core Values',
      icon: Heart,
      content: [
        'Safety First: Upholding the highest standards of safety in all aspects of our operations',
        'Excellence: Delivering superior services with a commitment to quality and continuous improvement',
        'Integrity: Conducting business with honesty, transparency, and respect for our clients and partners',
        'Innovation: Embracing new technologies and methodologies to provide cutting-edge solutions',
        'Customer Focus: Building strong relationships by understanding and exceeding client expectations',
      ],
    },
  ];

  return (
    <section
      id="vision-mission-values"
      className="py-24 relative bg-[#07272D] text-[#D9D9D6] overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${turbineImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07272D]/80 to-[#07272D] opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-10 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="font-playfair-display-black text-5xl md:text-6xl text-center mb-16 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Vision, Mission & Values
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="relative bg-[#0F3A42] p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon and Subheading */}
              <div className="flex items-center mb-6">
                <section.icon
                  className="w-14 h-14 text-[#CBA052] transition-transform transform group-hover:rotate-12 group-hover:scale-110"
                />
                <h3 className="ml-4 font-playfair-display-medium text-2xl text-[#D9D9D6]">
                  {section.title}
                </h3>
              </div>

              {/* Content */}
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="font-playfair-display-regular text-lg text-[#A7B5B9]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-playfair-display-regular text-lg text-[#A7B5B9]">
                  {section.content}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
