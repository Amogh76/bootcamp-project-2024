import React from "react";
import styles from "./resume.module.css";

const Resume: React.FC = () => {
  return (
    <main className={styles.resume}>
      <h1 className={styles.page_title}>Amogh&apos;s Resume</h1>
      <a href="/Resume.pdf" className={styles.download_button} download>
        Download Resume
      </a>

      <div className={styles.resume}>
        <section className={styles.section}>
          <h2 className={styles.section_title}>Education</h2>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>California Polytechnic State University, San Luis Obispo, CA</h3>
            <p className={styles.entry_info}>BS, Computer Science, Freshman (Class of 2028)</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Ohlone Community College</h3>
            <p className={styles.entry_info}>Completed programming and technology courses</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Irvington High School, Fremont, CA</h3>
            <p className={styles.entry_info}>Weighted GPA: 4.2</p>
          </div>
          <h3>Coursework</h3>
          <ul className={styles.course_list}>
            <li>Writing Arguments</li>
            <li>Calculus</li>
            <li>Western Art</li>
            <li>Introduction to Computing</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Experience</h2>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Programming Classes at Ohlone Community College</h3>
            <p className={styles.entry_info}>Intro to Computers and Info Tech, CNET-142 Intro to Python</p>
            <p className={styles.entry_description}>Learned programming fundamentals and Python coding language</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Irvington High School</h3>
            <p className={styles.entry_info}>Computer Elective Classes</p>
            <p className={styles.entry_description}>Led school computing lab renovation and learned network security</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Summer Springboard UX Design Camp</h3>
            <p className={styles.entry_info}>Cal Poly, SLO</p>
            <p className={styles.entry_description}>Explored UX design with Professor Xiaoying Rong</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Marketing Intern at Arees Software</h3>
            <p className={styles.entry_info}>Researched market trends and created analytical reports</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Skills</h2>
          <ul className={styles.skill_list}>
            <li>Application Development: Python, Java</li>
            <li>Computer Networks: Cisco Routers/Switches</li>
            <li>Network Tools: Wireshark</li>
            <li>UX Design: Figma</li>
            <li>React (Node.js, Visual Studio Code)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Projects</h2>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Study Buddy App</h3>
            <p className={styles.entry_info}>UX Design Project</p>
            <p className={styles.entry_description}>Created a study app in Figma and improved based on user feedback</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Python Flag and Olympic Rings</h3>
            <p className={styles.entry_info}>Final Project for CNET-142 Intro to Python</p>
            <p className={styles.entry_description}>Used Turtle to draw American flag and Olympic rings</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Python Mortgage Calculator</h3>
            <p className={styles.entry_info}>Ongoing personal project</p>
            <p className={styles.entry_description}>Developing a mortgage calculator with a graphical user interface</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Summer Jobs</h2>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Lifeguard</h3>
            <p className={styles.entry_info}>Hacienda Gardens Swim and Tennis Club (Summer 2022)</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Safety Marshall</h3>
            <p className={styles.entry_info}>Milpitas Star Aquatics and Fitness (Summer 2023)</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Instructor</h3>
            <p className={styles.entry_info}>Code Ninjas, Teaching kids programming (Summer 2024)</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Various Volunteer Activities</h2>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>CyberPatriot Competition</h3>
            <p className={styles.entry_info}>Gold Division participant in cybersecurity competition</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Math Tutor</h3>
            <p className={styles.entry_info}>CORE Club, Tutoring underprivileged students</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Veteran Hospital Volunteer</h3>
            <p className={styles.entry_info}>Palo Alto Veteran Hospital</p>
            <p className={styles.entry_description}>Worked in the transport department and at the front desk</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Awards</h2>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Presidential Academic Achievement Award</h3>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Leadership Recognition</h3>
            <p className={styles.entry_info}>Treasurer, High School Core Club</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>Certified in Network Fundamentals</h3>
            <p className={styles.entry_info}>By Precision Exams</p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entry_title}>RedCross Certified Lifeguard</h3>
            <p className={styles.entry_info}>CPR/AED, First Aid, Emergency Oxygen training</p>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>© 2024 Amogh&apos;s Great Website | All Rights Reserved</footer>
    </main>
  );
};

export default Resume;
