import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MakeupAcademy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    { title: "Basic Makeup", desc: "Foundations of makeup application, color theory, and day-to-day looks.", image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Professional Makeup", desc: "Advanced bridal, editorial, and HD makeup techniques.", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <img 
          src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Makeup Academy" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/40 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            Makeup Academy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto"
          >
            Transform your passion for makeup into a professional artistry career.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Courses</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <a href="https://wa.me/918903037766" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-pink-600 font-bold hover:text-pink-800">
                  Enquire Now <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-pink-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready To Start Your Career?</h2>
          <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">Join our Makeup Academy today and become a certified professional.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+918903037766" className="px-8 py-4 bg-white text-pink-600 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-xl">
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

export default MakeupAcademy;
