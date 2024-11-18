import React from 'react';
import { motion } from 'framer-motion';


export default function Team() {
  // Define the team array
  const teamMembers = [
    {
      name: 'Ibrahim Faizal',
      position: 'Chief Executive Officer',
      bio: 'With a career spanning 48 years, Ibrahim Faizal is a leading figure in both Maldivian and international aviation. He began in 1976 and later served as Chairman of the Maldives Civil Aviation Authority. Currently, he is a Consultant to Thailand\'s Civil Aviation Authority and remains the most senior active Maldivian in the aviation industry.'
    },
    {
      name: 'Zayan Salih',
      position: 'Director',
      bio: 'Mr. Zayan Salih is the CEO of MDC Investments LLC, a subsidiary of Kamcorp Limited, and a Director of the Damas Group in the Maldives. His leadership spans real estate, medical services, and hospitality. Notably, he led the development of Varu by Atmosphere, a luxury resort ranked 11th on TripAdvisor\'s Travelers\' Choice list in 2023, and One Avenue, a major residential project in Hulhumale. Mr. Zayan holds an LLB (Honours) from King\'s College London, was admitted to the bar in 2014, and co-founded SSCo Law LLP, specializing in corporate law.'
    },
    {
      name: 'Ismail Hilmy',
      position: 'Director',
      bio: 'Mr. Ismail Hilmy has built a distinguished career in the Maldives, marked by his entrepreneurial vision and strategic leadership. His journey began in 1989 with Akiri Enterprises, followed by a diplomatic role as Honorary Consul General for Turkey since 1995. Over the years, he founded prominent ventures, including BestBuy Maldives, a leading resort supplier, and Atmosphere, a luxury resort brand. Expanding his portfolio in 2016, Mr. Hilmy co-founded Aviation Services (Private) Limited, partnering with Hemas Aviation to bring Etihad Airways and Indigo Airlines to the Maldives. His ventures reflect a commitment to excellence and innovation across industries.'
    },
  ];

  return (
    <section id="team" className="py-24 bg-[#D9D9D6]">
      <div className="container mx-auto px-10">
      <motion.h2
  className="font-playfair-display-black text-4xl md:text-5xl mb-16 text-center text-[#07272D]" // Already centers horizontally
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Meet Our Expert Team
</motion.h2>
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <h3 className="font-playfair-display-medium text-3xl text-[#07272D] mb-2">{member.name}</h3>
                <h4 className="font-playfair-display-regular text-xl text-[#CBA052] mb-4">{member.position}</h4>
                <p className="font-playfair-display-regular text-[#07272D] text-lg leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
