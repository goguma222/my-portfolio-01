'use client';

import React from 'react';
import Image from 'next/image';
import { skills, SkillPercentage } from '@/constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
// import { faAddressCard } from '@fortawesome/free-solid-svg-icons'; solid 전용 cdn
import SkillProgressBar from '@/components/SkillProgressBar';

export default function Skill() {
  return (
    <section id="Skill" className="section__skill">
      <h2 className="d-none">Skill</h2>
      <article className="title__group">
        <FontAwesomeIcon icon={faAddressCard} className="about__svg icon" />
        <h3>Skill</h3>
      </article>
      <article className="logo__group skill_logo_group">
        <ul>
          {SkillPercentage.map((percentage, index) => (
            <li className="logo__list" key={index}>
              <Image
                src={percentage.img}
                alt={percentage.name}
                style={{ width: '100%', height: 'auto' }}
              />
              <span className="percentage">{percentage.percentage}%</span>
            </li>
          ))}
        </ul>
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
  );
}
