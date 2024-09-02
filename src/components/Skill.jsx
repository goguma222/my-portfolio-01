"use client";

import React from "react";
import { skills } from "@/constants/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
// import { faAddressCard } from '@fortawesome/free-solid-svg-icons'; solid 전용 cdn
import SkillProgressBar from "@/components/SkillProgressBar";

export default function Skill() {

    return (
        <section id="Skill" className="section__skill">
            <h2 className="d-none">Skill</h2>
            <article className="title__group">
                <FontAwesomeIcon icon={faAddressCard} className="about__svg icon" />
                <h3>Skill</h3>
            </article>
            <article className="progressbar__group">
                {skills.map((item, index) => (
                    <SkillProgressBar 
                    key={index} 
                    skill={item.skill} 
                    percentage={item.percentage} 
                    />
                ))}
            </article>
        </section>
    )
}