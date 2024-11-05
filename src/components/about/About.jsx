import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.webp';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox'; 
import { PiX } from 'react-icons/pi';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">A Little About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                    <p className="about__description">
                    Hello there!
                    Meet a Computer Science master’s student at the University at Buffalo who’s obsessed with pushing boundaries through AI and ML.  Learning and creating aren’t just part of the grind, they’re my fuel. I’m always experimenting, spinning up projects, and sharing what I discover, always aiming to solve problems in ways that make people think, “Well, that’s different!”
                    <br /><br />
                    Right now, I’m developing tech to help visually impaired folks navigate with real-time visual cues, and I’m building a smart road safety system that detects traffic cues and distances to keep drivers alert. If you’re into big ideas with a twist or have a project that needs a fresh perspective, let’s connect - let’s make something awesome (and maybe a little unexpected).😁
                    </p>

                    {/* <ul className="about__list">
                            <li><b>AI/ML & Deep Learning:</b> YOLO, BART, T5, CNNs, RNNs, LSTMs, Autoencoders</li>
                            <li><b>Reinforcement Learning:</b> Q-learning, DQN, PPO, A2C, SARSA, OpenAI Gym</li>
                            <li><b>Predictive Modeling:</b> Linear/Logistic Regression, Decision Trees, XGBoost, ANN, EfficientNet</li>
                            <li><b>Web Development:</b> Flask, Django, ReactJS, HTML, CSS</li>
                            <li><b>Cloud & Database:</b> AWS, GraphQL, PostgreSQL, DynamoDB</li>
                            <li><b>Cybersecurity:</b> Intune, MFA, RBAC, CrowdSec</li>
                    </ul> */}

                        {/* <button className="btn" onClick={downloadResume}>View My Resume</button> */}
                        <a href="#contact" className="btn" >Jump to Connect</a>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About