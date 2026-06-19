import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Start Your Beauty Career Today
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join Naturals Training Academy and gain industry-ready skills through professional training.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="tel:+918903037766" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-primary font-bold hover:bg-gray-50 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a 
                href="https://wa.me/918903037766" 
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-all shadow-xl flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
