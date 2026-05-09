// EmailJS Configuration
// You need to set up EmailJS account and get these values

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID (create a service in EmailJS dashboard)
  SERVICE_ID: 'service_umicouq',
  
  // Your EmailJS public key (found in EmailJS dashboard)
  PUBLIC_KEY: '1xOsh1llBf4BJ4lyv',
  
  // Email templates
  TEMPLATES: {
    CONTACT_FORM: 'template_contact_form',
    APPOINTMENT: 'template_appointment'
  },
  
  // Recipient email
  RECIPIENT_EMAIL: 'Ahmed.ramadan@mail.com'
};

// Instructions for setup:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create email templates for contact form and appointment
// 5. Get your public key from the dashboard
// 6. Replace 'YOUR_EMAILJS_PUBLIC_KEY' with your actual public key
// 7. Update the service ID and template IDs if you use different names
