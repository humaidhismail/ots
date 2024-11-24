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
    <section
      id="why-us"
      className="py-24 relative bg-[#07272D] text-[#D9D9D6]  bg-whyus bg-contain bg-scroll md:bg-fixed"
    >
      {/* Background with Parallax Effect */}
      <div
        // className="absolute inset-0 z-0"
        // style={{
        //   backgroundImage: `url(${planeImage})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   backgroundAttachment: 'fixed', // Parallax effect on desktop
        // }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#07272D] via-[#0F3A42] to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="font-playfair-display-black text-4xl md:text-5xl mb-16 text-center transition-all duration-200 ease-out"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
        >
          Why Choose OverTheSeas?
        </motion.h2>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-[#0F3A42] p-8 rounded-lg shadow-lg transform group"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="flex items-center mb-6">
                <item.icon
                  className="w-12 h-12 text-[#CBA052] transition-transform transform group-hover:scale-110 group-hover:rotate-6"
                />
                <h3 className="ml-4 font-playfair-display-medium text-2xl">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-playfair-display-regular text-lg text-[#A7B5B9]">
                {item.description}
              </p>

              {/* Decorative Overlay (Hover Effect) */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#CBA052] to-[#f4e0b8] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          #why-us div[style] {
            background-attachment: scroll; /* Disable parallax for mobile */
            background-size: contain; /* Ensure image doesn't stretch */
            background-position: top; /* Align the image better */
          }
        }
      `}</style>
    </section>
  );
}
