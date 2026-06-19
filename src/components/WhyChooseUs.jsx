import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Building2, Calendar, Briefcase, Wallet, Star, MessageCircle, Trophy, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <GraduationCap size={32} />,
      badge: "Most Popular",
      title: "Expert Instructors",
      description: "Learn directly from experienced beauty professionals.",
      color: "from-purple-100 to-purple-50",
      iconColor: "text-purple-600",
      iconBg: "bg-gradient-to-br from-purple-200 to-purple-100",
      shadow: "hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)]"
    },
    {
      icon: <Sparkles size={32} />,
      badge: "Practical Learning",
      title: "Hands-On Training",
      description: "Practice using professional tools and techniques.",
      color: "from-blue-100 to-blue-50",
      iconColor: "text-blue-600",
      iconBg: "bg-gradient-to-br from-blue-200 to-blue-100",
      shadow: "hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)]"
    },
    {
      icon: <Building2 size={32} />,
      badge: "AC Classrooms",
      title: "Modern Infrastructure",
      description: "Comfortable classrooms with professional facilities.",
      color: "from-green-100 to-green-50",
      iconColor: "text-green-600",
      iconBg: "bg-gradient-to-br from-green-200 to-green-100",
      shadow: "hover:shadow-[0_8px_30px_rgba(22,163,74,0.15)]"
    },
    {
      icon: <Calendar size={32} />,
      badge: "Short Courses",
      title: "Flexible Learning",
      description: "Crash courses and flexible learning options.",
      color: "from-orange-100 to-orange-50",
      iconColor: "text-orange-600",
      iconBg: "bg-gradient-to-br from-orange-200 to-orange-100",
      shadow: "hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)]"
    },
    {
      icon: <Briefcase size={32} />,
      badge: "Student Support",
      title: "Career Guidance",
      description: "Guidance beyond the classroom for career growth.",
      color: "from-pink-100 to-pink-50",
      iconColor: "text-pink-600",
      iconBg: "bg-gradient-to-br from-pink-200 to-pink-100",
      shadow: "hover:shadow-[0_8px_30px_rgba(219,39,119,0.15)]"
    },
    {
      icon: <Wallet size={32} />,
      badge: "EMI Available",
      title: "Affordable Learning",
      description: "Flexible payment options for students.",
      color: "from-teal-100 to-teal-50",
      iconColor: "text-teal-600",
      iconBg: "bg-gradient-to-br from-teal-200 to-teal-100",
      shadow: "hover:shadow-[0_8px_30px_rgba(13,148,136,0.15)]"
    }
  ];

  const highlights = [
    "Expert Instructors", "AC Classrooms", "Good Equipment", "EMI Available", "Certification Support", "Skilled Industry Experts"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#FAFAFC]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.4] -z-10" style={{ backgroundImage: 'linear-gradient(#E9D5FF 1px, transparent 1px), linear-gradient(90deg, #E9D5FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Why 415+ Students Trust <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Naturals Training Academy</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Students choose us for practical training, experienced instructors, modern facilities, and career-focused education.
            </p>
          </motion.div>
        </div>

        {/* Top Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-purple-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden hover:shadow-[0_8px_30px_rgb(139,92,246,0.08)] transition-all duration-500">
             
             <div className="flex flex-col items-center justify-center text-center group relative z-10">
                <div className="flex items-center gap-2 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Star size={24} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-3xl font-extrabold text-gray-900">5.0</span>
                </div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Rating</div>
             </div>
             
             <div className="flex flex-col items-center justify-center text-center group relative z-10 border-l border-gray-100 md:border-l-0">
                <div className="flex items-center gap-2 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={24} className="text-blue-500" />
                  <span className="text-3xl font-extrabold text-gray-900">415+</span>
                </div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Reviews</div>
             </div>
             
             <div className="flex flex-col items-center justify-center text-center group relative z-10 border-t md:border-t-0 md:border-l border-gray-100 pt-5 md:pt-0 mt-2 md:mt-0">
                <div className="flex items-center gap-2 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Trophy size={24} className="text-purple-500" />
                  <span className="text-3xl font-extrabold text-gray-900">2016</span>
                </div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Since</div>
             </div>
             
             <div className="flex flex-col items-center justify-center text-center group relative z-10 border-t border-l md:border-t-0 border-gray-100 pt-5 md:pt-0 mt-2 md:mt-0">
                <div className="flex items-center gap-2 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={24} className="text-emerald-500" />
                  <span className="text-3xl font-extrabold text-gray-900">100%</span>
                </div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Certification</div>
             </div>
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-[24px] border border-purple-100 overflow-hidden shadow-sm hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full ${feature.shadow}`}
            >
              <div className="p-8 relative overflow-hidden flex flex-col h-full">
                {/* Soft Pastel Background Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-40 rounded-full blur-[30px] group-hover:scale-150 group-hover:opacity-60 transition-all duration-700`} />
                
                {/* Badge */}
                <div className="mb-6 inline-flex relative z-10">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r ${feature.color} text-gray-800 shadow-sm border border-white/50`}>
                    {feature.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.iconBg} group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-sm relative z-10`}>
                  <div className={feature.iconColor}>
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium relative z-10 flex-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Student Review Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {highlights.map((highlight, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center gap-2.5 bg-white border border-purple-200 px-5 py-3 rounded-full shadow-sm hover:shadow-md hover:border-purple-400 hover:shadow-purple-100 transition-all duration-300 cursor-default"
              >
                <CheckCircle size={18} className="text-purple-600 shrink-0" />
                <span className="text-gray-800 font-bold text-sm md:text-base">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-purple-200 p-6 md:p-8 rounded-[24px] shadow-[0_10px_40px_rgba(139,92,246,0.08)] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden group hover:border-purple-300 transition-colors duration-500">
            
            <div className="text-center md:text-left relative z-10">
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">Trusted by students across Pollachi</h3>
              <p className="text-purple-600 font-semibold">Join our growing community of professionals.</p>
            </div>
            
            <div className="flex items-center gap-6 md:gap-8 relative z-10">
              <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-1.5 mb-1">
                  <Star size={18} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-gray-900 text-lg">5.0</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-bold">Rating</span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-1.5 mb-1">
                  <MessageCircle size={18} className="text-blue-500" />
                  <span className="font-bold text-gray-900 text-lg">415+</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-bold">Reviews</span>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col items-center hidden sm:flex group-hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-1.5 mb-1">
                  <Trophy size={18} className="text-purple-500" />
                  <span className="font-bold text-gray-900 text-lg">2016</span>
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Established</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
