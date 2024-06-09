import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/TRANS.png";
import LightLogo from "../../assets/TRANS.png";

import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiDraftLine,
    RiChat3Line,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri"; 

import { FaRegNewspaper } from "react-icons/fa6";
import { PiArticleMediumLight } from "react-icons/pi";
import { MdOutlineSchool } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";


const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    <img src={props.theme === 'light' ? LightLogo : Logo} alt="logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link" title="Home">
                                    <RiHome2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link" title="About Me">
                                    <RiUser3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#services" className="nav__link" title="Publications">
                                    <RiFileList3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#resume" className="nav__link" title="Experience">
                                    <RiBriefcase2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link" title="Projects">
                                    <RiStackLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#certificate" className="nav__link" title="Certifications">
                                    <PiCertificate />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#education" className="nav__link" title="Education">
                                    <MdOutlineSchool />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#blog" className="nav__link" title="Articles">
                                    <PiArticleMediumLight />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link" title="Get In Touch">
                                    <RiChat3Line />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button onClick={() => { props.switchTheme(); showMenu(!toggle) }} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
