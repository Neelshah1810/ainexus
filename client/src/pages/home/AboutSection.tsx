import { FC } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-DEFAULT">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pioneering the Future of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Business Automation
              </span>
            </h2>
            <p className="text-gray-300 mb-6">
              At AgentAI, we're not just building another AI tool – we're creating
              intelligent agents that understand your business context, learn from
              interactions, and take autonomous action to achieve your goals.
            </p>
            <p className="text-gray-300 mb-8">
              Our mission is to transform how businesses operate by deploying AI
              systems that can reason, plan, and execute complex workflows with
              minimal human oversight. We combine cutting-edge large language models
              with specialized knowledge and integration capabilities to deliver AI
              that works for you, not the other way around.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">95%</h3>
                <p className="text-gray-300">Reduction in manual workflow tasks</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-2">3.5x</h3>
                <p className="text-gray-300">Increase in operational efficiency</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="rounded-2xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Futuristic AI technology visualization"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark-DEFAULT/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-lg font-semibold text-white">
                  Trusted by innovative companies across industries
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
