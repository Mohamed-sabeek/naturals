import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Award, CheckCircle } from 'lucide-react';
import heroImage from '../assets/hero-preview.png';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden min-h-[85vh] flex items-center">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/90 via-white to-purple-50/60 -z-10" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] -z-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

      {/* Decorative Blurred Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full -z-10 blur-[100px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-300/10 rounded-full -z-10 blur-[120px] -translate-x-1/4 translate-y-1/4" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto lg:mx-0 flex flex-col justify-center w-full"
          >
            {/* Trust Badge / Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100/80 to-purple-50/80 text-primary font-bold text-sm mb-5 shadow-sm border border-purple-200 w-fit backdrop-blur-sm">
              <span className="text-base">✨</span>
              <span>10+ Years Of Excellence Since 2016</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] mb-5 text-gray-900 tracking-tight">
              Naturals Training Academy <br className="hidden md:block" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-indigo-600 pb-1 mt-1">
                Pollachi
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed font-medium">
              Empowering aspiring beauty professionals through practical training, expert instructors, modern facilities, and industry-focused learning since 2016.
            </p>

            {/* Trust Line (Elegant Pills) */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              <div className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-sm px-3.5 py-1.5 rounded-full text-sm font-bold text-gray-700">
                <span className="text-yellow-500">⭐</span> 5.0 Rating
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-sm px-3.5 py-1.5 rounded-full text-sm font-bold text-gray-700">
                <span className="text-blue-500">💬</span> 415+ Reviews
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-sm px-3.5 py-1.5 rounded-full text-sm font-bold text-gray-700">
                <span className="text-primary">🏆</span> Established 2016
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-sm px-3.5 py-1.5 rounded-full text-sm font-bold text-gray-700">
                <span className="text-red-500">📍</span> first floor, 04, palladam road, LIG Colony, Indra Nagar, Pollachi, Tamil Nadu 642002
              </div>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {["Practical Training", "Expert Trainers", "Certification Support", "EMI Available"].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-purple-50 border border-purple-100 px-3.5 py-1.5 rounded-full text-sm font-bold text-primary">
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <a href="#contact" className="px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-all shadow-[0_8px_30px_rgb(139,92,246,0.3)] hover:shadow-[0_8px_30px_rgb(139,92,246,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                Enquire Now
              </a>
              <a href="https://wa.me/918903037766" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white text-gray-800 border-2 border-gray-100 font-bold hover:border-green-500/30 hover:bg-green-50/50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2 group text-lg">
                <MessageCircle size={22} className="text-green-500 group-hover:scale-110 transition-transform" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
          
          {/* Right Image/Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto mt-12 lg:mt-0 px-4 md:px-0"
          >
            {/* Purple glow behind image */}
            <div className="absolute inset-0 bg-primary/30 rounded-[32px] blur-3xl transform scale-105 -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
            
            {/* Main Image Container */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgb(139,92,246,0.2)] aspect-[4/5] z-10 border-[6px] border-white/90 backdrop-blur-sm"
            >
              <img 
                src={heroImage} 
                alt="Students learning in training academy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </motion.div>
            
            {/* Floating Glass Cards */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute top-10 -left-2 md:-left-10 bg-white/85 backdrop-blur-xl p-3.5 md:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-20 flex items-center gap-3 border border-white hover:bg-white transition-colors"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-green-100/80 flex items-center justify-center text-green-600 shrink-0">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="font-extrabold text-sm md:text-base text-gray-900 leading-tight">Practical</p>
                <p className="text-xs text-gray-500 font-medium">Training</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -right-2 md:-right-8 bg-white/85 backdrop-blur-xl p-3.5 md:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-20 flex items-center gap-3 border border-white hover:bg-white transition-colors"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-purple-100/80 flex items-center justify-center text-primary shrink-0">
                <Star size={20} className="fill-primary" />
              </div>
              <div>
                <p className="font-extrabold text-sm md:text-base text-gray-900 leading-tight">Expert</p>
                <p className="text-xs text-gray-500 font-medium">Trainers</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 left-6 md:left-12 bg-white/85 backdrop-blur-xl px-5 py-3.5 md:px-6 md:py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-20 flex items-center gap-3 border border-white hover:bg-white transition-colors"
            >
              <Award className="text-yellow-500 shrink-0" size={24} />
              <span className="font-extrabold text-sm md:text-base text-gray-900">Certification Support</span>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
