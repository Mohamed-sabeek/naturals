import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote, MessageCircle, MapPin, Trophy } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      text: "Excellent institute with expert instructors and AC classrooms. Learning becomes easy and enjoyable.",
      name: "Priya S.",
      role: "Makeup Artist Course"
    },
    {
      text: "Professional course with knowledgeable teachers who support students at every step.",
      name: "Anitha M.",
      role: "Hair Styling Course"
    },
    {
      text: "Wonderful training experience with supportive faculty and quality products.",
      name: "Deepa K.",
      role: "Advanced Beautician Course"
    },
    {
      text: "Modern equipment and practical learning environment helped me gain confidence.",
      name: "Karthika R.",
      role: "Skin Care Diploma"
    },
    {
      text: "The best academy in Pollachi for aspiring beauty professionals. Highly recommended!",
      name: "Meena T.",
      role: "Mehndi Design Training"
    }
  ];

  // Duplicate for seamless infinite loop
  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    const autoScroll = () => {
      if (!isHovered) {
        scrollContainer.scrollLeft += 1;
        // Reset scroll position for infinite loop effect
        // We use scrollWidth / 3 because we duplicated the array 3 times to ensure no blank spaces.
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <section id="reviews" className="py-24 lg:py-32 relative overflow-hidden bg-[#FAFAFC]">
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            What Students Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed"
          >
            Trusted by 415+ students for practical training, expert instructors, and career-focused education.
          </motion.p>
        </div>

        {/* Rating Summary Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl border border-purple-100 rounded-3xl p-6 md:px-12 md:py-8 shadow-[0_8px_30px_rgb(139,92,246,0.08)] mb-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
          
          <div className="flex flex-col items-center">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">5.0 Rating</span>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-purple-100" />
          
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-gray-900 mb-1">415+</span>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Reviews</span>
          </div>

          <div className="hidden md:block w-px h-16 bg-purple-100" />

          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-gray-900 mb-1">2016</span>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Established</span>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 mb-16 py-8">
          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#FAFAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#FAFAFC] to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className="flex gap-6 px-6 overflow-x-auto scrollbar-hide w-full cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {marqueeReviews.map((review, index) => (
              <div 
                key={index}
                className="w-[320px] md:w-[420px] shrink-0 bg-[rgba(255,255,255,0.95)] border border-[#E9D5FF] rounded-[24px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgb(139,92,246,0.12)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 relative flex flex-col"
              >
                <Quote size={40} className="absolute top-6 right-6 text-purple-100 opacity-50 transition-colors duration-300" />
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed mb-8 line-clamp-3">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-purple-50">
                  <div className="w-12 h-12 rounded-full bg-purple-50 text-primary flex items-center justify-center font-bold text-lg border border-purple-100 shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-base">{review.name}</h4>
                    <p className="text-gray-500 text-sm font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Highlights */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20 max-w-4xl mx-auto">
          {["Expert Instructors", "AC Classrooms", "Good Equipment", "EMI Available", "Certification Support", "Skilled Industry Experts"].map((tag, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-purple-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] px-5 py-2.5 rounded-full flex items-center gap-2.5 text-sm md:text-base font-bold text-gray-700 hover:border-primary/40 hover:shadow-md transition-all cursor-default hover:-translate-y-0.5"
            >
              <CheckCircle size={18} className="text-green-500" />
              {tag}
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-5 md:p-6 flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8 max-w-5xl w-full mx-auto"
        >
          <div className="flex items-center gap-2 font-bold text-gray-800">
            <span className="text-yellow-500 text-xl">⭐</span> 5.0 Rating
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2 font-bold text-gray-800">
            <MessageCircle size={20} className="text-blue-500" /> 415+ Reviews
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2 font-bold text-gray-800">
            <Trophy size={20} className="text-primary" /> Since 2016
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2 font-bold text-gray-800">
            <MapPin size={20} className="text-red-500" /> Pollachi
          </div>
        </motion.div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default Reviews;
