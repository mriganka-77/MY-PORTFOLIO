import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setLoading(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-text text-center mb-12 font-orbitron">
            Contact
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="glass-strong p-8 rounded-lg space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 font-rajdhani">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 glass rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-exo bg-background/50 border border-white/10"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 font-rajdhani">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 glass rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-exo bg-background/50 border border-white/10"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 font-rajdhani">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 glass rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none font-exo bg-background/50 border border-white/10"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full gradient-primary text-white hover:scale-105 transition-transform font-rajdhani"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>

            <div className="mt-12 flex justify-center gap-6">
              <a
                href="https://github.com/mriganka-77"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label="GitHub"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://linkedin.com/in/mriganka-chakraborty-a102412a2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-secondary transition-colors hover:scale-110 transform duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:mrigankachk5@gmail.com"
                className="text-foreground hover:text-accent transition-colors hover:scale-110 transform duration-200"
                aria-label="Email"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
