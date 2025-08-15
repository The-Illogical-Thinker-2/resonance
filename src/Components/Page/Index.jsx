import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion } from "motion/react";
import Carousel from "../../Components/Carousel/Carousel";
import MoviesCarousel from "../../Components/MoviesCarousel/MoviesCarousel";

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
          muted
          loop
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
            className="text-[60px] md:text-[130px] font-black italic mb-4 hero-title font-['Orbitron','Exo_2','Rajdhani',sans-serif] tracking-widest transition-transform duration-300 ease-in-out text-red-500"
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
              className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 font-mono"
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
        <div className="absolute top-20 left-20 w-32 h-32 border border-red-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse [animation-delay:1s]"></div>
      </section>

      <br></br>
      <br></br>
      {/* About Section with Splide AutoScroll */}
      <div
        id="REEV"
        className="relative text-center w-full py-[10px] pt-0"
      ></div>

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

      {/* why join us */}
      <div className="JoinUs bg-black py-20 group">
        <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="relative inline-block text-3xl font-bold text-white">
            <span className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-4 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-red-600 after:to-transparent after:transform after:-translate-x-1/2 after:transition-all after:duration-500 group-hover:after:w-full">
              Why Join Us ?
            </span>
          </h2>
        </motion.div>

        <p>
          <br></br>
          I'm Anmol Gour, currently pursuing my B.Tech in Computer Science
          Engineering. I have a strong interest in Full Stack Web Development,
          and I’m actively learning and working with technologies such as HTML,
          CSS, JavaScript, React, Vite, Tailwind CSS, Angular,Bootstrap,
          Node.js,Neo4j, and Google Cloud. In addition to my development work,
          I’m passionate about Problem Solving and enjoy tackling coding
          challenges to sharpen my logic and analytical skills.
        </p>
        </div>
      </div>


      {/* Carousel Section - Autoplay */}
      <section className="py-10">
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
            <h2 className="relative inline-block text-5xl md:text-6xl font-light text-white mb-4 tracking-wide">
              <span className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-4 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-red-600 after:to-transparent after:transform after:-translate-x-1/2 after:transition-all after:duration-500 group-hover:after:w-full">
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
              <div className="relative overflow-hidden bg-black h-[600px]">
                <motion.img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="REEV Racer"
                  className="w-full h-full object-cover brightness-90 transition-transform duration-700 ease-out group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3 
                    className="text-4xl font-light text-white mb-3 font-sans tracking-wide transition-colors duration-300 group-hover/card:text-red-500"
                  >
                    <span className="text-red-500 font-normal">REEV</span> Racer
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-base mb-4 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                  >
                    High-Performance Electric Racing Vehicle
                  </motion.p>
                  <motion.div 
                    className="flex items-center text-white text-sm font-light transition-colors duration-300 group-hover/card:text-red-500"
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
              <div className="relative overflow-hidden bg-black h-[600px]">
                <motion.img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="REEV GoCar"
                  className="w-full h-full object-cover brightness-90 transition-transform duration-700 ease-out group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3 
                    className="text-4xl font-light text-white mb-3 font-sans tracking-wide transition-colors duration-300 group-hover/card:text-red-500"
                  >
                    <span className="text-red-500 font-normal">REEV</span> GoCar
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-base mb-4 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                  >
                    Urban Electric Mobility Solution
                  </motion.p>
                  <motion.div 
                    className="flex items-center text-white text-sm font-light transition-colors duration-300 group-hover/card:text-red-500"
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
      <div className="JoineUs bg-black py-20 group">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="relative inline-block text-3xl font-bold text-white">
            <span className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-4 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-red-600 after:to-transparent after:transform after:-translate-x-1/2 after:transition-all after:duration-500 group-hover:after:w-full">
              Sponsors
            </span>
          </h2>
        </motion.div>

        {/* Work Section */}

        {/* Footer Section */}
        {/* Footer Section */}
        <div className="marquee-box">
          <marquee behavior="alternate" direction="">
            <div className="marquee-content flex flex-row gap-[200px]">
              <div className="flex items-center gap-3">
                <img src={slideImg1} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl ">
                    <span className="font-['Orbitron','Exo_2','Rajdhani',sans-serif] font-black text-red-500">
                      Connectivity{" "}
                    </span>
                  </h2>
                  <p className="text-md">Collaborate with others</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg2} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span className="font-['Orbitron','Exo_2','Rajdhani',sans-serif] font-black text-red-500">
                      Graphic Designing{" "}
                    </span>
                  </h2>
                  <p className="text-md">To create effectiveness</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg3} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span className="font-['Orbitron','Exo_2','Rajdhani',sans-serif] font-black text-red-500">
                      Readability
                    </span>
                  </h2>
                  <p className="text-md">Proper spacing & font</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg4} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span className="font-['Orbitron','Exo_2','Rajdhani',sans-serif] font-black text-red-500">
                      Professional Branding
                    </span>
                  </h2>
                  <p className="text-md">Consistent tone & voice</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg5} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span className="font-['Orbitron','Exo_2','Rajdhani',sans-serif] font-black text-red-500">
                      User-friendliness
                    </span>
                  </h2>
                  <p className="text-md">Quick to get into</p>
                </div>
              </div>
              {/* Repeat for seamless scrolling */}
              <div className="flex items-center gap-3">
                <img src={slideImg1} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span className="font-['Orbitron','Exo_2','Rajdhani',sans-serif] font-black text-red-500">
                      Connectivity
                    </span>
                  </h2>
                  <p className="text-md">Collaborate with others</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg2} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span className="font-['Orbitron','Exo_2','Rajdhani',sans-serif] font-black text-red-500">
                      Graphic Designing
                    </span>
                  </h2>
                  <p className="text-md">To create effectiveness</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg3} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span className="font-['Orbitron','Exo_2','Rajdhani',sans-serif] font-black text-red-500">
                      Readability
                    </span>
                  </h2>
                  <p className="text-md">Proper spacing & font</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg4} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span className="font-['Orbitron','Exo_2','Rajdhani',sans-serif] font-black text-red-500">
                      Professional Branding
                    </span>
                  </h2>
                  <p className="text-md">Consistent tone & voice</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg5} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span className="font-['Orbitron','Exo_2','Rajdhani',sans-serif] font-black text-red-500">
                      User-friendliness
                    </span>
                  </h2>
                  <p className="text-md">Quick to get into</p>
                </div>
              </div>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
}
