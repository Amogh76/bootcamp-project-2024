"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./contact.module.css";

export default function About() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send the message. Please try again later.");
    }
  };

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Contact Me</h2>
      {status && <p className={styles.statusMessage}>{status}</p>}
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          className={styles.inputField}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.inputField}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label className={styles.label} htmlFor="message">
          Message:
        </label>
        <textarea
          className={styles.textareaField}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button className={styles.submitButton} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
