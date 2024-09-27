"use client";

import React from "react";
import Image from "next/image";
import { project } from "@/constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper 컴포넌트와 Slide 컴포넌트

export default function Port() {
  return (
    <section id="Project" className="section__project">
      <h2 className="d-none">Projects</h2>
      <article className="title__group">
        <FontAwesomeIcon icon={faAddressCard} className="about__svg icon" />
        <h3>Projects</h3>
      </article>
      <article className="project__group">
        {project.map((proj, index) => (
          <div key={index} className="item__box">
            <div className="item_img_group">
              {/* Swiper 슬라이더 */}
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
              >
                {proj.img.map((image, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <Image
                      src={image}
                      alt={proj.alt}
                      width={500}
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="item_content_group">
              <h4>{proj.name}</h4>
              <p>{proj.content01}</p>
              <p>{proj.content02}</p>
              <p>{proj.content3}</p>
              <p>
                <strong>Participants:</strong> {proj.participants}
              </p>
              <p>
                <strong>Period:</strong> {proj.period}
              </p>
              <p>
                <strong>Function:</strong> {proj.function}
              </p>
              <p>
                <strong>Technologies:</strong> {proj.skill.join(", ")}
              </p>
              <a href={proj.url} target="_blank" rel="noopener noreferrer">
                URL: {proj.url}
              </a>
              <br />
              <a href={proj.url2} target="_blank" rel="noopener noreferrer">
                WEBDesign URL: {proj.url2}
              </a>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
