import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/data/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = {
    languages: skills.filter((s) => s.category === "languages"),
    frameworks: skills.filter((s) => s.category === "frameworks"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-text text-center mb-12 font-orbitron">
            Skills
          </h2>

          <Tabs defaultValue="languages" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 glass">
              <TabsTrigger value="languages" className="data-[state=active]:bg-primary/20">
                Languages
              </TabsTrigger>
              <TabsTrigger value="frameworks" className="data-[state=active]:bg-primary/20">
                Frameworks
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-primary/20">
                Tools
              </TabsTrigger>
            </TabsList>

            {Object.entries(categories).map(([category, categorySkills]) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      className="glass p-6 rounded-xl hover:glass-strong transition-all group"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors font-rajdhani">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground font-exo">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                          className="h-full gradient-primary"
                        />
                      </div>

                      {/* Circular indicator */}
                      <div className="mt-4 flex justify-center">
                        <svg className="w-16 h-16 transform -rotate-90">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="hsl(var(--muted))"
                            strokeWidth="4"
                            fill="none"
                          />
                          <motion.circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="hsl(var(--primary))"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ strokeDasharray: "0 175.93" }}
                            animate={
                              isInView
                                ? {
                                    strokeDasharray: `${
                                      (skill.level / 100) * 175.93
                                    } 175.93`,
                                  }
                                : {}
                            }
                            transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                            style={{
                              filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.6))",
                            }}
                          />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
