import React from 'react';
import styles from './contact.module.css';

const ContactPage: React.FC = () => {
  return (
    <main className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Contact</h1>
      <form className={styles.contactForm}>
        <label className={styles.label} htmlFor="name">Name:</label>
        <input
          className={styles.inputField}
          type="text"
          id="name"
          name="name"
          placeholder="ex: LeBron James"
        />
        
        <label className={styles.label} htmlFor="email">Email:</label>
        <input
          className={styles.inputField}
          type="email"
          id="email"
          name="email"
          placeholder="ex: NoRealRings@example.com"
        />
        
        <label className={styles.label} htmlFor="message">Message:</label>
        <textarea
          className={styles.textareaField}
          id="message"
          name="message"
          rows={4}
          placeholder="Drop your message here"
        />
        
        <input className={styles.submitButton} type="submit" value="Submit" />
      </form>
      <footer className={styles.footer}>© 2024 Amogh's Great Website | All Rights Reserved</footer>
    </main>
  );
};

export default ContactPage;
