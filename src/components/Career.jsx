"use client";

import Image from "next/image";
import { myCareer, JobDetails } from "@/constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

export default function Career() {
  return (
    <section id="Career" className="section__career">
      <h2 className="d-none">Contact</h2>
      <article className="title__group">
        <FontAwesomeIcon icon={faAddressCard} className="about__svg icon" />
        <h3>Contact</h3>
      </article>
      <article className="content">
        <div className="inner_group">
          <div className="logo_box">
            <Image
              src={myCareer.img}
              alt={myCareer.alt}
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="info_group">
            <h4 className="company_name">{myCareer.name}</h4>
            <span className="period">
              <em>제작기간 : </em>
              {myCareer.period}
            </span>
            <p className="description">
              <em>회사소개 : </em>
              {myCareer.content}
            </p>
            <p className="job">
              <em>담당업무 : </em>
              {myCareer.job}
            </p>
            {JobDetails.map((details, idx) => (
              <div className={`details${idx + 1}`} key={idx}>
                <h5 className="pj_name">{details.name}</h5>
                <span className="pj_period"><em>제작기간 : </em>{details.period}</span>
                <p className="pj_content"><em>프로젝트 설명 : </em>{details.content}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
