# Gmail Email Setup Guide

This guide will walk you through setting up EmailJS to receive emails directly in your Gmail inbox when someone submits the contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (or **"Sign In"** if you already have an account)
3. Sign up using your Google account for easier Gmail integration
4. Verify your email address

## Step 2: Add Gmail Service

1. In the EmailJS dashboard, click **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Select **"Gmail"** from the list of email providers
4. Click **"Connect Account"**
5. You'll be redirected to Google to authorize EmailJS
   - Sign in with the Gmail account where you want to receive emails
   - Click **"Allow"** to grant EmailJS permission
6. Give your service a name (e.g., "Portfolio Gmail")
7. Click **"Create Service"**
8. **Copy and save your Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Configure your template:

   **Template Name:** Portfolio Contact Form
   
   **Subject:** `New Contact from Portfolio: {{subject}}`
   
   **Content:**
   ```
   You have received a new message from your portfolio contact form.
   
   From: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   This email was sent from your portfolio website.
   ```

4. Click **"Save"**
5. **Copy and save your Template ID** (you'll see it in the template list or URL)

## Step 4: Get Your Public Key

1. Click **"Account"** in the left sidebar
2. Go to **"General"** tab
3. Find **"Public Key"** (also called API Key)
4. **Copy and save your Public Key**

## Step 5: Configure Environment Variables

1. In your project root directory, create a file named `.env` (if it doesn't exist)
2. Copy the contents from `.env.example` to `.env`
3. Fill in your actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
REACT_APP_CONTACT_EMAIL=your-email@gmail.com
```

**Important:** 
- Replace `service_xxxxxxxxx` with your actual Service ID from Step 2
- Replace `template_xxxxxxxxx` with your actual Template ID from Step 3
- Replace `xxxxxxxxxxxxxxxxxxxx` with your actual Public Key from Step 4
- Replace `your-email@gmail.com` with your Gmail address

## Step 6: Restart Development Server

After creating/updating your `.env` file:

1. Stop your development server (Ctrl+C)
2. Restart it with `npm start`
3. The environment variables will be loaded

## Step 7: Test the Contact Form

1. Open your portfolio in the browser
2. Navigate to the Contact section
3. Fill out the form:
   - Name: Your name
   - Email: Your test email
   - Subject: Test Message
   - Message: This is a test
4. Click **"Send Message"**
5. Check your Gmail inbox - you should receive the email within seconds!

## Troubleshooting

### Emails not being received?

1. **Check your EmailJS dashboard:**
   - Go to **"Logs"** in EmailJS dashboard
   - Check if there are any errors

2. **Verify environment variables:**
   - Make sure your `.env` file is in the project root (not in `src/`)
   - Ensure all variable names start with `REACT_APP_`
   - Restart your development server after changing `.env`

3. **Check browser console:**
   - Open browser DevTools (F12)
   - Check the Console tab for any error messages

4. **Verify Gmail service:**
   - Go to EmailJS → Email Services
   - Make sure your Gmail service is connected and active

5. **Check spam folder:**
   - Sometimes emails might go to spam initially

### Getting "Invalid credentials" error?

- Double-check your Service ID, Template ID, and Public Key
- Make sure there are no extra spaces in your `.env` file
- Ensure your Gmail service is still connected in EmailJS

### Environment variables not loading?

- Make sure the `.env` file is in the root directory (same level as `package.json`)
- Variable names must start with `REACT_APP_`
- Restart the development server after creating/modifying `.env`
- For production builds, you'll need to set these variables in your hosting platform

## Production Deployment

When deploying to production (Netlify, Vercel, etc.):

1. Go to your hosting platform's environment variables settings
2. Add the same variables:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
   - `REACT_APP_CONTACT_EMAIL`

## EmailJS Free Tier Limits

- **200 emails per month** (free tier)
- More than enough for a portfolio site
- Upgrade available if you need more

## Security Note

The `.env` file is already in `.gitignore`, so your credentials won't be committed to Git. However, since these are frontend environment variables, they will be visible in the browser's source code. This is fine for EmailJS Public Key as it's designed to be public. The Public Key has rate limiting and domain restrictions you can set in EmailJS dashboard.

---

**Need Help?** Check the [EmailJS Documentation](https://www.emailjs.com/docs/) or their [support forum](https://www.emailjs.com/community/).

