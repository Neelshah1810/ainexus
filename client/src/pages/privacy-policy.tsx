import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const PrivacyPolicy: FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          
          <p className="text-gray-400 mb-4">Last Updated: May 1, 2025</p>
          
          <Link href="/">
            <a className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
          </Link>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              <h2>1. Introduction</h2>
              <p>
                At Narnetix AI ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI services, including our custom AI agents, workflow automation systems, and data-driven decision systems.
              </p>
              <p>
                By accessing or using our services, you consent to the practices described in this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact information (such as name, email address, phone number, and company name)</li>
                <li>Account information (if you create an account with us)</li>
                <li>Payment information (if you purchase our services)</li>
                <li>Communications you send to us</li>
                <li>Information you provide through our contact forms or when requesting a consultation</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Data Processed by Our AI Systems</h3>
              <p>
                When using our AI services, we may process various types of data that you provide, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Business data and metrics</li>
                <li>Workflow information</li>
                <li>Decision-making parameters</li>
                <li>User-generated content for AI processing</li>
                <li>Integration data from third-party business software</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">2.3 Automatically Collected Information</h3>
              <p>
                When you visit our website, we automatically collect certain information about your device and how you interact with our website, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and settings</li>
                <li>Usage patterns and interactions with our website</li>
                <li>Referring websites or sources</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Train and improve our AI models and systems</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and unauthorized access</li>
                <li>Personalize your experience and provide content relevant to your interests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. AI-Specific Privacy Considerations</h2>
              <p>
                Our AI systems are designed with privacy in mind. Here's how we handle data specifically in our AI operations:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Data Minimization:</strong> We process only the data necessary for providing the requested AI service.
                </li>
                <li>
                  <strong>Model Training:</strong> We may use anonymized and aggregated data to improve our AI models. No personally identifiable information is used for training without explicit consent.
                </li>
                <li>
                  <strong>AI Output:</strong> The outputs generated by our AI systems are provided only to the intended recipients and are not shared with third parties unless explicitly authorized.
                </li>
                <li>
                  <strong>Algorithmic Transparency:</strong> We strive to make our AI decision-making processes as transparent as possible and provide explanations of AI-generated outputs when feasible.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Sharing Your Information</h2>
              <p>
                We may share your personal information with:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who help us provide our services (such as hosting providers, payment processors, and customer service tools).
                </li>
                <li>
                  <strong>Business Partners:</strong> Companies we partner with to offer integrated or joint products and services.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid legal requests.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as a business asset.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information with third parties when you have given us your consent to do so.
                </li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication procedures</li>
                <li>Secure data storage practices</li>
                <li>Regular security training for employees</li>
              </ul>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Withdrawing your consent at any time</li>
                <li>Objecting to processing of your personal information</li>
                <li>Requesting restriction of processing your personal information</li>
                <li>Requesting transfer of your personal information</li>
                <li>Opting out of marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us at info.narnetix.ai@gmail.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date at the top of this Privacy Policy. We encourage you to review this Privacy Policy frequently to stay informed about how we are protecting your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p>
                Narnetix AI<br />
                Email: info.narnetix.ai@gmail.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;

