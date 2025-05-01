import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

// Validate required environment variables
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const PRIMARY_RECIPIENT = process.env.EMAIL_RECIPIENT || 'neelshah863@gmail.com';
// No need for secondary recipient as it's the same address

// Check if required environment variables are set
if (!EMAIL_USER) {
  console.warn('⚠️ EMAIL_USER is not set in the environment variables. Email functionality will not work properly.');
}

if (!EMAIL_PASS) {
  console.warn('⚠️ EMAIL_PASS is not set in the environment variables. Email functionality will not work properly.');
}

// Configure Nodemailer transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false // Helps avoid certificate issues in development
  },
  debug: process.env.NODE_ENV === 'development', // Enable debug output only in development
  logger: process.env.NODE_ENV === 'development' // Log information only in development
});
export async function registerRoutes(app: Express): Promise<Server> {
  // Create contact submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      const newContact = await storage.createContact({
        ...contactData,
        createdAt: new Date().toISOString(),
      });
      
      // Log form submission for forwarding to ds6406481@gmail.com
      console.log('====== NARNETIX AI CONTACT FORM SUBMISSION ======');
      console.log(`Name: ${contactData.name}`);
      console.log(`Email: ${contactData.email}`);
      console.log(`Company: ${contactData.company}`);
      console.log(`Interest: ${contactData.interest}`);
      console.log(`Message: ${contactData.message}`);
      console.log(`Time: ${new Date().toLocaleString()}`);
      console.log('===============================================');
      
      // Check if email credentials are configured before attempting to send email
      if (EMAIL_USER && EMAIL_PASS) {
        try {
          // Prepare email content with simple formatting
          const timestamp = new Date().toLocaleString();
          const emailContent = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h2>New Contact Form Submission - Narnetix AI</h2>
              <p><strong>Submitted on:</strong> ${timestamp}</p>
              <hr>
              <p><strong>Name:</strong> ${contactData.name}</p>
              <p><strong>Email:</strong> ${contactData.email}</p>
              <p><strong>Company:</strong> ${contactData.company}</p>
              <p><strong>Area of Interest:</strong> ${contactData.interest}</p>
              
              <h3>Message:</h3>
              <p>${contactData.message.replace(/\n/g, '<br>')}</p>
            </body>
            </html>
          `;
          
          // Configure email message for Nodemailer
          // Configure email message for Nodemailer with improved deliverability
          const mailOptions = {
            from: `"Narnetix AI Contact Form" <${EMAIL_USER}>`,
            to: PRIMARY_RECIPIENT,
            subject: `New Contact Form: ${contactData.name} from ${contactData.company}`,
            html: emailContent,
            replyTo: contactData.email,
            text: `New Contact Form Submission\n\nName: ${contactData.name}\nEmail: ${contactData.email}\nCompany: ${contactData.company}\nInterest: ${contactData.interest}\n\nMessage: ${contactData.message}\n\nSubmitted: ${timestamp}`
          };
          // Send email using Nodemailer
          try {
            const info = await transporter.sendMail(mailOptions);
            console.log(`✅ Email sent successfully: ${info.messageId}`);
          } catch (emailError: any) {
            console.error('❌ Error sending email:', emailError.message);
            // Don't fail the request when email sending fails
          }
        } catch (outerError: any) {
          console.error('❌ Unexpected error in email sending:', outerError);
        }
      } else {
        console.warn('⚠️ Skipping email sending because email credentials are not configured.');
      }
      
      return res.status(201).json({
        message: "Contact submission successful",
        contact: newContact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      }
      
      return res.status(500).json({
        message: "Internal server error",
        error: (error as Error).message
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
