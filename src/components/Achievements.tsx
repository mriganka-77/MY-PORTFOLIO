import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Globe, GraduationCap, Rocket } from "lucide-react";

const achievements = [
  { icon: Code2, label: "Coding Problems Solved", value: 150, suffix: "+" },
  { icon: Globe, label: "Open Source Contributions", value: 10, suffix: "+" },
  { icon: GraduationCap, label: "CGPA in B.Tech CSE", value: 6.91, suffix: "" },
  { icon: Rocket, label: "Projects Built & Deployed", value: 7, suffix: "+" },
];

const CountUpAnimation = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black neon-text font-orbitron">
      {count.toFixed(end % 1 !== 0 ? 2 : 0)}{suffix}
    </span>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold neon-text mb-12 text-center font-orbitron">
            Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-strong p-8 rounded-lg text-center group hover:neon-border transition-all duration-300"
                >
                  <Icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors" />
                  <CountUpAnimation end={achievement.value} suffix={achievement.suffix} />
                  <p className="text-muted-foreground mt-3 font-rajdhani text-lg">
                    {achievement.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
