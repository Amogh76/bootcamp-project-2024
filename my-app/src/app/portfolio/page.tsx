import React from "react";
import Navbar from "../Components/navbar";
import style from "./portfolio.module.css";
import { portfolio } from "../portfolioData"; // Adjust the path as needed

const Portfolio: React.FC = () => {
  return (
    <>
      <main className={style.portfolioContainer}>
        <h1 className={style.title}>Portfolio</h1>
        <div className={style.projects}>
          {portfolio.map((project) => (
            <div className={style.projectCard} key={project.name}>
              <img
                src={`/${project.image}`}
                alt={project.image_alt}
                className={style.image}
              />
              <div className={style.details}>
                <p className={style.name}>{project.name}</p>
                <p className={style.description}>{project.description}</p>
                <a href={project.link} className={style.link}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className={style.footer}>
        © 2024 Amogh's Great Website | All Rights Reserved
      </footer>
    </>
  );
};

export default Portfolio;
