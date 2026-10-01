// Contact.jsx
// Contact page with public contact information and an interactive React form.
// The form captures the visitor's information and returns them to Home after submission.

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

function Contact() {
  const navigate = useNavigate();

  // Store the values entered into the contact form.
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  // Update the matching form field whenever the visitor types.
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Prevent the normal form refresh, capture the values and then return Home.
  function handleSubmit(event) {
    event.preventDefault();

    // For Assignment 1 the form only needs to capture the information.
    console.log('Contact form submitted:', formData);
    alert(`Thanks ${formData.firstName}! Your message has been captured.`);

    // Return the visitor to the Home page after submission.
    navigate('/');
  }

  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Let's connect."
        description="Have a question, project idea or aviation conversation? Send me a message."
      />

      {/* Contact details and message form are shown side-by-side on larger screens. */}
      <section className="contact-layout page-width">
        <aside className="contact-panel">
          <p className="eyebrow">CONTACT INFORMATION</p>
          <h2>Vivek Vadassery Nigi</h2>
          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:viveknigi24@gmail.com">viveknigi24@gmail.com</a>
          </div>
          <div className="contact-item">
            <span>Location</span>
            <p>Toronto, Ontario</p>
          </div>
          <div className="contact-item">
            <span>LinkedIn</span>
            <a href="https://www.linkedin.com/in/vivcode/" target="_blank" rel="noreferrer">linkedin.com/in/vivcode</a>
          </div>
        </aside>

        {/* Controlled form: every input value is stored in the formData state object. */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              First Name
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>
            <label>
              Last Name
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </label>
          </div>

          <div className="form-row">
            <label>
              Contact Number
              <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
            </label>
            <label>
              Email Address
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
          </div>

          <label>
            Message
            <textarea name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
          </label>

          <button type="submit" className="button primary-button">Send Message</button>
        </form>
      </section>
    </>
  );
}

export default Contact;
