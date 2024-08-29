// import Image from "next/image";
// import styles from "./page.module.css";
"use client";

import { Routes, Route } from "react-router-dom";
import Header from "@/component/header";
import Intro from "@/component/Intro";
import About from "@/component/About";
import Skill from "@/component/Skill";
import Port from "@/component/Port";
import Contact from "@/component/Contact";


export default function Home() {
  return (
    <div className="root">
      <Header />
    </div>
  );
}
