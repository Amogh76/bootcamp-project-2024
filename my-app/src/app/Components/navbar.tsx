import React from "react";
import style from "./navbar.module.css"; 
import Link from "next/link"; 

export default function Navbar() {
  return (
    <header className={style.navbar}> 
      <h1 className={style.logo}>
        <Link href="/">Amogh&apos;s Great Website</Link>  
      </h1>
      <nav>
        <ul className={style["nav-list"]}> 
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blogs">Blog</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
