"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
    useEffect(() => {
        // 클라이언트 측에서만 실행됨
        const ani1 = gsap.timeline();
        console.log(ani1);
        
        // 기본 상태 설정
        gsap.set("#section__intro .t1", { autoAlpha: 1, y: 0 });
        gsap.set("#section__intro .t2", { autoAlpha: 0, y: 50 });

        ani1.to("#section__intro .t1", { autoAlpha: 0, duration: 1, y: -50 })
            .to("#section__intro .t2", { autoAlpha: 1, duration: 1, y: 0 }, "+=1")
            .to("#section__intro .t2", { autoAlpha: 0, duration: 1, y: 50 })
            .to("#section__intro .t1", { autoAlpha: 1, duration: 1, y: 0 }, "+=1");

        ScrollTrigger.create({
            animation: ani1,
            trigger: "#section__intro",
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            markers: false,
        });

        return () => {
            // Clean up ScrollTrigger instance on unmount
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
        
    }, []);

  return (
    <div id="section__intro">
      <div className="intro__group">
          <div className="first__txt_group t1">
            <h2 className="greeting_text">안녕하세요!</h2>
            <h3 className="sub_text">Newcomer Front-End Developer 이장희입니다.</h3>
          </div>
          <div className="second__txt_group t2">
            <h2 className="greeting_text">Front-End 개발자 이장희입니다.</h2>
            <h3 className="sub_text">웹 퍼블리셔 경험을 토대로 기본에 충실해지고 그 경험들을 바탕으로 프론트엔드 개발자로 꾸준이 노력하여 성장하고 싶은 신입 개발자입니다.</h3>
            <a href="#About">About</a>
          </div>
          <div className="scroll__group">
            <span className="scroll">스크롤</span>
            <span className="sub_txt">스크롤을 내려주세요!</span>
          </div>
        </div>
    </div>
  );
}
