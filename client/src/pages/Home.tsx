import { FC } from "react";
import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import SolutionsSection from "./home/SolutionsSection";
import UseCasesSection from "./home/UseCasesSection";
import TechnologySection from "./home/TechnologySection";
import TestimonialsSection from "./home/TestimonialsSection";
import ContactSection from "./home/ContactSection";
import Footer from "./home/Footer";

const Home: FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <UseCasesSection />
      <TechnologySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
