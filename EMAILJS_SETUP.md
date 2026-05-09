# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from your contact form and appointment booking form to `Ahmed.ramadan@mail.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_hr_consulting`)

## Step 3: Create Email Templates

### Contact Form Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set Template ID as: `template_contact_form`
4. Use this template content:

```
Subject: New Contact Form Submission - {{from_name}}

Hello Ahmed,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}

Please reply to: {{reply_to}}

Best regards,
Your Website
```

### Appointment Booking Template

1. Create another template
2. Set Template ID as: `template_appointment`
3. Use this template content:

```
Subject: New Appointment Booking - {{from_name}}

Hello Ahmed,

You have received a new appointment booking:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Needed: {{service}}
Meeting Type: {{meeting_type}}
Preferred Date: {{preferred_date}}
Preferred Time: {{preferred_time}}
Additional Information: {{message}}

Please reply to: {{reply_to}}

Best regards,
Your Website
```

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (starts with something like `user_xxxxxxxxx`)
3. Copy this key

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key
3. Update the service ID and template IDs if you used different names

## Step 6: Test the Forms

1. Start your development server: `npm run dev`
2. Go to your website
3. Fill out the contact form and submit
4. Check if Ahmed receives the email
5. Test the appointment booking form as well

## Troubleshooting

- Make sure your email service is properly configured
- Check that the template IDs match exactly
- Verify your public key is correct
- Check the browser console for any error messages

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- 2 email services
- 2 email templates

This should be sufficient for most small business websites.

## Security Note

The public key is safe to use in frontend code. EmailJS handles the security on their end. Never put your email service credentials directly in your frontend code.
