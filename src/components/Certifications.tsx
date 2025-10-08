import { motion } from "framer-motion";
import { Award, Brain, Code, Database } from "lucide-react";
import { Card } from "./ui/card";

const certifications = [
  {
    title: "ICDMAI 2025 Pre-Conference Workshop",
    subtitle: "Data Science & Analytics",
    icon: Database,
  },
  {
    title: "Be 10x AI Tools Workshop",
    subtitle: "Certified",
    icon: Brain,
  },
  {
    title: "Infosys Springboard",
    subtitle: "Design Thinking",
    icon: Award,
  },
  {
    title: "Infosys Springboard",
    subtitle: "Python Programming",
    icon: Code,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold neon-text mb-12 text-center font-orbitron">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="glass-strong p-6 h-full hover:neon-border transition-all duration-300 group">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 font-rajdhani text-lg">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-exo">
                          {cert.subtitle}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
