import React from 'react'
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';
import { RiPagesLine } from "react-icons/ri";
import { GoRepo } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { FaMedapps } from "react-icons/fa6";


const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiPagesLine className='about__icon' />

                <div>
                    <h3 className="about__title">56+</h3>
                    <span className="about__subtitle">Published Articles</span>
                </div>
            </div>

            <div className="about__box">
                <GoRepo className='about__icon' />

                <div>
                    <h3 className="about__title">47+</h3>
                    <span className="about__subtitle">Github Repositories</span>
                </div>
            </div>

            <div className="about__box">
                <FaMedapps className='about__icon' />

                <div>
                    <h3 className="about__title">20+</h3>
                    <span className="about__subtitle">Innovative Projects</span>
                </div>
            </div>

            <div className="about__box">
                <RiGroupLine className='about__icon' />

                <div>
                    <h3 className="about__title">450+</h3>
                    <span className="about__subtitle">Medium Subscribers</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox