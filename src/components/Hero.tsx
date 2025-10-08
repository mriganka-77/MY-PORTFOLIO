import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Download, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Engineering Intelligence. Building the Future.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-radial opacity-50" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider neon-text neon-glow mb-8 font-orbitron">
            MRIGANKA<br />CHAKRABORTY
          </h1>
          
          {/* Typing effect tagline */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-rajdhani font-medium text-secondary min-h-[50px]">
            {text}
            <span className="animate-pulse">|</span>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-exo"
          >
            B.Tech CSE • Adamas University • AI & Full-Stack Developer
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="gradient-primary text-white hover:scale-105 transition-transform shadow-lg shadow-primary/50 font-rajdhani"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 font-rajdhani"
              asChild
            >
              {/* The PDF lives at public/my cv.pdf — use URL-encoded path and provide a friendly download filename */}
              <a href="/my%20cv.pdf" download="Mriganka_Chakraborty_CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 font-rajdhani"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="flex gap-6 justify-center pt-8"
          >
            <a
              href="https://github.com/mriganka-77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://linkedin.com/in/mriganka-chakraborty-a102412a2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-secondary transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="https://twitter.com/mriganka_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors hover:scale-110 transform duration-200"
            >
              <Twitter className="h-7 w-7" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
