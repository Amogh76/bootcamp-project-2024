import React from "react";
import Navbar from "../Components/navbar";
import style from "./portfolio.module.css";

const Portfolio: React.FC = () => {
  return (
    <>
      <main className={style.portfolioContainer}>
        <h1 className={style.title}>Portfolio</h1>
        <div className={style.projects}>
          <div className={style.projectCard}>
            <img
              src="/wwy.jpg"
              alt="Amogh's Great Website"
              className={style.image}
            />
            <div className={style.details}>
              <p className={style.name}>Amogh's Great Website</p>
              <p className={style.description}>
                This is my first website and I hope you enjoy it. I made it
                through HTML and the help of the Hack4Impact Starter Pack!
              </p>
              <a href="/" className={style.link}>Learn More</a> 
            </div>
          </div>

          <div className={style.projectCard}>
            <img
              src="/Olympicrings.png"
              alt="Olympic Rings Project"
              className={style.image}
            />
            <div className={style.details}>
              <p className={style.name}>Olympic Rings Project</p>
              <p className={style.description}>
                The goal of this project was to draw the American flag and the
                Olympic rings using Python. My code used the built-in turtle
                function to draw the flag.
              </p>
              <a href="https://github.com/Amogh76/Olympic_Rings" className={style.link}>Learn More</a> 
            </div>
          </div>

          <div className={style.projectCard}>
            <img
              src="/MortgageGUI.png"
              alt="Mortgage GUI Project"
              className={style.image}
            />
            <div className={style.details}>
              <p className={style.name}>Mortgage GUI Project</p>
              <p className={style.description}>
                For this project, I created a basic UI within the IDLE Shell
                that could calculate mortgage and compound interest using Python
                functions/libraries.
              </p>
              <a href="https://github.com/Amogh76/Mortgage-GUI" className={style.link}>Learn More</a> 
            </div>
          </div>

          <div className={style.projectCard}>
            <img
              src="/Figma.png"
              alt="Study Buddy App"
              className={style.image}
            />
            <div className={style.details}>
              <p className={style.name}>Study Buddy App</p>
              <p className={style.description}>
                For this project, I made an app that functions as a study buddy
                finder for introverted students who need help with their studies.
              </p>
              <a href="https://www.figma.com/proto/oxWwOXFNJELDARRafo1iHj/studybuddy" className={style.link}>Learn More</a> 
            </div>
          </div>
        </div>
      </main>
      <footer className={style.footer}>
        © 2024 Amogh's Great Website | All Rights Reserved
      </footer>
    </>
  );
};

export default Portfolio;
