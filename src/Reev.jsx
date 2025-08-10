import { motion } from "motion/react";

export function Reev() {
  return (
    <div>
      <motion.div
      className="space-y-2"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className="text-5xl bg-black w-screen text-white p-20 grid">
        <div className="justify-self-center relative space-y-2"><span>REEV - ABOUT SAEINDIA</span>
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-red-500"
          variants={{
            rest: { width: 0 },
            hover: { width: "100%" }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        </div>
      </div>
    </motion.div>
      <div className="px-80 space-y-12 my-20">
        <Section
          title="About REEV"
          text="SAEINDIA is a premier professional society for mobility engineers and an affiliate of 
                SAE International. It supports student innovations like REEV by organizing technical
                events, competitions, and knowledge-sharing platforms aimed at transforming engineering 
                education into practical excellence."
        />
        <Section
          title="About SAEINDIA"
          text="SAEINDIA is a premier professional society for mobility engineers and an affiliate of SAE 
                International. It supports student innovations like REEV by organizing technical events, 
                competitions, and knowledge-sharing platforms aimed at transforming engineering education into
                practical excellence."
        />
        <Section
          title="Vision"
          text="Our vision is to drive the development of intelligent, sustainable, and efficient electric mobility
                systems through hands-on learning, interdisciplinary collaboration, and a deep passion for automotive technology."
        />
        <Section
          title="Contact"
          text="For more details, reach us at: reev.team@example.com"
        />
      </div>
    </div>
  );
}

function Section({ title, text }) {
  return (
    <motion.div
      className="space-y-2"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className="text-4xl relative font-display">
        <span>{title}</span>
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-black"
          variants={{
            rest: { width: 0 },
            hover: { width: "100%" }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
      <div>{text}</div>
    </motion.div>
  );
}
