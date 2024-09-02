"use client";

import React from "react";
import { about } from "@/constants/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
// import { faAddressCard } from '@fortawesome/free-solid-svg-icons'; solid 전용 cdn

export default function About() {

    return (
        <section className="section section__about">
            <h2 className="d-none">About Me</h2>
            <article className="title__group">
                <FontAwesomeIcon icon={faAddressCard} className="about__svg" />
                <h3>About Me</h3>
            </article>
            <article className="group">
                {about.map((about, key) => (
                    <dl key={key}>
                        <dt>{about.title}</dt>
                        <dd>{about.info}</dd>
                    </dl>
                ))}
            </article>
        </section>
    )
}