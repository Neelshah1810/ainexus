import { FC, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Generic avatar placeholder
const genericAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234B5563'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";

const testimonials = [
  {
    name: "Financial Sector Client",
    role: "Senior Executive, Finance",
    image: genericAvatar,
    stars: 5,
    quote:
      "AI agents revolutionized our data analysis, reducing task times from hours to minutes while improving accuracy and delivering deeper insights.",
    result: "42% increase in operational efficiency",
  },
  {
    name: "Healthcare Sector Client",
    role: "Operations Leader, Healthcare",
    image: genericAvatar,
    stars: 5,
    quote:
      "AI workflow automation transformed our patient care coordination, reducing paperwork and increasing patient interaction time with excellent ROI.",
    result: "35% reduction in administrative workload",
  },
  {
    name: "Retail Sector Client",
    role: "Supply Chain Leader, Retail",
    image: genericAvatar,
    stars: 5,
    quote:
      "Predictive inventory AI improved our supply chain efficiency, reducing stockouts and lowering inventory costs with smooth implementation.",
    result: "23% improvement in inventory turnover",
  },
];

const TestimonialsSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      const slides = sliderRef.current.querySelectorAll(".testimonial-slide");
      if (slides[index]) {
        slides[index].scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.clientWidth;
        const scrollLeft = sliderRef.current.scrollLeft;
        const scrollableWidth = sliderRef.current.scrollWidth - containerWidth;
        // Calculate current index based on scroll position
        const slideWidth = containerWidth;
        const newIndex = Math.min(Math.round(scrollLeft / slideWidth), testimonials.length - 1);
        
        // Update active index if needed
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < testimonials.length) {
          setActiveIndex(newIndex);
        }
      }
    };

    sliderRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      sliderRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-dark-DEFAULT overflow-hidden w-full">
      <div className="container mx-auto px-3">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-300">
            Discover how our AI agents are transforming businesses and delivering
            real results.
          </p>
        </motion.div>

        <div className="testimonial-slider relative w-full max-w-4xl mx-auto">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide w-full"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x mandatory",
              overflowY: "hidden"
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-slide w-full flex-shrink-0 snap-center px-4"
                style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-dark-lighter rounded-xl p-8 h-full border border-gray-800 mx-auto max-w-3xl">
                  <CardContent className="p-2">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} portrait`}
                          className="w-14 h-14 rounded-full bg-gray-700 p-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-gray-400 text-lg">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="mb-5">
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-6 w-6 fill-current"
                            strokeWidth={0}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 italic mb-5 line-clamp-3 text-xl">{testimonial.quote}</p>
                    <p className="text-primary font-medium text-lg">{testimonial.result}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="testimonial-navigation flex justify-center space-x-3 mt-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary scale-110" : "bg-gray-600 opacity-70"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
