import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import backgroundImage from '../images/turbinemobile.png';

const VisionMissionValues = () => {
  const sections = [
    {
      title: 'Our Mission',
      icon: <Target className="w-16 h-16 text-[#CBA052]" />,
      content:
        'To provide world-class aviation services that prioritize safety, innovation, and customer satisfaction, while supporting the growth and connectivity of the aviation industry in the Maldives and beyond.',
    },
    {
      title: 'Our Vision',
      icon: <Eye className="w-16 h-16 text-[#CBA052]" />,
      content:
        "To be the leading aviation services provider in the Maldives, renowned for our expertise, reliability, and commitment to excellence, and to play a pivotal role in advancing the region's aviation sector.",
    },
    {
      title: 'Core Values',
      icon: <Heart className="w-16 h-16 text-[#CBA052]" />,
      content: [
        'Safety First: Upholding the highest standards of safety in all aspects of our operations.',
        'Excellence: Delivering superior services with a commitment to quality and continuous improvement.',
        'Integrity: Conducting business with honesty, transparency, and respect for our clients and partners.',
        'Innovation: Embracing new technologies and methodologies to provide cutting-edge solutions.',
        'Customer Focus: Building strong relationships by understanding and exceeding client expectations.',
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.1,
      boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.3, type: 'spring', stiffness: 150 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section
      id="parallax-section"
      className="relative py-12 md:py-24 text-white bg-vision bg-cover bg-center bg-scroll md:bg-fixed"
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundAttachment: 'fixed',
      // }}
    >
       {/* <div
        className="absolute h-full w-auto inset-0 bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
         // Parallax effect
          transition: 'transform 0.2s ease-out', // Smooth effect
        }}
      ></div> */}
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07272D] via-[#0F3A42] to-transparent opacity-80"></div>

      {/* Content inside the section */}
      <div className="relative z-10 container mx-auto text-center px-6 md:px-10">
        {/* Heading */}
        <motion.h2
          className="font-playfair-display-black text-4xl md:text-5xl mb-16 text-center text-[#fff]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Our Vision, Mission & Values
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-[#0F3A42] p-6 rounded-xl shadow-lg group relative overflow-hidden transition-all duration-200 ease-out"
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{section.icon}</div>

              {/* Title */}
              <h3 className="font-playfair-display-medium text-xl md:text-2xl text-white mb-4">
                {section.title}
              </h3>

              {/* Content */}
              {Array.isArray(section.content) ? (
                <ul className="font-playfair-display-regular text-base md:text-lg text-[#A7B5B9] space-y-2">
                  {section.content.map((item, idx) => (
                    <motion.li
                      key={idx}
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="font-playfair-display-regular text-base md:text-lg text-[#A7B5B9]">
                  {section.content}
                </p>
              )}

              {/* Decorative Overlay (Hover Effect) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#CBA052] to-[#f4e0b8] opacity-0 group-hover:opacity-10"
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
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
