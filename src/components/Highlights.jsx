import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Counter = ({ end, duration = 2, suffix = "", prefix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth deceleration
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(end * easeOutQuart);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const Highlights = () => {
  const highlights = [
    { value: 5.0, decimals: 1, suffix: "", label: "Rating" },
    { value: 415, decimals: 0, suffix: "+", label: "Reviews" },
    { value: 10, decimals: 0, suffix: "+", label: "Years Experience" },
    { value: 100, decimals: 0, suffix: "%", label: "Practical Training" }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                <Counter end={item.value} decimals={item.decimals} suffix={item.suffix} />
              </div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
