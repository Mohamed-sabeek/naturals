import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import imgHairStyling from '../assets/hair-academy/hair-styling.jpg';
import imgHairColor from '../assets/hair-academy/hair-color.jpg';
import imgHairStraightening from '../assets/hair-academy/Hair-Straightening.jpg';
import imgHairSmoothening from '../assets/hair-academy/Hair-Smoothening.jpg';
import imgHairSpa from '../assets/hair-academy/hair-spa.jpg';
import imgCysteine from '../assets/hair-academy/Cysteine-Treatment.jpg';

const HairAcademy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    { title: "Hair Styling", desc: "Learn modern and classic hair styling techniques for all occasions.", image: imgHairStyling },
    { title: "Hair Colour", desc: "Master highlights, balayage, root touch-ups, and creative coloring.", image: imgHairColor },
    { title: "Hair Straightening", desc: "Professional permanent and temporary hair straightening methods.", image: imgHairStraightening },
    { title: "Hair Smoothening", desc: "Advanced keratin and rebonding treatments for silky smooth hair.", image: imgHairSmoothening },
    { title: "Hair Spa", desc: "Deep conditioning, scalp treatments, and relaxation techniques.", image: imgHairSpa },
    { title: "Cysteine Treatment", desc: "Premium hair repair and frizz control complex application.", image: imgCysteine }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <img 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=80" 
          alt="Hair Academy" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            Hair Academy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto"
          >
            Master the art of hair design, from basic cuts to advanced chemical treatments.
          </motion.p>
        </div>
      </div>

      {/* Course Gallery */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Courses</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{course.desc}</p>
                <a href="https://wa.me/918903037766" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold hover:text-purple-700">
                  Enquire Now <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready To Start Your Career?</h2>
          <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">Join our Hair Academy today and become a certified professional hair stylist.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+918903037766" className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-xl">
              <Phone size={20} /> Call Now
            </a>
            <a href="https://wa.me/918903037766" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-xl">
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Re-export ArrowRight since it was missing
import { ArrowRight } from 'lucide-react';

export default HairAcademy;
