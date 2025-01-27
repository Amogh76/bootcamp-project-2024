import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./blogPreview.module.css";

export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export default function BlogPreview({
  title,
  description,
  image,
  imageAlt,
  slug,
}: Blog) {
  return (
    <div className={styles.blogPreview}>
      <h3>{title}</h3>
      <Image src={image} alt={imageAlt} width={500} height={300} />
      <p>{description}</p>
      <Link href={`/blogs/${slug}`}>Read More</Link> 
    </div>
  );
}