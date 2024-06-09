import React from 'react';
import './Certificate.css';

const Certificate = () => {
    return (
        <section className="blog container section" id="certificate">
            <h2 className="section__title">Skill Badges & Certifications</h2>

            <div className="blog__container grid">

                <div className="blog__card">
                    <a href="https://coursera.org/share/9fec051cc3c6dd46875a901a2e603da4" target="_blank" rel="noopener noreferrer">
                        <div className="blog__details">
                            <h3 className="blog__title">Identifying Security Vulnerabilities</h3>
                            <div className="blog__meta">
                                <span>Jan 8, 2023</span>
                                <span className="blog__dot">.</span>
                                <span>UC Davis</span>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="blog__card">
                    <a href="https://coursera.org/share/74f767e06ab8a045e8236a38933ee9d2" target="_blank" rel="noopener noreferrer">
                        <div className="blog__details">
                            <h3 className="blog__title">Foundations of User Experience (UX) Design</h3>
                            <div className="blog__meta">
                                <span>July 7, 2022</span>
                                <span className="blog__dot">.</span>
                                <span>Google</span>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="blog__card">
                    <a href="http://ude.my/UC-0022ccfd-672e-41bc-9811-30f5d7efce83" target="_blank" rel="noopener noreferrer">
                        <div className="blog__details">
                            <h3 className="blog__title">DART: The Beginners Course</h3>
                            <div className="blog__meta">
                                <span>July 31, 2021</span>
                                <span className="blog__dot">.</span>
                                <span>UDEMY</span>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="blog__card">
                    <a href="https://coursera.org/share/8bb6e2a480b5cf0777ea750c55077075" target="_blank" rel="noopener noreferrer">
                        <div className="blog__details">
                            <h3 className="blog__title">The Bits and Bytes of Computer Networking</h3>
                            <div className="blog__meta">
                                <span>June 14, 2020</span>
                                <span className="blog__dot">.</span>
                                <span>Coursera</span>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="blog__card">
                    <a href="https://www.cloudskillsboost.google/public_profiles/dbe83bc2-fc49-42a2-bea2-9e3e7274e26d" target="_blank" rel="noopener noreferrer">
                        <div className="blog__details">
                            <h3 className="blog__title">Google Cloud Essentials</h3>
                            <div className="blog__meta">
                                <span>Aug 2, 2019</span>
                                <span className="blog__dot">.</span>
                                <span>Google</span>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="blog__card">
                    <a href="https://www.cloudskillsboost.google/public_profiles/6fd3174f-faaa-4de2-88a0-49656c0a95d0" target="_blank" rel="noopener noreferrer">
                        <div className="blog__details">
                            <h3 className="blog__title">Create and Manage Cloud Resources</h3>
                            <div className="blog__meta">
                                <span>October 4, 2020</span>
                                <span className="blog__dot">.</span>
                                <span>Google</span>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="blog__card">
                    <a href="https://www.hackerrank.com/certificates/a9a454570368" target="_blank" rel="noopener noreferrer">
                        <div className="blog__details">
                            <h3 className="blog__title">Java</h3>
                            <div className="blog__meta">
                                <span>December 18, 2021</span>
                                <span className="blog__dot">.</span>
                                <span>HackerRank</span>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Certificate;
