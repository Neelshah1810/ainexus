import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#solutions" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Technology", href: "#technology" },
  { name: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    
    // Handle anchor links with smooth scrolling
    if (href?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: "smooth",
        });
        setIsOpen(false);
      }
    } 
    // For non-anchor links, let the default navigation happen
    else {
      // Close mobile menu if open
      setIsOpen(false);
    }
  };
  
  // Handle logo click - either navigate home or scroll to top
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If already on home page, just scroll to top
    if (location === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    // Otherwise, let default navigation happen (will go to home page)
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            onClick={handleLogoClick}
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={handleNavLinkClick}
              >
                {link.name}
              </a>
            ))}
            {location === "/" ? (
              <Button
                asChild
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-5 py-2 rounded-full transition-colors"
              >
                <a href="#contact" onClick={handleNavLinkClick}>
                  Book a Demo
                </a>
              </Button>
            ) : (
              <Button
                asChild
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-5 py-2 rounded-full transition-colors"
              >
                <Link href="/#contact">
                  Book a Demo
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-4 pb-2"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={handleNavLinkClick}
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/80 text-primary-foreground px-5 py-2 rounded-full transition-colors w-full"
                >
                  <a href="#contact" onClick={handleNavLinkClick}>
                    Book a Demo
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
