import { ReactNode } from "react";

// src/blogData.ts
export interface Blog {
  text: ReactNode;
  posted: ReactNode;
  name: string; 
  slug: string;  
  description: string;
  image: string;
  image_alt: string; 
  date: Date; 
  content: string; 
  }


export const blogs: Blog[] = [
  {
    name: "My First Blog Post",
    slug: "my-first-blog-post",
    description: "This is the description of my first blog post.",
    image: "HappyFace.jpg",
    image_alt: "A happy face image",
    date: new Date("2024-11-19"),
    content: "This is the full content of the first blog post. Here we discuss interesting things about my journey.",
    text: undefined,
    posted: undefined
  },
  {
    name: "Exploring TypeScript",
    slug: "exploring-typescript",
    description: "This blog talks about my exploration with TypeScript.",
    image: "snoopy.jpg",
    image_alt: "A snoopy drawing",
    date: new Date("2024-11-20"),
    content: "Full content of my blog where I share my experiences with TypeScript.",
    text: undefined,
    posted: undefined
  },
];
