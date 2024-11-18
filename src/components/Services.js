import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Plane, FileText, Briefcase, BookOpen, Fuel, Search, ShoppingCart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Aircraft Maintenance & Engineering',
      description: [
        'Supply and installation of avionics and support'
      ]
    },
    {
      icon: Plane,
      title: 'Ground Handling Services',
      description: [
        'Assistance on Passenger handling and VIP services'
      ]
    },
    {
      icon: FileText,
      title: 'Flight Operations Support',
      description: [
        'Flight planning services',
        'Permits and overflight coordination'
      ]
    },
    {
      icon: Briefcase,
      title: 'Charter Services',
      description: [
        'Charter Solutions',
        'Customized travel packages for tourism and special events'
      ]
    },
    {
      icon: BookOpen,
      title: 'Aviation Consulting',
      description: [
        'Regulatory compliance and certification support',
        'Operational efficiency assessments'
      ]
    },
    {
      icon: Fuel,
      title: 'Aviation Fuel Services',
      description: [
        'Jet fuel supply and management'
      ]
    },
    {
      icon: Search,
      title: 'Aircraft Sourcing and Leasing',
      description: [
        'Comprehensive services for private and corporate aviation',
        'Sourcing of Aircraft for purchase, leasing (wet and dry)',
        'Sourcing of leasing finance for aircraft'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Support Services and Equipment',
      description: [
        'Sourcing of Spare parts, Aviation consumables and Ancillary'
      ]
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#D9D9D6]">
      <div className="container mx-auto px-10">
        <motion.h2
          className="font-playfair-display-black text-4xl md:text-5xl text-[#07272D] mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Comprehensive Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                backgroundColor: "#f7f7f7" 
              }}
            >
              <service.icon className="w-12 h-12 text-[#CBA052] mb-6" />
              <h3 className="font-playfair-display-medium text-2xl text-[#07272D] mb-4">{service.title}</h3>
              <ul className="list-disc pl-5">
                {service.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="font-playfair-display-regular text-[#CBA052] pl-2">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}