import { FC, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "CTO, FinTech Solutions Inc.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    stars: 5,
    quote:
      "The AI agents developed by this team have revolutionized our data analysis workflows. What used to take our analysts hours now happens automatically in minutes, with greater accuracy and deeper insights.",
    result: "42% increase in operational efficiency",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director, MediCare Solutions",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    stars: 5,
    quote:
      "Their AI workflow automation solution has transformed our patient care coordination. Our staff now spends less time on paperwork and more time with patients. The ROI has been tremendous.",
    result: "35% reduction in administrative workload",
  },
  {
    name: "David Rodriguez",
    role: "Supply Chain Manager, Global Retail",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    stars: 5,
    quote:
      "The predictive inventory management AI has been a game-changer for our supply chain. We've reduced stockouts while simultaneously lowering our inventory costs. The implementation was smooth and the team was highly responsive.",
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
        const slides = sliderRef.current.querySelectorAll(".testimonial-slide");
        const scrollLeft = sliderRef.current.scrollLeft;
        const slideWidth = sliderRef.current.clientWidth;
        
        const newIndex = Math.round(scrollLeft / slideWidth);
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < slides.length) {
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
    <section id="testimonials" className="py-20 bg-dark-DEFAULT">
      <div className="container mx-auto px-4">
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

        <div className="testimonial-slider relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory space-x-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-slide min-w-full md:min-w-[400px] flex-shrink-0 snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-dark-lighter rounded-xl p-8 h-full border border-gray-800">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} portrait`}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-current"
                            strokeWidth={0}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>
                    <p className="text-primary font-medium">{testimonial.result}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="testimonial-navigation flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-primary" : "bg-gray-600"
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
