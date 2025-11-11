# Quick Start: Gmail Email Setup

## Fast Setup (5 minutes)

1. **Sign up for EmailJS**: Go to [emailjs.com](https://www.emailjs.com/) and create a free account

2. **Connect Gmail**:
   - Dashboard → Email Services → Add New Service → Select Gmail
   - Connect your Gmail account
   - Copy your **Service ID**

3. **Create Template**:
   - Dashboard → Email Templates → Create New Template
   - Use this template:
   ```
   Subject: New Contact: {{subject}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```
   - Copy your **Template ID**

4. **Get Public Key**:
   - Dashboard → Account → General → Copy **Public Key**

5. **Create `.env` file** in project root:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   REACT_APP_CONTACT_EMAIL=your-email@gmail.com
   ```

6. **Restart server**: Stop and restart `npm start`

7. **Test it**: Fill out the contact form and check your Gmail!

## Detailed Guide

For step-by-step instructions with screenshots and troubleshooting, see **GMAIL_SETUP.md**

