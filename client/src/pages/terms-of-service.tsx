import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const TermsOfService: FC = () => {
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
              <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
              <h2>1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you (whether an individual or entity) and Narnetix AI ("we," "our," or "us") governing your access to and use of our website and AI services, including our custom AI agents, AI workflow automation, data-driven decision systems, and AI integration services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. AI Services and Usage</h2>
              <h3 className="text-xl font-semibold mb-3">2.1 Services Description</h3>
              <p>
                Narnetix AI provides artificial intelligence solutions designed to help businesses automate workflows, enhance decision-making processes, and improve operational efficiency. Our Services may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Development of custom AI agents tailored to specific business needs</li>
                <li>AI-powered workflow automation solutions</li>
                <li>Data-driven decision support systems</li>
                <li>AI integration with existing business software</li>
                <li>Consulting and implementation services related to AI technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Service Eligibility</h3>
              <p>
                To use our Services, you must be at least 18 years old and have the authority to enter into these Terms on behalf of yourself or any entity you represent. By using our Services, you represent and warrant that you meet all eligibility requirements.
              </p>

              <h3 className="text-xl font-semibold mb-3">2.3 Account Creation</h3>
              <p>
                Some of our Services may require you to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Service Limitations</h2>
              <h3 className="text-xl font-semibold mb-3">3.1 AI Technology Limitations</h3>
              <p>
                You understand and acknowledge that:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>AI technologies have inherent limitations and may not be perfect or error-free</li>
                <li>AI systems may provide outputs that require human review and judgment</li>
                <li>The quality and accuracy of AI outputs may depend on the quality of input data</li>
                <li>We continuously work to improve our AI systems, but they are not infallible</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Service Availability</h3>
              <p>
                We strive to ensure that our Services are available 24/7, but we do not guarantee uninterrupted access. Our Services may be temporarily unavailable due to maintenance, updates, or factors beyond our control. We are not liable for any downtime or service interruptions.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.3 Service Modifications</h3>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice. We may also impose limits on certain features or restrict access to parts or all of the Services without notice or liability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
              <h3 className="text-xl font-semibold mb-3">4.1 Acceptable Use</h3>
              <p>
                You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use our Services in any way that violates any applicable law or regulation</li>
                <li>Use our Services to engage in any harmful, fraudulent, deceptive, or manipulative practices</li>
                <li>Attempt to bypass or circumvent any security measures implemented in our Services</li>
                <li>Introduce any viruses, trojans, worms, or other malicious code to our systems</li>
                <li>Attempt to access, tamper with, or use non-public areas of our Services</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Collect or store personal information about other users without their consent</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">4.2 Input Data Responsibility</h3>
              <p>
                You are solely responsible for the data, content, and information you provide to our Services ("Input Data"). You represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>You own or have the necessary rights to use and share Input Data with us</li>
                <li>Your Input Data does not violate the rights of any third party</li>
                <li>Your Input Data complies with all applicable laws and regulations</li>
                <li>You have obtained all necessary consents to share Input Data with us</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">4.3 Output Usage</h3>
              <p>
                You are responsible for how you use the outputs and results generated by our AI Services ("AI Outputs"). You understand that AI Outputs may require human review and judgment before implementation in critical or sensitive contexts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
              <h3 className="text-xl font-semibold mb-3">5.1 Fees and Billing</h3>
              <p>
                Certain Services may be offered on a subscription basis or for a one-time fee. Fees are described on our website or in a separate agreement. Unless otherwise stated, all fees are quoted in U.S. Dollars.
              </p>

              <h3 className="text-xl font-semibold mb-3">5.2 Payment Methods</h3>
              <p>
                We accept various payment methods as described on our website. You authorize us to charge your selected payment method for all applicable fees. If your payment cannot be completed, we may suspend or terminate your access to paid Services.
              </p>

              <h3 className="text-xl font-semibold mb-3">5.3 Subscription and Renewals</h3>
              <p>
                For subscription-based Services, your subscription will automatically renew at the end of each subscription period unless you cancel it before the renewal date. You can cancel your subscription at any time through your account settings or by contacting us.
              </p>

              <h3 className="text-xl font-semibold mb-3">5.4 Refunds</h3>
              <p>
                Refund policies are described on our website or in a separate agreement. Generally, refunds are provided only in accordance with applicable law or at our discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <h3 className="text-xl font-semibold mb-3">6.1 Our Intellectual Property</h3>
              <p>
                Our Services, including all content, features, and functionality, are owned by Narnetix AI and protected by copyright, trademark, and other intellectual property laws. These Terms do not grant you any right, title, or interest in our Services, except for the limited right to use them as provided in these Terms.
              </p>

              <h3 className="text-xl font-semibold mb-3">6.2 License to Use Services</h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Services for your internal business purposes in accordance with these Terms.
              </p>

              <h3 className="text-xl font-semibold mb-3">6.3 Input Data Rights</h3>
              <p>
                You retain all rights to your Input Data. By providing Input Data to us, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, and process your Input Data solely for the purpose of providing and improving our Services.
              </p>

              <h3 className="text-xl font-semibold mb-3">6.4 AI Output Ownership</h3>
              <p>
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>For custom AI agents and solutions specifically developed for you, you own the specific AI Outputs generated for your use</li>
                <li>We retain ownership of all underlying AI models, algorithms, methodologies, and improvements</li>
                <li>We may use general insights and learnings from providing Services to improve our AI systems</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">6.5 Feedback</h3>
              <p>
                If you provide feedback, suggestions, or ideas about our Services, you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, modify, and incorporate your feedback into our Services without any obligation to compensate you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Liability and Warranties</h2>
              <h3 className="text-xl font-semibold mb-3">7.1 Disclaimer of Warranties</h3>
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT OUR SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT CONTENT LOSS WON'T OCCUR.
              </p>

              <h3 className="text-xl font-semibold mb-3">7.2 Limitation of Liability</h3>
              <p>
                IN NO EVENT SHALL NARNETIX AI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, OUR SERVICES</li>
                <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OUR SERVICES</li>
                <li>ANY CONTENT OBTAINED FROM OUR SERVICES</li>
                <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
              </ul>
              <p>
                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATING TO THESE TERMS OR OUR SERVICES IS LIMITED TO THE AMOUNT YOU PAID US TO USE OUR SERVICES DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
              </p>

              <h3 className="text-xl font-semibold mb-3">7.3 AI Decision-Making</h3>
              <p>
                You acknowledge that AI systems provide recommendations and support for human decision-making but should not replace human judgment in critical situations. You are responsible for reviewing and validating AI Outputs before implementing them in your business operations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Narnetix AI and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including attorney's fees) arising from:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your use of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights, including intellectual property rights</li>
                <li>Your Input Data and how you use AI Outputs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Term and Termination</h2>
              <p>
                These Terms will remain in effect until terminated by either you or us. You may terminate these Terms by ceasing to use our Services. We may terminate these Terms and your access to our Services at any time, with or without cause, and with or without notice.
              </p>
              <p>
                Upon termination, your right to use our Services will immediately cease, but provisions that by their nature should survive termination will remain in effect, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles.
              </p>
              <p>
                Any dispute arising out of or relating to these Terms or our Services shall be resolved through binding arbitration in accordance with the rules of [Arbitration Association]. The arbitration shall be conducted in [City, Jurisdiction], and the arbitration award may be entered as a judgment in any court of competent jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website with a new "Last Updated" date. Your continued use of our Services after any changes to these Terms constitutes your acceptance of such changes.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p>
                If you have any questions, concerns, or feedback about these Terms or our Services, please contact us at:
              </p>
              <p>
                Narnetix AI<br />
                Email: info.narnetix.ai@gmail.com<br />
                Website: www.narnetixai.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;
