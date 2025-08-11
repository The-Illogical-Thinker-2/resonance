import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Reev2() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const sections = [
    {
      title: "About REEV",
      text: <>Globally we are witnessing a technology shift in Automotive Propulsion towards electrification and Students in the Engineering community have to be the front runners in this change. SAEINDIA Bangalore has initiated REEV (Range Extended Electric Vehicle) in the 4 wheeler Urban Mobility space.<br/> REEV is a competition that has primary focus on range and fuel efficiency. The competition is going to drive the new age technologies in automotive industry, hybridization, light weighting, optimization, range extension, fuel awareness etc.</>,
      img: "https://img.autocarindia.com/ExtraImages/20240213052530_Ferrari_SF_24_side.jpg"
    },
    {
      title: "About SAEINDIA", 
      text: "SAEINDIA is a premier professional society for mobility engineers and an affiliate of SAE International. It supports student innovations like REEV by organizing technical events, competitions, and knowledge-sharing platforms aimed at transforming engineering education into practical excellence.",
      img: "https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/formula-1/2025/nsr/f1-75-live-m/web/mcl39-cover-image.jpg"
    },
    {
      title: "Vision",
      text: "Our vision is to drive the development of intelligent, sustainable, and efficient electric mobility systems through hands-on learning, interdisciplinary collaboration, and a deep passion for automotive technology.",
      img: "https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2024/F1_75_Live___Show/2200466852.webp"
    },
    {
      title: "Contact",
      text: <>For more details, reach us at: {" "}
        <span className="text-red-500 font-bold">reev.team@example.com</span>
      </>,
      img: "https://www.astonmartin.com/-/media/models---amr25/heros/amr25_hero_desktop.jpg?mw=1920&rev=1dc4bd480a3d49fd92e45f025b68f624&hash=8CB01DC7BFC9D33E5D695A3318AFBABC"
    }
  ];

  return (
        <div className="min-h-screen bg-black relative overflow-hidden">
      
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative z-10"
      >
        <div className="bg-black border-b border-red-500">
          <div className="container mx-auto px-6 py-16 lg:py-24">
            <div className="text-center relative">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-wider font-mono uppercase"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                REEV - ABOUT SAEINDIA
              </motion.h1>
                <motion.div
                 className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-1/50 bg-gradient-to-r from-transparent via-red-500 to-transparent"
                 variants={{
                   rest: { width: isMobile ? "60%" : 0 },
                   hover: { width: "60%" }
                 }}
                 transition={{ duration: 0.5, ease: "easeInOut" }}
               />
            </div>
          </div>
        </div>
      </motion.div>

        <div className="container mx-auto px-6 py-20 space-y-32 relative z-10">
         {sections.map((section, index) => (
           <Sections
             key={section.title}
             title={section.title}
             text={section.text}
             img={section.img}
             index={index}
           />
         ))}
       </div>
    </div>
  );
}

function Sections({ title, text, img, index }) {
  const isEven = index % 2 === 0;
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

       return (
        <motion.div
          ref={sectionRef}
          className="relative"
          initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: isMobile ? 1 : undefined, y: isMobile ? 0 : undefined }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        >
        <motion.div
          className="group"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
      <div
        className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
            <motion.div
              className="flex-1 relative"
              initial={{
                opacity: isMobile ? 1 : 0,
                x: isMobile ? 0 : (isEven ? -100 : 100),
                scale: isMobile ? 1 : 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              animate={{
                opacity: isMobile ? 1 : undefined,
                x: isMobile ? 0 : undefined,
                scale: isMobile ? 1 : undefined,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/30 z-10 group-hover:from-black/40 transition-all duration-500" />
              <motion.img
                src={img}
                alt={title}
               variants={{
                 rest: { 
                   filter: isMobile ? "brightness(100%)" : "brightness(50%)", 
                   scale: 1 
                 },
                 hover: { 
                   filter: isMobile ? "brightness(120%)" : "brightness(120%)", 
                   scale: 1.05 
                 }
                }}
               className="w-full h-80 lg:h-96 object-cover"
               transition={{ duration: 0.5, ease: "easeInOut" }}
               loading="lazy"
              />
          </div>
        </motion.div>

            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{
                opacity: isMobile ? 1 : 0,
                x: isMobile ? 0 : (isEven ? 100 : -100),
                y: isMobile ? 0 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: isMobile ? 1 : undefined,
                x: isMobile ? 0 : undefined,
                y: isMobile ? 0 : undefined,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.4,
              }}
              viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            >
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-wide font-mono uppercase relative inline-block">
             {title}
                           <motion.div
                className="absolute left-0 -bottom-2 h-1/50 bg-gradient-to-r from-transparent via-red-500 to-transparent w-full"
                variants={{
                  rest: { opacity: isMobile ? 1 : 0 },
                  hover: { opacity: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
               />
           </h2>
          <div className="text-lg lg:text-xl leading-relaxed text-white font-light max-w-2xl">
            {text}
          </div>
        </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
