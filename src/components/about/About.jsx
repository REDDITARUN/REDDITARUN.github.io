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
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                    <p className="about__description">
                    Hello there!
                    I am a Computer Science grad from UB. It's been an exciting journey, highlighted by the opportunity to showcase projects at two consecutive Demo Days, landing in the top 10 each time.
                    <br /><br />
                    You know that feeling when you learn something new and your brain goes, "Wait, how can we use this?" That's me, all the time. Lately, I've been diving into Reinforcement Learning (RL) and can't stop thinking about using it to teach a robot to navigate my mobile. The state space is huge, but that's what makes it fun, right? So I'm working on it 😁
                    <br /><br />
                    When I'm not neck-deep in neural nets or tweaking algorithms, I'm usually sharing my latest "Woah!" moments on my blog or tinkering with some design projects. Because I love creative designs - who doesn't?
                    <br /><br />
                    I bet you've got some exciting ideas brewing too. What's got you curious lately? Let's connect and brainstorm - who knows what we might come up with together! 
                    
                    </p>

                    {/* <ul className="about__list">
                            <li><b>AI/ML & Deep Learning:</b> YOLO, BART, T5, CNNs, RNNs, LSTMs, Autoencoders</li>
                            <li><b>Reinforcement Learning:</b> Q-learning, DQN, PPO, A2C, SARSA, OpenAI Gym</li>
                            <li><b>Predictive Modeling:</b> Linear/Logistic Regression, Decision Trees, XGBoost, ANN, EfficientNet</li>
                            <li><b>Web Development:</b> Flask, Django, ReactJS, HTML, CSS</li>
                            <li><b>Cloud & Database:</b> AWS, GraphQL, PostgreSQL, DynamoDB</li>
                            <li><b>Cybersecurity:</b> Intune, MFA, RBAC, CrowdSec</li>
                    </ul> */}

                        <button className="btn" onClick={downloadResume}>View My Resume</button>
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