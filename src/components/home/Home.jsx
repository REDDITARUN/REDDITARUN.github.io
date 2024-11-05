import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.webp';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (

        
        <section className="home container" id='home'>

            <Shapes />

            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Tarun Reddi</h1>
                <span className="home__education">AI/ML Researcher - Grad Student - Writer</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Let's Connect</a>

                <ScrollDown />
            </div>

            
        </section>
    )
}

export default Home