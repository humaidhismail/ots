import React from 'react';
import { easeOut, motion } from 'framer-motion';
import {
  Wrench,
  Plane,
  FileText,
  Briefcase,
  BookOpen,
  Fuel,
  Search,
  ShoppingCart,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Aircraft Maintenance & Engineering',
      description: ['Supply and installation of avionics and support'],
    },
    {
      icon: Plane,
      title: 'Ground Handling Services',
      description: ['Assistance on Passenger handling and VIP services'],
    },
    {
      icon: FileText,
      title: 'Flight Operations Support',
      description: [
        'Flight planning services',
        'Permits and overflight coordination',
      ],
    },
    {
      icon: Briefcase,
      title: 'Charter Services',
      description: [
        'Charter solutions',
        'Customized travel packages for tourism and special events',
      ],
    },
    {
      icon: BookOpen,
      title: 'Aviation Consulting',
      description: [
        'Regulatory compliance and certification support',
        'Operational efficiency assessments',
      ],
    },
    {
      icon: Fuel,
      title: 'Aviation Fuel Services',
      description: ['Jet fuel supply and management'],
    },
    {
      icon: Search,
      title: 'Aircraft Sourcing and Leasing',
      description: [
        'Comprehensive services for private and corporate aviation',
        'Sourcing of aircraft for purchase, leasing (wet and dry)',
        'Sourcing of leasing finance for aircraft',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'Support Services and Equipment',
      description: [
        'Sourcing of spare parts',
        'Aviation consumables and ancillary equipment',
      ],
    },
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto px-10">
        {/* Section Title */}
        <motion.h2
          className="font-playfair-display-black text-4xl md:text-5xl text-[#07272D] mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03 }}
          transforrm={{ease: easeOut}}
          viewport={{ once: true }}
        >
          Our Comprehensive Services
        </motion.h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-out"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                backgroundColor: '#f7f7f7',
              }}
            >
              {/* Service Icon */}
              <service.icon className="w-12 h-12 text-[#CBA052] mb-6" />
              {/* Service Title */}
              <h3 className="font-playfair-display-medium text-2xl text-[#07272D] mb-4">
                {service.title}
              </h3>
              {/* Service Description */}
              <div className="space-y-3">
                {service.description.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="font-playfair-display-regular text-[#07272D]"
                  >
                    {item}
                    {itemIndex < service.description.length - 1 && (
                      <hr className="my-2 border-t border-[#CBA052] opacity-50" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
