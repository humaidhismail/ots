import React, { useState } from 'react';
import { easeOut, motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const VisionMissionValues = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const sections = [
    {
      title: 'Our Mission',
      icon: <Target className="w-8 h-8 sm:w-12 sm:h-12 text-white" />,
      content:
        'To provide world-class aviation services that prioritize safety, innovation, and customer satisfaction, while supporting the growth and connectivity of the aviation industry in the Maldives and beyond.',
    },
    {
      title: 'Our Vision',
      icon: <Eye className="w-8 h-8 sm:w-12 sm:h-12 text-white" />,
      content:
        "To be the leading aviation services provider in the Maldives, renowned for our expertise, reliability, and commitment to excellence, and to play a pivotal role in advancing the region's aviation sector.",
    },
    {
      title: 'Core Values',
      icon: <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-white" />,
      content: [
        <p><strong className="font-bold text-white" >Safety First:</strong> Upholding the highest standards of safety in all aspects of our operations.</p>,
        <p><strong className="font-bold text-white">Excellence:</strong> Delivering superior services with a commitment to quality and continuous improvement.</p>,
        <p><strong className="font-bold text-white">Integrity:</strong> Conducting business with honesty, transparency, and respect for our clients and partners.</p>,
        <p><strong className="font-bold text-white">Innovation:</strong> Embracing new technologies and methodologies to provide cutting-edge solutions.</p>,
        <p><strong className="font-bold text-white">Customer Focus:</strong> Building strong relationships by understanding and exceeding client expectations.</p>,
      ],
    },
  ];

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="parallax-section"
      className="relative py-8 sm:py-12 md:py-24 text-white bg-vision bg-cover bg-center bg-scroll md:bg-fixed"
    >
     <div className="absolute inset-0 bg-gradient-to-t from-[#07272D] via-[#0F3A42] to-transparent opacity-50"></div>
      <div className="relative z-10 container mx-auto text-center px-4 sm:px-6 md:px-10">
        <motion.h2
          className="font-playfair-display-black text-4xl sm:text-5xl md:text-6xl mb-8 sm:mb-16 text-center text-[#fff] transition-all duration-200 ease-out"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Vision, Mission & Values
        </motion.h2>

        <div className="bg-[#C89440] p-6 sm:p-10 rounded-2xl">
          {sections.map(({ title, icon, content }, index) => (
            <div
              key={index}
              className="border-b border-[#C89440] last:border-none"
            >
              <motion.div
                className="flex items-center justify-between p-3 sm:p-4 cursor-pointer hover:bg-[#a97b32] rounded-lg transition"
                onClick={() => togglePanel(index)}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  {icon}
                  <h3 className="font-playfair-display-black font-bold text-2xl sm:text-2xl text-white">
                    {title}
                  </h3>
                </div>
                <motion.span
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3, ease: easeOut }}
                >
                  ▼
                </motion.span>
              </motion.div>

              <motion.div
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <div className="p-3 sm:p-4 text-white text-lg font-playfair-display-black">
                  {Array.isArray(content) ? (
                    <div className="space-y-2">
                      {content.map((item, i) => (
                        <div key={i}>{item}</div>
                      ))}
                    </div>
                  ) : (
                    <p>{content}</p>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #parallax-section {
            background-attachment: scroll;
            background-size: cover;
            background-position: center top;
            aspect-ratio: 16/9;
          }
        }
      `}</style>
    </section>
  );
};

export default VisionMissionValues;
