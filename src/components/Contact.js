import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import image from '../images/Overtheseas-logo-dark.png';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export default function Contact() {
  const contactInfo = [
    { icon: MapPin, text: 'Marina Building, 8th Floor, Koli Umaru Maniku Goalhi, Malé, 20188, Republic of Maldives' },
    { icon: Mail, text: 'info@otsmv.com' },
  ];

  return (
    <section id="contact" className="py-12 bg-[#07272D] relative">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path d="M0 0h4v4H0V0zm8 0h4v4H8V0zm8 0h4v4h-4V0zM0 8h4v4H0V8zm8 0h4v4H8V8zm8 0h4v4h-4V8zM0 16h4v4H0v-4zm8 0h4v4H8v-4zm8 0h4v4h-4v-4z" fill="#CBA052" fillOpacity="0.1"/>
        </svg>
      </div>
      <div className="container mx-auto px-10 relative z-10">
        <motion.h2
          className="font-playfair-display-black text-3xl md:text-4xl mb-10 text-center text-[#D9D9D6]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair-display-medium text-2xl mb-4 text-[#CBA052]">Contact Information</h3>
            <div className="flex flex-col space-y-4">
              <img
                src={image}
                alt="OVERTHESEAS Logo"
                className="w-auto h-8 object-contain cursor-pointer"
                onClick={scrollToTop}
              />
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-5 h-5 text-[#D9D9D6] mr-3 mt-1 group-hover:text-[#CBA052] transition-colors" />
                  <p className="font-playfair-display-regular text-base text-[#D9D9D6] group-hover:text-[#CBA052] transition-colors">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair-display-medium text-2xl mb-4 text-[#CBA052]">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.209137981317!2d73.50717517473562!3d4.179249595794558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7faae74e8d45%3A0xf4b2a636a26558f3!2sMarina%20Building%2C%20Kolige%20Umaru%20Maniku%20Goalhi%2C%20Mal%C3%A9!5e0!3m2!1sen!2smv!4v1731892103327!5m2!1sen!2smv"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OVERTHESEAS Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Adjusted Copyright Section */}
      <div className="mt-8 bg-[#07272D] text-center text-[#D9D9D6]">
        <p className="text-sm">&copy; {new Date().getFullYear()} OverTheSeas. All rights reserved.</p>
      </div>
    </section>
  );
}
