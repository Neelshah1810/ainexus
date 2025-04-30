import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection: FC = () => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden relative"
      style={{
        background:
          "linear-gradient(45deg, rgba(37,99,235,0.1), rgba(127,88,228,0.1))",
      }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-0 right-0 -mt-20 opacity-30 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 opacity-30 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Businesses with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Agentic AI
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Our intelligent AI agents work autonomously to solve complex business
            challenges, streamline workflows, and deliver unprecedented
            efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
              onClick={() => scrollToElement("solutions")}
            >
              Explore Solutions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
              onClick={() => scrollToElement("contact")}
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Abstract AI visualization"
            className="w-full h-80 object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
