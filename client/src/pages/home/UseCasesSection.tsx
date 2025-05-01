import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Industry = "all" | "finance" | "healthcare" | "ecommerce";

const useCasesData = [
  {
    industry: "finance",
    title: "Investment Analysis Automation",
    description:
      "An investment firm leveraged AI agents to analyze market trends, earnings reports, and news sentiment, reducing research time by 70% while improving investment decision accuracy.",
    results: "70% time savings, 22% improved returns",
    imageSrc:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageAlt: "Finance professionals using AI technology",
  },
  {
    industry: "healthcare",
    title: "Patient Care Coordination",
    description:
      "A hospital network deployed AI agents to coordinate patient care across departments, ensuring seamless information flow and reducing administrative overhead.",
    results: "32% faster patient processing, 45% staff satisfaction increase",
    imageSrc:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageAlt: "Healthcare professionals using AI technology",
  },
  {
    industry: "ecommerce",
    title: "Inventory & Supply Chain Optimization",
    description:
      "An online retailer implemented AI agents to predict inventory needs, optimize supply chain operations, and reduce stockouts while minimizing excess inventory.",
    results: "28% reduction in stockouts, 18% inventory cost savings",
    imageSrc:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageAlt: "E-commerce professionals using AI technology",
  },
];

const UseCasesSection: FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("all");

  const filteredCases =
    selectedIndustry === "all"
      ? useCasesData
      : useCasesData.filter((useCase) => useCase.industry === selectedIndustry);

  return (
    <section id="use-cases" className="py-20 bg-dark-DEFAULT">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real-World{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Use Cases
            </span>
          </h2>
          <p className="text-gray-300 mb-8">
            See how businesses across industries are leveraging AI agents to
            transform their operations and drive growth.
          </p>

          {/* Industry Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={selectedIndustry === "all" ? "default" : "outline"}
              className={`px-4 py-2 rounded-full ${
                selectedIndustry === "all"
                  ? "bg-primary text-white"
                  : "bg-dark-lighter text-gray-300 hover:bg-dark-lighter/80"
              }`}
              onClick={() => setSelectedIndustry("all")}
            >
              All Industries
            </Button>
            <Button
              variant={selectedIndustry === "finance" ? "default" : "outline"}
              className={`px-4 py-2 rounded-full ${
                selectedIndustry === "finance"
                  ? "bg-primary text-white"
                  : "bg-dark-lighter text-gray-300 hover:bg-dark-lighter/80"
              }`}
              onClick={() => setSelectedIndustry("finance")}
            >
              Finance
            </Button>
            <Button
              variant={selectedIndustry === "healthcare" ? "default" : "outline"}
              className={`px-4 py-2 rounded-full ${
                selectedIndustry === "healthcare"
                  ? "bg-primary text-white"
                  : "bg-dark-lighter text-gray-300 hover:bg-dark-lighter/80"
              }`}
              onClick={() => setSelectedIndustry("healthcare")}
            >
              Healthcare
            </Button>
            <Button
              variant={selectedIndustry === "ecommerce" ? "default" : "outline"}
              className={`px-4 py-2 rounded-full ${
                selectedIndustry === "ecommerce"
                  ? "bg-primary text-white"
                  : "bg-dark-lighter text-gray-300 hover:bg-dark-lighter/80"
              }`}
              onClick={() => setSelectedIndustry("ecommerce")}
            >
              E-Commerce
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-dark-lighter rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="h-48 relative">
                  <img
                    src={useCase.imageSrc}
                    alt={useCase.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-br-lg">
                    {useCase.industry.charAt(0).toUpperCase() +
                      useCase.industry.slice(1)}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="font-medium text-primary mr-2">
                      Results:
                    </span>
                    <span>{useCase.results}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full text-lg font-medium transition hover:opacity-90"
          >
            <a href="#contact">Discuss Your Use Case</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
