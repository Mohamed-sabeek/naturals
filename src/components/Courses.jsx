import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import imgMehndi from '../assets/mehndi.jpg';

const Courses = () => {
  const academies = [
    {
      id: "hair-academy",
      title: "Hair Academy",
      courseCount: "6 Professional Courses",
      description: "Learn hair styling, straightening, colour, spa and advanced hair treatments.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      color: "from-purple-900/90 to-purple-900/40",
      tagColor: "bg-purple-500"
    },
    {
      id: "skin-care-academy",
      title: "Skin Care Academy",
      courseCount: "2 Professional Courses",
      description: "Master facials, pigmentation care, and advanced skin treatments.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      color: "from-blue-900/90 to-blue-900/40",
      tagColor: "bg-blue-500"
    },
    {
      id: "makeup-academy",
      title: "Makeup Academy",
      courseCount: "2 Professional Courses",
      description: "From basic looks to professional bridal and event makeup artistry.",
      image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-pink-900/90 to-pink-900/40",
      tagColor: "bg-pink-500"
    },
    {
      id: "nail-art-academy",
      title: "Nail Art Academy",
      courseCount: "1 Professional Course",
      description: "Creative nail art training, extensions, and professional manicures.",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
      color: "from-rose-900/90 to-rose-900/40",
      tagColor: "bg-rose-500"
    },
    {
      id: "mehndi-academy",
      title: "Mehndi Academy",
      courseCount: "1 Professional Course",
      description: "Traditional and modern intricate mehndi design training.",
      image: imgMehndi,
      color: "from-orange-900/90 to-orange-900/40",
      tagColor: "bg-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="courses" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden border-t border-purple-100">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
              <BookOpen size={16} />
              <span>Premium Education</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Our Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Academies</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
              Explore our comprehensive training categories designed to make you an industry-ready professional.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {academies.map((academy, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`group relative rounded-[2rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(139,92,246,0.15)] transition-all duration-500 border border-gray-100 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              {/* Image Banner */}
              <div className={`relative w-full overflow-hidden ${index === 0 ? 'aspect-[2/1] md:aspect-[2.5/1]' : 'aspect-[4/3]'}`}>
                <img 
                  src={academy.image} 
                  alt={academy.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${academy.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-50" />
                
                {/* Top Tags */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-md bg-white/20 border border-white/20 flex items-center gap-1.5`}>
                     <Star size={12} className="fill-white" /> Featured
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block text-white/90 font-bold text-sm mb-2 tracking-wide uppercase">
                      {academy.courseCount}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                      {academy.title}
                    </h3>
                    <p className="text-white/80 font-medium line-clamp-2 md:line-clamp-3 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {academy.description}
                    </p>
                    
                    <Link 
                      to={`/courses/${academy.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-colors group/btn"
                    >
                      View Courses
                      <ArrowRight size={18} className="text-primary group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Courses;
