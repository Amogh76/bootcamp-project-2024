import React from "react";
import { blogs } from "../../blogData";
import style from "./blogPage.module.css";

interface BlogPageProps {
  params: { blogId: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.name.toLowerCase().replace(/\s+/g, "-") === params.blogId);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className={style.blogPageContainer}>
      <h1>{blog.name}</h1>
      <p className={style.posted}>{blog.posted}</p>
      <img src={`/${blog.image}`} alt={blog.name} />
      <p>{blog.text}</p>

      <footer className={style.footer}>
        © 2024 Amogh's Great Website | All Rights Reserved
      </footer>
    </div>
  );
}
