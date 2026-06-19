import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
      alt: "Classroom Sessions",
      size: "md:col-span-2 md:row-span-2",
      title: "Classroom Sessions"
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      alt: "Practical Demonstrations",
      size: "md:col-span-1 md:row-span-1",
      title: "Practical Demonstrations"
    },
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      alt: "Student Activities",
      size: "md:col-span-1 md:row-span-2",
      title: "Student Activities"
    },
    {
      src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
      alt: "Training Facilities",
      size: "md:col-span-1 md:row-span-1",
      title: "Training Facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      alt: "Hair Styling Practical",
      size: "md:col-span-2 md:row-span-1",
      title: "Hair Styling"
    }
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Training Environment
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-gray-600 text-lg">
              Take a look at our modern facilities and practical learning sessions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto] gap-4 max-w-6xl mx-auto auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${image.size}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
