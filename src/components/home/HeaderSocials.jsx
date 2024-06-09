import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev, FaMediumM,  } from 'react-icons/fa';
import { SiHashnode, SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.linkedin.com/in/tarunreddi/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn/>
            </a>

            <a href='https://github.com/REDDITARUN' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub/>
            </a>

            <a href='https://medium.com/@teendifferent' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaMediumM/>
            </a>

            <a href='https://leetcode.com/u/kiyotaka001/' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiLeetcode/>
            </a>


            <a href='https://x.com/_TeenDifferent' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaXTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
