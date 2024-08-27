import Link from 'next/link';
import React, { useState } from 'react';
import { headerNav } from "@/constants/index";

const Header = () => {

    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        // setShow가 true이면 false값 반환, false이면 true값 반환
        setShow((prevShow) => !prevShow);
    }

    return (
        <header id='header' role='banner'>
            <div className='header__inner'>
                <div className="header__logo">
                    <h1>
                        <Link href="/">portfolio<em>janghee</em></Link>
                        </h1>
                </div>
                <nav className={`header__nav ${show ? "show" : ""}`} role='navigation' aria-label='메인 메뉴'>
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__nav__mobile" id='headerToggle' aria-controls='primary-menu' aria-expanded={show ? "true" : "false"} role='button' tabIndex='0' onClick={toggleMenu}>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;
