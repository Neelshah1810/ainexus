import { FC } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const techStack = [
  {
    title: "OpenAI GPT Models",
    description: "Advanced language models powering our agent cognition",
    icon: "OpenAI",
  },
  {
    title: "LangChain",
    description: "Framework for creating contextual AI applications",
    icon: "LangChain",
  },
  {
    title: "Vector Databases",
    description: "Efficient knowledge retrieval for contextual understanding",
    icon: "Pinecone",
  },
  {
    title: "LLaMA Models",
    description: "Open-source foundation models for specialized tasks",
    icon: "LLaMA",
  },
  {
    title: "Custom API Framework",
    description: "Secure integration with business software systems",
    icon: "API",
  },
  {
    title: "Graph Databases",
    description: "Modeling complex relationships for better reasoning",
    icon: "Neo4j",
  },
  {
    title: "Custom UI Framework",
    description: "Intuitive interfaces for agent configuration and monitoring",
    icon: "UI",
  },
  {
    title: "Secure Cloud Infrastructure",
    description: "Enterprise-grade security and scalability",
    icon: "Cloud",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const TechnologySection: FC = () => {
  return (
    <section id="technology" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Technology{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Stack
            </span>
          </h2>
          <p className="text-gray-300">
            We combine cutting-edge AI models, frameworks, and tools to build
            robust, scalable, and intelligent agent systems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techStack.map((tech) => (
            <motion.div key={tech.title} variants={itemVariants}>
              <Card className="bg-dark-DEFAULT rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-800 h-full">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <div className="text-white text-2xl font-bold">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
