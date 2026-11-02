import { useState } from "react";
import axios from "axios";

const CONTACT_EMAIL = "shahrozafzal262@gmail.com";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData);
      setStatus(response.data.message);
      setStatusType("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      const message = error.response?.data?.message ||
        (error.request
          ? "Cannot connect to the contact server. Start the backend and try again."
          : "Unable to send your message. Please try again later.");
      setStatus(message);
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="section-heading">
          <p>Let's Work Together</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-grid">

          <div className="contact-info">

            <h3>Have a project or opportunity?</h3>

            <p>
              I'm currently open to internship, junior developer
              and freelance opportunities.
            </p>

            <div className="contact-item">
              <strong>Email</strong>

              <a href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="contact-item">
              <strong>LinkedIn</strong>

              <a
                href="https://www.linkedin.com/in/shahroz-afzal-78891b376/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="contact-item">
              <strong>GitHub</strong>

              <a
                href="https://github.com/ShahrozAfzal262"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </a>
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button
              type="submit"
              className="btn primary-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className={`form-status ${statusType}`} role="status">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;