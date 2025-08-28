import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion } from "motion/react";
import Carousel from "../../Components/Carousel/Carousel";
import MoviesCarousel from "../../Components/MoviesCarousel/MoviesCarousel";

// Custom hook for mobile underline animation
const useAnimatedUnderline = () => {
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return; // Only run on mobile

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isMobile]);

  return { ref, isInView: isInView && isMobile };
};

// Video - now using public folder video

// Assets
import slideImg1 from "../../assets/slide-icon-1.svg";
import slideImg2 from "../../assets/slide-icon-2.svg";
import slideImg3 from "../../assets/slide-icon-3.svg";

import slideImg4 from "../../assets/slide-icon-4.svg";
import slideImg5 from "../../assets/slide-icon-5.svg";

// Splide imports
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Lazy loaded components
const LazyAboutREEV = lazy(() => import('./AboutREEV'));

export default function Index() {
  const heroRef = useRef(null);
  const reeRef = useRef(null);
  const saeRef = useRef(null);
  const taeRef = useRef(null);

  // Mobile underline hooks for section headings
  const aboutUnderline = useAnimatedUnderline();
  const whyJoinUnderline = useAnimatedUnderline();
  const fleetUnderline = useAnimatedUnderline();
  const sponsorsUnderline = useAnimatedUnderline();

  const [heroTextVisible, setHeroTextVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHeroTextVisible(true);
    }, 200); // Delay for smoother entry
  }, []);

  // Fade-in animation on load
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = "0";
      setTimeout(() => {
        heroRef.current.style.transition = "opacity 1s ease-in-out";
        heroRef.current.style.opacity = "1";
      }, 100);
    }
  }, []);

  // Scroll animation for REEV & SAEINDIA
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (reeRef.current) {
        reeRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      if (saeRef.current) {
        saeRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
      if (taeRef.current) {
        taeRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  // sponsors

  


  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden hero-section"
      >
        {/* Video Background */}
        <video
          src="/Sonny Hayes - Lose My Mind.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto'
          }}
        ></video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero Content */}
        <div
          className={`
            absolute text-center text-white transition-all duration-1000 ease-out z-10
      ${
        heroTextVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full"
      }
    `}
        >
          <h1
            ref={reeRef}
            className="text-[60px] md:text-[130px] font-black italic mb-4 hero-title font-mono tracking-widest transition-transform duration-300 ease-in-out text-red-600"
            style={{
              textShadow: "0 0 30px rgba(220, 38, 38, 0.8)"
            }}
          >
            REEV
          </h1>
          <h2
            ref={saeRef}
            className="text-[40px] md:text-[90px] mb-8 hero-subtitle font-mono transition-transform duration-300 ease-in-out"
            style={{
              textShadow: "0 0 20px rgba(255, 255, 255, 0.6)"
            }}
          >
            SAEINDIA
          </h2>
          
          {/* Professional Scroll Button */}
          <div className="mt-12">
          <button
            ref={taeRef}
              className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/25 font-mono"
            >
              <a href="#REEV" className="flex items-center space-x-2">
                <span>Explore More</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
          </button>
          </div>
        </div>
        
        {/* Floating Elements for Professional Touch */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-red-600/20 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
      </section>

      {/* About Section Anchor */}
      <div id="REEV" className="relative"></div>

      {/* About Section - Lazy Loaded */}
      <Suspense fallback={
        <div className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-800 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-800 rounded w-96 mx-auto"></div>
          </div>
          </div>
      </div>
      }>
        <LazyAboutREEV />
      </Suspense>

      {/* About Our Team Section */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              ref={whyJoinUnderline.ref}
              className="text-4xl md:text-5xl font-bold font-mono text-white tracking-wide mb-8 relative"
            >
              <span className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-red-600 after:to-transparent after:transform after:-translate-x-1/2 after:transition-all after:duration-700 ${whyJoinUnderline.isInView ? 'after:w-full' : 'after:w-0'}`}>
                Why Join Us ?
              </span>
            </h2>
          </motion.div>

          <motion.div 
            className="gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           
            {/* Join Us Benefits */}
            <motion.div 
              className="space-x-6 grid lg:grid-cols-3 grid-rows-1 h-[18.75rem]"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-red-600/20 col-span-1">
                <h4 className="text-2xl font-bold text-red-600 mb-12 mt-4 font-mono">Innovation</h4>
                <p className="text-gray-300">Work on cutting-edge electric vehicle technology and sustainable transportation solutions.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-red-600/20 col-span-1">
                <h4 className="text-2xl font-bold text-red-600 mb-12 mt-4 font-mono">Collaboration</h4>
                <p className="text-gray-300">Join a passionate team of engineers and developers working towards a greener future.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-red-600/20">
                <h4 className="text-2xl font-bold text-red-600 mb-12 mt-4 font-mono">Growth</h4>
                <p className="text-gray-300">Develop your skills in automotive technology, motorsports, and sustainable engineering.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Carousel Section - Autoplay */}
      <section className="py-20">
        <Carousel
          slides={[slideImg1, slideImg2, slideImg3]}
          autoplay={true}
          interval={3000}
        />
      </section>

      {/* Gokart */}
      {/* OUR FLEET Section - Motion & Tailwind */}
      <motion.div 
        className="bg-black py-20 group"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-screen">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 
              ref={fleetUnderline.ref}
              className="relative inline-block text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide"
            >
              <span className={`font-mono relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-red-600 after:to-transparent after:transform after:-translate-x-1/2 after:transition-all after:duration-700 hover:after:w-full ${fleetUnderline.isInView ? 'after:w-full' : 'after:w-0'}`}>
                Our Fleet
              </span>
            </h2>
          </motion.div>

          {/* Ferrari-style Grid - No Gap, Increased Height */}
          <div className="grid lg:grid-cols-2">
            {/* REEV Racer */}
            <motion.div 
              className="group/card cursor-pointer"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative overflow-hidden bg-black h-600">
                <motion.img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="REEV Racer"
                  className="w-full h-full object-cover brightness-90 transition-transform duration-700 ease-out group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <motion.h3
                    className="text-4xl font-light text-white mb-3 font-mono tracking-wide transition-colors duration-300 group-hover/card:text-red-600"
                  >
                    <span className="text-red-600 font-black italic">REEV</span> Racer
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-base mb-4 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                  >
                    High-Performance Electric Racing Vehicle
                  </motion.p>
                  <motion.div 
                    className="flex items-center text-white text-sm font-light transition-colors duration-300 group-hover/card:text-red-600"
                  >
                    <span>Discover</span>
                    <motion.svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.div>
              </div>
              </div>
            </motion.div>

            {/* REEV GoCar */}
            <motion.div 
              className="group/card cursor-pointer"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="relative overflow-hidden bg-black h-600">
                <motion.img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="REEV GoCar"
                  className="w-full h-full object-cover brightness-90 transition-transform duration-700 ease-out group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <motion.h3
                    className="text-4xl font-light text-white mb-3 font-mono tracking-wide transition-colors duration-300 group-hover/card:text-red-600"
                  >
                    <span className="text-red-600 font-black italic">REEV</span> GoCar
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-base mb-4 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                  >
                    Urban Electric Mobility Solution
                  </motion.p>
                  <motion.div 
                    className="flex items-center text-white text-sm font-light transition-colors duration-300 group-hover/card:text-red-600"
                  >
                    <span>Discover</span>
                    <motion.svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.div>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* End of Gokart / OUR FLEET Section */}

      {/* End of Gokart */}
      <div className="bg-black py-20 group">
        <motion.div 
          className="text-center mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            ref={sponsorsUnderline.ref}
            className="relative inline-block font-bold text-white"
          >
            <span className={`relative font-mono text-4xl md:text-5xl after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-red-600 after:to-transparent after:transform after:-translate-x-1/2 after:transition-all after:duration-700 hover:after:w-full ${sponsorsUnderline.isInView ? 'after:w-full' : 'after:w-0'}`}>
              Sponsors
            </span>
          </h2>
        </motion.div>

        {/* Work Section */}

        {/* Sponsors Marquee */}
        <div className="mt-20 mb-40 overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {/* First set of sponsors */}
            <div className="flex items-center gap-12 mr-12 min-w-max">
              <motion.div 
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://logos-world.net/wp-content/uploads/2020/04/Michelin-Logo.png" 
                  className="w-16 h-16 object-contain" 
                  alt="Michelin" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-red-600 font-mono">Michelin</h3>
                  <p className="text-sm text-gray-400">Tire Partner</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://logos-world.net/wp-content/uploads/2020/09/Shell-Logo.png" 
                  className="w-16 h-16 object-contain" 
                  alt="Shell" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-red-600 font-mono">Shell</h3>
                  <p className="text-sm text-gray-400">Fuel Partner</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://logos-world.net/wp-content/uploads/2020/08/Red-Bull-Logo.png" 
                  className="w-16 h-16 object-contain" 
                  alt="Red Bull" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-red-600 font-mono">Red Bull</h3>
                  <p className="text-sm text-gray-400">Energy Partner</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://logos-world.net/wp-content/uploads/2020/11/Bosch-Logo.png" 
                  className="w-16 h-16 object-contain" 
                  alt="Bosch" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-red-600 font-mono">Bosch</h3>
                  <p className="text-sm text-gray-400">Technology Partner</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://logos-world.net/wp-content/uploads/2020/09/Pirelli-Logo.png" 
                  className="w-16 h-16 object-contain" 
                  alt="Pirelli" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-red-600 font-mono">Pirelli</h3>
                  <p className="text-sm text-gray-400">Tire Partner</p>
                </div>
              </motion.div>
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-12 mr-12 min-w-max">
              <motion.div 
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://logos-world.net/wp-content/uploads/2020/04/Michelin-Logo.png" 
                  className="w-16 h-16 object-contain" 
                  alt="Michelin" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-red-600 font-mono">Michelin</h3>
                  <p className="text-sm text-gray-400">Tire Partner</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://logos-world.net/wp-content/uploads/2020/09/Shell-Logo.png" 
                  className="w-16 h-16 object-contain" 
                  alt="Shell" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-red-600 font-mono">Shell</h3>
                  <p className="text-sm text-gray-400">Fuel Partner</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://logos-world.net/wp-content/uploads/2020/08/Red-Bull-Logo.png" 
                  className="w-16 h-16 object-contain" 
                  alt="Red Bull" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-red-600 font-mono">Red Bull</h3>
                  <p className="text-sm text-gray-400">Energy Partner</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://logos-world.net/wp-content/uploads/2020/11/Bosch-Logo.png" 
                  className="w-16 h-16 object-contain" 
                  alt="Bosch" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-red-600 font-mono">Bosch</h3>
                  <p className="text-sm text-gray-400">Technology Partner</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://logos-world.net/wp-content/uploads/2020/09/Pirelli-Logo.png" 
                  className="w-16 h-16 object-contain" 
                  alt="Pirelli" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-red-600 font-mono">Pirelli</h3>
                  <p className="text-sm text-gray-400">Tire Partner</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
