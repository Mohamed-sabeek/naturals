import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

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
    }
  ];

  return (
    <section id="reviews" className="py-20 lg:py-32 relative overflow-hidden bg-primary">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Students Say
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden px-4">
          <div className="flex gap-6 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote size={24} className="text-white/30" />
                </div>
                <p className="text-white/90 text-lg leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{review.name}</h4>
                    <p className="text-white/60 text-sm">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
