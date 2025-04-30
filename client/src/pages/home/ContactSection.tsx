import { FC } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
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
    <section id="contact" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Agentic AI?
              </span>
            </h2>
            <p className="text-gray-300 mb-8">
              Schedule a consultation with our AI specialists to discuss your
              business challenges and explore how our AI agents can help you
              achieve unprecedented efficiency and growth.
            </p>

            <Card className="bg-dark-DEFAULT p-8 rounded-xl mb-8 border border-gray-800">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">Schedule a Demo</h3>
                <p className="text-gray-300 mb-6">
                  See our AI agents in action with a personalized demonstration
                  tailored to your business needs.
                </p>
                <div className="h-80 bg-dark-lighter/50 rounded-lg flex items-center justify-center mb-4 border border-gray-700">
                  <iframe
                    src="https://calendly.com/d/ysc-gkx-t3j/agentai-demo?hide_gdpr_banner=1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule a demo with AgentAI"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-400">
                  Select a time that works for you. Our demos typically last 30
                  minutes.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-300">contact@agentai.com</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-dark-DEFAULT p-8 rounded-xl border border-gray-800">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
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
