import React from "react";
import Link from "next/link";
import Image from "next/image";
import connectDB from "@/app/database/db";
import Project from "@/app/database/projectSchema";
import styles from "./portfolio.module.css";

async function getProjects() {
  await connectDB();
  try {
    const projects = await Project.find().sort({ date: -1 }).orFail();
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>My Portfolio</h1>

      <div className={styles.projectList}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div className={styles.projectItem} key={project.slug}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Link href={`/portfolio/${project.slug}`}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src={project.image}
                    alt={project.image_alt || "Project image"}
                    width={800}
                    height={500}
                    className={styles.projectImage}
                    priority
                  />
                </div>
              </Link>
              <p>
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </p>
            </div>
          ))
        ) : (
          <p className={styles.noProjectsMessage}>No projects found.</p>
        )}
      </div>
    </div>
  );
}
