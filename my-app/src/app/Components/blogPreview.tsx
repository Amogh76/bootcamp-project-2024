import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "../blogData";
import style from "./blogPreview.module.css";

export default function BlogPreview({
  name,
  description,
  image,
  image_alt,
}: Blog) {
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <div className={style.blogContainer}>
        <h3>{name}</h3>
        <div className={style.blogContent}>
          <Image src={image} alt={image_alt} width={500} height={300} />
          <p>{description}</p>
        </div>
        <Link href={`/blog/${slug}`}>
          <button className={style.blogButton}>Read More</button>
        </Link>
      </div>
    </div>
  );
}
