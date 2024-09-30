'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: 'lwh1747@naver.com',
    title: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('폼 제출', formData);

    const mailtoLink = `mailto:lwh1747@naver.com?subject=${encodeURIComponent(
      formData.title
    )}&body=${encodeURIComponent(`Name: ${formData.name}\n\nMessage: ${formData.message}`)}`;

    // 새로운 창에서 메일 클라이언트를 열도록 설정
    window.location.href = mailtoLink;

    setFormData({
      name: '',
      email: 'lwh1747@naver.com',
      title: '',
      message: '',
    });
  };
  return (
    <>
      <section id="Contact" className="section__contact">
        <h2 className="d-none">Contact</h2>
        <article className="title__group">
          <FontAwesomeIcon icon={faAddressCard} className="about__svg icon" />
          <h3>Contact</h3>
        </article>
        <article className="form__group">
          <form
            action="MAILTO:lwh1747@naver.com"
            method="post"
            encType="text/plain"
            name="form_mail"
            id="form_mail"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="이름"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="이메일주소"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData.target.value })}
            />
            <input
              type="text"
              name="title"
              id="title"
              placeholder="제목"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <textarea
              name="massage"
              id="massage"
              placeholder="메시지를 입력해주세요."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <button type="submit">보내기</button>
          </form>
        </article>
      </section>
    </>
  );
}
