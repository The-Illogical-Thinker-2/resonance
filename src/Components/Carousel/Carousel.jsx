import React from "react";
import { motion } from "motion/react";

const certificates = [
  {
    name: "AWS certificate",
    image: "https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2024/F1_75_Live___Show/2200466852.webp",
  },
  {
    name: "Accenture certificate", 
    image: "https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/formula-1/2025/nsr/f1-75-live-m/web/mcl39-cover-image.jpg"
  },
  {
    name: "Tata certificate",
    image: "https://img.autocarindia.com/ExtraImages/20240213052530_Ferrari_SF_24_side.jpg",
  },
  {
    name: "Google Cloud certificate",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
  },
  {
    name: "Microsoft Azure certificate",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
  },
  {
    name: "Oracle certificate",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "IBM certificate",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "Cisco certificate",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  }
];

const Carousel = () => {
  return (
    <motion.div 
      className="bg-black py-20 group overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="text-center mb-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="relative inline-block text-3xl font-bold text-white">
          <span className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-4 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-red-600 after:to-transparent after:transform after:-translate-x-1/2 after:transition-all after:duration-500 group-hover:after:w-full">
            Why Join Us ?
          </span>
        </h2>
      </motion.div>
      
      {/* Infinite Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {/* First set of certificates */}
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 mx-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="relative group cursor-pointer bg-black/50 rounded-lg overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(248,3,3,0.528)] transition-all duration-700 w-96">
                <motion.img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-64 object-cover brightness-90"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Duplicate set for seamless loop - using same content but different keys */}
          {certificates.map((cert, index) => (
            <motion.div
              key={`loop-${index}`}
              className="flex-shrink-0 mx-8"
              initial={{ opacity: 1, scale: 1 }}
            >
              <div className="relative group cursor-pointer bg-black/50 rounded-lg overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(248,3,3,0.528)] transition-all duration-700 w-96">
                <motion.img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-64 object-cover brightness-90"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Carousel;
