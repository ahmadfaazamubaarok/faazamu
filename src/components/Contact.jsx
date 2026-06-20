import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Github, Linkedin, Twitter } from './SocialIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail size={22} />, label: 'Email', value: 'hello@faazamu.dev', href: 'mailto:hello@faazamu.dev' },
    { icon: <Phone size={22} />, label: 'Phone', value: '+62 812 3456 7890', href: 'tel:+6281234567890' },
    { icon: <MapPin size={22} />, label: 'Location', value: 'Jakarta, Indonesia', href: null },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind, want to collaborate, or just want to say hi? Send me a message!
        </p>

        <div className="contact-wrapper">
          {/* Left: Contact info cards */}
          <div className="contact-info-panel">
            <div className="contact-card-group">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="info-item-card glass card">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} className="info-value-link">{info.value}</a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="socials-card glass card">
              <h3>Connect Online</h3>
              <p>Find me on other platforms where I actively share my work and write articles.</p>
              <div className="socials-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="contact-form glass card">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-status status-success">
                  🎉 Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
