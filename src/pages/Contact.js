import React, { useState } from 'react';
import './PageStyles.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: post to server endpoint
    // fetch('http://localhost:5000/api/contact', {...})
    alert('Form submitted! ' + JSON.stringify(formData));
  };

  return (
    <div className="container page">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label>Message</label>
        <textarea
          rows="5"
          value={formData.message}
          required
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
