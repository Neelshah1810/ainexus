import { FC } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Network, MessageCircle, Workflow, Box, Zap, Settings, Brain } from "lucide-react";

const techStack = [
  {
    title: "AI Agent",
    description: "Intelligent autonomous agents for complex task execution",
    icon: <Bot className="w-10 h-10 text-primary" />,
  },
  {
    title: "AI Integration",
    description: "Seamless connection between AI systems and business software",
    icon: <Network className="w-10 h-10 text-primary" />,
  },
  {
    title: "AI Chatbot",
    description: "Conversational interfaces for natural user interactions",
    icon: <MessageCircle className="w-10 h-10 text-primary" />,
  },
  {
    title: "AI Automation",
    description: "Automated workflows powered by artificial intelligence",
    icon: <Workflow className="w-10 h-10 text-primary" />,
  },
  {
    title: "n8n",
    description: "Open-source workflow automation platform for technical users",
    icon: <Box className="w-10 h-10 text-primary" />,
  },
  {
    title: "Zapier",
    description: "No-code integration platform connecting apps and automations",
    icon: <Zap className="w-10 h-10 text-primary" />,
  },
  {
    title: "Make",
    description: "Advanced automation platform for complex business workflows",
    icon: <Settings className="w-10 h-10 text-primary" />,
  },
  {
    title: "LLM",
    description: "Large Language Models for natural language understanding",
    icon: <Brain className="w-10 h-10 text-primary" />,
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
                <div className="w-16 h-16 flex items-center justify-center mb-4 bg-dark-lighter rounded-full p-3">
                  {tech.icon}
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
