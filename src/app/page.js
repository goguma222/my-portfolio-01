// import Image from "next/image";
// import styles from "./page.module.css";
"use client";
import Link from "next/link";
import Header from "@/components/header";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Port from "@/components/Port";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <div className="root">
        <Header />
        <main className="main">
          <Intro />
          <About />
          <Skill />
          <Port />
          <Contact />
        </main>
      </div>
    </>
  );
}
