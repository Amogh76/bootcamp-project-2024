// src/blogData.ts
export interface Blog {
  name: string;
  description: string;
  image: string; 
  posted: string;
  text: string;
}

export const blogs: Blog[] = [
  {
    name: "My First Blog Post",
    description: "This is the description of my first blog post.",
    image: "HappyFace.jpg", 
    posted: "November 19, 2024",
    text: "This is the full content of the first blog post. Here we discuss interesting things about my journey.",
  },
  {
    name: "Exploring TypeScript",
    description: "This blog talks about my exploration with TypeScript.",
    image: "snoopy.jpg", 
    posted: "November 20, 2024",
    text: "Full content of my blog where I share my experiences with TypeScript.",
  }
];
