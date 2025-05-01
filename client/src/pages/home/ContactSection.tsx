import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

// Define Calendly type for TypeScript
interface CalendlyWidget {
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement | null;
    prefill?: Record<string, any>;
    utm?: Record<string, any>;
  }) => void;
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection: FC = () => {
  const { toast } = useToast();
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(true);
  
  // Initialize Calendly widget when component mounts
  useEffect(() => {
    const initializeCalendly = () => {
      const element = document.getElementById('calendly-inline-widget');
      if (window.Calendly && element) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/info-narnetix-ai/30min?hide_gdpr_banner=1&background_color=121212&text_color=ffffff&primary_color=6d28d9',
          parentElement: element,
          prefill: {},
          utm: {}
        });
        
        // Set up an observer to detect when Calendly has loaded its content
        const observer = new MutationObserver((mutations) => {
          // Check if Calendly has added its elements to the DOM
          const hasCalendlyLoaded = element.querySelector('.calendly-inline-widget iframe');
          if (hasCalendlyLoaded) {
            setIsCalendlyLoading(false);
            observer.disconnect();
          }
        });
        
        // Start observing the widget container for DOM changes
        observer.observe(element, { childList: true, subtree: true });
        
        // Fallback timer in case observer doesn't trigger
        setTimeout(() => {
          setIsCalendlyLoading(false);
        }, 2500);
      }
    };

    // Load Calendly script if it hasn't been loaded yet
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      // Initialize Calendly after script loads
      script.onload = initializeCalendly;
      
      document.body.appendChild(script);
    } else {
      // If already loaded, initialize widget
      initializeCalendly();
    }

    // Clean up script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Thank you!",
        description: "Your message has been sent successfully. We'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to send message: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about our AI solutions? Schedule a consultation or send us a message.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <motion.div
            className="md:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-3">Schedule a Consultation</h3>
            <p className="text-gray-300 mb-4">
              Book a 30-minute call to discuss your needs and explore how our 
              AI solutions can help your business.
            </p>
            <Card className="bg-dark-DEFAULT p-5 rounded-xl shadow-md flex-1 flex flex-col border border-gray-800">
              <CardContent className="p-0 flex-1 flex flex-col">
                <h4 className="text-lg font-semibold mb-2">Available Time Slots</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Select a convenient time for your consultation.
                </p>
                <div 
                  id="calendly-inline-widget"
                  className="w-full bg-dark-lighter/50 rounded-lg flex items-center justify-center mb-3 border border-gray-700 overflow-hidden transition-opacity duration-300"
                  style={{ 
                    height: '350px',
                    width: '100%',
                    minWidth: '300px'
                  }}
                  aria-label="Calendly scheduling widget"
                  role="region"
                >
                  {/* Calendly loading state */}
                  {isCalendlyLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-dark-lighter/90 z-10">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-3"></div>
                        <p className="text-gray-400">Loading calendar...</p>
                      </div>
                    </div>
                  )}
                  {/* Calendly will inject content here */}
                </div>
                <p className="text-xs text-gray-400 mt-auto">
                  Our consultations last 30 minutes and are conducted via video call.
                </p>
              </CardContent>
            </Card>
            <div className="flex flex-col sm:flex-row gap-4 mt-3">
              <div className="flex items-center">
                <div className="mr-2 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-300 text-xs">info.narnetix.ai@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-7 w-7 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-gray-300 text-xs">30-minute video call</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-3">Send Us a Message</h3>
            <p className="text-gray-300 mb-4">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <Card className="bg-dark-DEFAULT p-5 rounded-xl border border-gray-800 shadow-md flex-1">
              <CardContent className="p-0">

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="Your name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="you@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="Your company"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>I'm interested in</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-dark-lighter border-gray-700">
                              <SelectItem value="custom-agents">
                                Custom AI Agents
                              </SelectItem>
                              <SelectItem value="workflow-automation">
                                AI Workflow Automation
                              </SelectItem>
                              <SelectItem value="decision-systems">
                                Data-Driven Decision Systems
                              </SelectItem>
                              <SelectItem value="integration">
                                AI Integration for Business Software
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={4}
                              className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="Tell us about your project or needs"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
