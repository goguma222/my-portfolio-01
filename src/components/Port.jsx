"use client";

import React from "react";
import Image from "next/image";
import { skills } from "@/constants/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

export default function Port() {

    return (
        <section id="Project" className="section__project">
            <h2 className="d-none">Skill</h2>
            <article className="title__group">
                <FontAwesomeIcon icon={faAddressCard} className="about__svg icon" />
                <h3>Project</h3>
            </article>
        </section>
    )
}