// import Image from "next/image";
// import styles from "./page.module.css";
'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Skill from '@/components/Skill';
import Port from '@/components/Port';
import Contact from '@/components/Contact';
import Career from '@/components/Career';
import Smooth from '@/utils/smooth';
import link from '@/utils/link';

export default function Home() {
  useEffect(() => {
    Smooth();
    link();
  }, []);

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
          <Career />
        </main>
      </div>
    </>
  );
}
