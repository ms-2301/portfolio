import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // EmailJS configuration - use environment variables for security
    // Create a .env file in the root directory with these variables
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    try {
      // If EmailJS is not configured, show a fallback message
      if (
        serviceID === "YOUR_SERVICE_ID" ||
        templateID === "YOUR_TEMPLATE_ID" ||
        publicKey === "YOUR_PUBLIC_KEY"
      ) {
        // Fallback: Open email client
        const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const contactEmail = process.env.REACT_APP_CONTACT_EMAIL || "ravi@example.com";
        window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
        setStatus({
          type: "info",
          message: "Opening your email client. Please configure EmailJS for direct form submission.",
        });
      } else {
        // EmailJS integration
        await emailjs.send(
          serviceID,
          templateID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          publicKey
        );

        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 relative bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-white">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm open to opportunities in <span className="text-teal-100 font-semibold">Frontend, Backend, or Full-Stack development.</span> 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out if you're looking for a developer, have a question, 
                or just want to connect. I'm always open to discussing new projects, 
                creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL || "name@example.com"}`}
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">{process.env.REACT_APP_CONTACT_EMAIL || "mithila12320@gmail.com"}</p>
                </div>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaPhone className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+1 (630) 697-2580</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Chicago, IL</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-white placeholder-gray-500 transition-all"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-white placeholder-gray-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-white placeholder-gray-500 transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-white placeholder-gray-500 transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-500/20 border border-green-500/50 text-green-400"
                    : status.type === "error"
                    ? "bg-red-500/20 border border-red-500/50 text-red-400"
                    : "bg-blue-500/20 border border-blue-500/50 text-blue-400"
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-primary/50 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02, y: -2 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

           
          </motion.form>
        </div>
      </div>
      </section>
    );
  }
  