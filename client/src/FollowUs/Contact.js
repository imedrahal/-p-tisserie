import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g990vnf",
        "template_25jlles",
        form.current,
        "7c3QScS6N7Cqt4vWv"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h5 className="contact-subtitle">CONTACT US</h5>
        <h2 className="contact-title">Get in Touch</h2>
       <form ref={form} onSubmit={sendEmail} className="contact-form">
  <input type="text" name="user_name" placeholder="Name" required />
  <input type="email" name="user_email" placeholder="Email" required />
  <textarea name="message" rows="5" placeholder="Message" required></textarea>
  <button type="submit">SEND NOW</button>
</form>
      </div>
    </section>
  );
};

export default ContactForm;
