import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

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

const AboutREEV = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  
  // Mobile underline hook
  const aboutUnderline = useAnimatedUnderline();

  // Effect for the text slide-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Effect for the image slide-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="home bg-black">
      <motion.section 
        className="flex flex-col lg:flex-row items-center gap-16 px-6 lg:px-20 py-20 max-w-7xl mx-auto group bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <motion.div
          ref={imageRef}
          className="flex-1 relative overflow-hidden rounded-3xl shadow-2xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/30 z-10 group-hover:from-black/40 transition-all duration-500"></div>
          <motion.img
            alt="About REEV"
            className="w-full h-80 lg:h-96 object-cover brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700"
            loading="lazy"
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          {/* Professional Badge */}
          <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
            Innovation
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          ref={aboutRef}
          className="flex-1 text-center lg:text-left space-y-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="space-y-6">
            <motion.div 
              className="group/heading"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 
                ref={aboutUnderline.ref}
                className="about-reev-heading text-4xl md:text-5xl lg:text-6xl font-black italic text-white tracking-wide font-mono uppercase relative inline-block"
              >
                <span className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-red-600 after:to-transparent after:transform after:-translate-x-1/2 after:transition-all after:duration-700 hover:after:w-full ${aboutUnderline.isInView ? 'after:w-full' : 'after:w-0'}`}>
                  About REEV
                </span>
              </h2>
            </motion.div>
            <p className="text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl">
              Globally we are witnessing a technology shift in the automotive
              industry from conventional fuel-powered vehicles to alternative
              fuel-powered vehicles. With the Indian government's initiative
              towards faster adoption of EVs through FAME-II policy, we are
              aligned to take this opportunity to develop indigenous solutions
              for the Indian market.
            </p>
          </div>
          
          {/* Professional Stats */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-red-500 mb-2">10+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wide">Team Members</div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="pt-4">
            <button className="group bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              <span className="flex items-center space-x-2">
                <span>Learn More</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutREEV;
