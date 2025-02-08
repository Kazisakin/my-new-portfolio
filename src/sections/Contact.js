import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulated form submission (Integrate with EmailJS, Formspree, etc.)
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Have a project idea? Want to collaborate? Drop me a message!
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="input-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
        </div>

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={submitted}
        >
          {submitted ? "Sending..." : "Send Message"}
        </motion.button>
      </form>

      {/* Styles */}
      <style jsx>{`
        .contact-container {
          max-width: 600px;
          margin: auto;
          text-align: center;
          padding: 3rem 2rem;
          background: rgba(20, 20, 20, 0.95);
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .contact-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
        }

        .contact-description {
          font-size: 1.2rem;
          color: #bbb;
          margin-bottom: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .input-group input,
        .input-group textarea {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          border: none;
          outline: none;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          transition: all 0.3s ease-in-out;
        }

        .input-group input:focus,
        .input-group textarea:focus {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 10px rgba(100, 255, 218, 0.6);
        }

        .input-group textarea {
          height: 120px;
          resize: none;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1.2rem;
          font-weight: bold;
          background: #64ffda;
          color: #111;
          border: none;
          cursor: pointer;
          border-radius: 8px;
          transition: background 0.3s ease-in-out;
        }

        .submit-btn:hover {
          background: #52e0c4;
        }

        .submit-btn:disabled {
          background: rgba(100, 255, 218, 0.5);
          cursor: not-allowed;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .contact-container {
            padding: 2rem 1.5rem;
          }

          .contact-title {
            font-size: 2rem;
          }

          .contact-description {
            font-size: 1rem;
          }

          .input-group input,
          .input-group textarea {
            font-size: 0.95rem;
          }

          .submit-btn {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .contact-container {
            padding: 1.5rem;
          }

          .contact-title {
            font-size: 1.8rem;
          }

          .contact-description {
            font-size: 0.9rem;
          }

          .input-group input,
          .input-group textarea {
            font-size: 0.9rem;
          }

          .submit-btn {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Contact;
