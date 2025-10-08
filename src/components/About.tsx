import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-text text-center mb-12 font-orbitron">
            About Me
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 font-exo"
            >
              I'm a Computer Science Engineering student passionate about AI, data-driven systems, 
              and futuristic software development. I love blending creativity with logic to build 
              impactful applications that solve real-world problems.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="glass-strong p-6 rounded-lg hover:neon-border transition-all duration-300"
              >
                <p className="text-primary font-bold text-xl font-rajdhani mb-2">University</p>
                <p className="text-muted-foreground font-exo">Adamas University</p>
                <p className="text-xs text-muted-foreground mt-1 font-exo">UG/02/BTCSE/2023/046</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="glass-strong p-6 rounded-lg hover:neon-border transition-all duration-300"
              >
                <p className="text-secondary font-bold text-xl font-rajdhani mb-2">Program</p>
                <p className="text-muted-foreground font-exo">B.Tech CSE</p>
                <p className="text-xs text-muted-foreground mt-1 font-exo">CGPA: 6.91</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="glass-strong p-6 rounded-lg hover:neon-border transition-all duration-300"
              >
                <p className="text-accent font-bold text-xl font-rajdhani mb-2">Location</p>
                <p className="text-muted-foreground font-exo">Kolkata, India</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
