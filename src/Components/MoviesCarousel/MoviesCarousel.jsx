import  { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

const movies = [
  {
    name: "Land Rover Defender",
    des: "Rugged luxury SUV with strong off-road prowess.",
    img: "https://c4.wallpaperflare.com/wallpaper/805/752/971/land-rover-defender-urban-xrs-luxury-cars-black-cars-land-rover-vehicle-hd-wallpaper-preview.jpg",
    link: "https://c4.wallpaperflare.com/wallpaper/805/752/971/land-rover-defender-urban-xrs-luxury-cars-black-cars-land-rover-vehicle-hd-wallpaper-preview.jpg",
  },
  {
    name: "BMW M5",
    des: "Performance sedan with powerful engine and sporty refinement.",
    img: "https://www.wallpaperflare.com/static/554/11/812/car-bmw-bmw-m5-vehicle-wallpaper.jpg",
    link: "https://www.wallpaperflare.com/static/554/11/812/car-bmw-bmw-m5-vehicle-wallpaper.jpg",
  },
  {
    name: "Maybach GLS",
    des: "Ultra-luxury SUV with opulent cabin and grand ambiance.",
    img: "https://c4.wallpaperflare.com/wallpaper/646/182/375/blue-background-mercedes-benz-mercedes-wallpaper-preview.jpg",
    link: "https://c4.wallpaperflare.com/wallpaper/646/182/375/blue-background-mercedes-benz-mercedes-wallpaper-preview.jpg",
  },
  {
    name: "Audi Q8",
    des: "Stylish coupe-like SUV offering strong presence and premium luxury.",
    img: "https://i.pinimg.com/736x/31/99/e9/3199e9a9e8ea74702bd3fdbe8d297363.jpg",
    link: "https://i.pinimg.com/736x/31/99/e9/3199e9a9e8ea74702bd3fdbe8d297363.jpg",
  },
];

const MoviesCarousel = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (index) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollTo({
        left: index * scrollAmount,
        behavior: "smooth",
      });
    }
    setCurrentIndex(index);
  };

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % movies.length;
        scroll(newIndex);
        return newIndex;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="w-full h-[500px] relative my-2.5 mx-0 overflow-x-hidden overflow-y-visible scroll-smooth pl-2.5 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-full py-[70px] px-[70px] h-full flex items-center overflow-x-auto overflow-y-visible scroll-smooth gap-[50px] scrollbar-hide" ref={containerRef}>
        {movies.map((m, idx) => (
          <motion.div 
            className="relative min-w-[43%] h-full w-[92%] rounded-xl overflow-hidden bg-black mr-5 transition-all duration-500 group cursor-pointer"
            key={idx}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 20px rgba(236, 3, 3, 0.6)"
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
              <motion.img 
                src={m.img} 
                alt={m.name} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>
            <motion.div 
              className="relative z-20 flex flex-col items-center justify-center text-center h-full w-full px-2.5 bg-black/30 backdrop-blur-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h2 
                className="relative inline-block no-underline text-red-500 text-2xl my-2 font-normal capitalize after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-1/2 after:-bottom-1 after:bg-gradient-to-r after:from-transparent after:via-red-500 after:to-transparent after:shadow-[0_0_3px_#FF0000] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 group-hover:after:w-full"
              >
                {m.name}
              </motion.h2>
              <motion.h6 
                className="text-white opacity-80 font-medium text-sm mb-[50%]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {m.des}
              </motion.h6>
              {m.link ? (
                <motion.a
                  href={m.link}
                  className="relative w-auto capitalize border-none font-medium text-right cursor-pointer rounded-md -mt-[20%] py-2 px-4 bg-red-900 text-white hover:bg-red-800 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View
                </motion.a>
              ) : (
                <motion.button 
                  className="relative w-auto capitalize border-none font-medium text-right cursor-pointer rounded-md -mt-[20%] py-2 px-4 bg-red-900 text-white hover:bg-red-800 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Coming Soon
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Circle Indicators */}
      <motion.div 
        className="flex justify-center gap-2 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {movies.map((_, idx) => (
          <motion.div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              idx === currentIndex 
                ? "bg-red-500 scale-125" 
                : "bg-gray-400 hover:bg-gray-300"
            }`}
            onClick={() => scroll(idx)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MoviesCarousel;
