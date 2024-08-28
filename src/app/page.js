// import Image from "next/image";
// import styles from "./page.module.css";
"use client";

import { Routes, Route } from "react-router-dom";
import Header from "@/component/header";
import Intro from "@/component/Intro";
import Skill from "@/component/Skill";
import Prot from "@/component/Port";
import Site from "@/component/Site";
import Skip from "@/component/Skip";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";


export default function Home() {
  return (
    <div className="root">
      <Header />
    </div>
  );
}
