import React from "react";
import BlogPreview from "../Components/blogPreview"; // Adjust path as needed

const blogs = [
  {
    name: "My First Blog Post",
    description: "This is the description of my first blog post.",
    image: "/Devious.jpg",
    posted: "November 16, 2024",
    text: "Read More",
  },
  {
    name: "Exploring TypeScript",
    description: "This is the description of my blog about exploring TypeScript.",
    image: "/Thinking.png",
    posted: "November 16, 2024",
    text: "Read More",
  },
];

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

      {/* Footer added here */}
      <footer style={{ textAlign: "center", backgroundColor: "#333", color: "white", padding: "10px 0", marginTop: "40px" }}>
        © 2024 Amogh's Great Website | All Rights Reserved
      </footer>
    </div>
  );
}
