import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.webp';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox'; 

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                    <p className="about__description">
                    Hello! I am currently a Master's student at the University at Buffalo, pursuing a degree in Computer Science. 
                    I completed my Bachelor's in Computer Science from VIT AP, India.
                    <br /><br />
                    My journey in AI is driven by a passion to tackle real-world challenges through innovative solutions. 
                    Currently, I am deeply engaged in researching how AI can be leveraged to prevent crime and enhance the safety of autonomous vehicles.
                    This work has been both thrilling and impactful, constantly pushing the boundaries of what AI can achieve.
                    <br /><br />
                    I am dedicated to leveraging AI technology to make a significant impact, continually exploring new possibilities and striving to expand the frontiers of what's possible.
                    <br /><br />
                    Here are some key areas I have worked with::
                    </p>

                    <ul className="about__list">
                            <li><b>AI/ML & Deep Learning:</b> YOLO, BART, T5, CNNs, RNNs, LSTMs, Autoencoders</li>
                            <li><b>Reinforcement Learning:</b> Q-learning, DQN, PPO, A2C, SARSA, OpenAI Gym</li>
                            <li><b>Predictive Modeling:</b> Linear/Logistic Regression, Decision Trees, XGBoost, ANN, EfficientNet</li>
                            <li><b>Web Development:</b> Flask, Django, ReactJS, HTML, CSS</li>
                            <li><b>Cloud & Database:</b> AWS, GraphQL, PostgreSQL, DynamoDB</li>
                            <li><b>Cybersecurity:</b> Intune, MFA, RBAC, CrowdSec</li>
                    </ul>

                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
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