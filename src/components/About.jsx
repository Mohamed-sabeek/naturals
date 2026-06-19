import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Wrench, Wind, CreditCard, Award } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Clock size={24} />, title: "10+ Years Experience" },
    { icon: <Users size={24} />, title: "Expert Trainers" },
    { icon: <Wrench size={24} />, title: "Modern Equipment" },
    { icon: <Wind size={24} />, title: "AC Classrooms" },
    { icon: <CreditCard size={24} />, title: "EMI Available" },
    { icon: <Award size={24} />, title: "Certification Support" }
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Naturals Training Academy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Naturals Training Academy Pollachi has been helping aspiring beauty professionals develop industry-ready skills since <span className="font-semibold text-primary">2016</span>. With experienced trainers, practical learning sessions, and modern facilities, students gain the confidence and knowledge required to succeed in the beauty and wellness industry.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-background rounded-2xl p-6 text-center border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-gray-900">{feature.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
