import React from "react";
import BlogPreview from "../Components/blogPreview"; 
import Blog from "../database/blogSchema"; 
import connectDB from "../database/db";  

const blogs = [
  {
    name: "My First Blog Post",
    description: "This is the description of my first blog post.",
    image: "/Devious.jpg",
    image_alt: "A devious illustration",
    posted: "November 16, 2024",
    date: new Date("2024-11-16"), 
    content: "Full content of the first blog post",
    slug: "my-first-blog-post",
    text: "Read More",
  },
  {
    name: "Exploring TypeScript",
    description: "This is the description of my blog about exploring TypeScript.",
    image: "/Thinking.png",
    image_alt: "A thoughtful illustration",
    posted: "November 16, 2024",
    date: new Date("2024-11-16"), 
    content: "Full content of the TypeScript blog",
    slug: "exploring-typescript",
    text: "Read More",
  },
];

async function getBlogs() {
  await connectDB();  
  
  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    return null;
  }
}

export default function BlogPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", margin: "20px 0", color: "white" }}>
        Blogs
      </h1>
      <div>
        {blogs.map((blog, index) => (
          <BlogPreview key={index} {...blog} />
        ))}
      </div>

      <footer style={{ textAlign: "center", backgroundColor: "#333", color: "white", padding: "10px 0", marginTop: "40px" }}>
        © 2024 Amogh's Great Website | All Rights Reserved
      </footer>
    </div>
  );
}