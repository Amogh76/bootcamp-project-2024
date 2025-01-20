import React from "react";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Hey Everyone!</h1>
      <div>
        <p className={styles.paragraph}>
          My name is <strong>Amogh Arora</strong>, and I am a <em>motivated</em> college freshman with a <strong>strong work ethic and creative ability.</strong>
          I have coded efficient computer programs in classes at school and community college.
          I thrive when collaborating with teammates on group projects and enjoy building camaraderie.
          I’m passionate about learning the connections between <strong>computer networks and human cognitive abilities.</strong>
        </p>
        <p className={styles.paragraph}>
          <strong>I also like to play Basketball!</strong>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="Me.jpg" alt="Picture of Amogh Arora" />
      </div>
    </main>
  );
}
