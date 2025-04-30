import { FC } from "react";
import { motion } from "framer-motion";
import { Laptop, Database, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const solutionsData = [
  {
    title: "Custom AI Agents",
    description: "Purpose-built AI agents designed for your specific business processes. Our agents can understand complex instructions, access your systems, and execute tasks with precision.",
    icon: <Laptop className="h-6 w-6 text-primary" />,
    features: [
      "Domain-specific knowledge integration",
      "Multi-step reasoning capabilities",
      "Continuous learning and improvement"
    ],
    color: "primary"
  },
  {
    title: "AI Workflow Automation",
    description: "End-to-end automated workflows powered by AI that can handle complex business processes, allowing your team to focus on high-value tasks.",
    icon: <Database className="h-6 w-6 text-secondary" />,
    features: [
      "No-code workflow builder",
      "Decision-point optimization",
      "Real-time monitoring and insights"
    ],
    color: "secondary"
  },
  {
    title: "Data-Driven Decision Systems",
    description: "AI-powered systems that analyze your business data to provide actionable insights and recommendations for improved decision making.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    features: [
      "Predictive analytics modeling",
      "Anomaly detection",
      "Custom reporting dashboards"
    ],
    color: "primary"
  },
  {
    title: "AI Integration for Business Software",
    description: "Seamlessly integrate our AI agents with your existing CRMs, ERPs, and other business software to enhance their capabilities and create a unified workflow.",
    icon: <Zap className="h-6 w-6 text-secondary" />,
    features: [
      "Ready-made connectors for popular platforms",
      "Custom API development",
      "Secure data exchange protocols"
    ],
    color: "secondary"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const SolutionsSection: FC = () => {
  return (
    <section id="solutions" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI Solutions That{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Drive Results
            </span>
          </h2>
          <p className="text-gray-300">
            Our suite of AI solutions is designed to address specific business
            challenges while providing seamless integration with your existing
            workflows and systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map((solution, index) => (
            <motion.div
              key={solution.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Card className="bg-dark-DEFAULT border border-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <CardContent className="p-8">
                  <div className={`h-14 w-14 bg-${solution.color}/10 rounded-full flex items-center justify-center mb-6`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 text-${solution.color} mt-0.5 mr-2`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="link" 
                    className={`text-${solution.color} hover:text-${solution.color}-dark font-medium p-0 flex items-center`}
                    asChild
                  >
                    <a href="#contact">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
