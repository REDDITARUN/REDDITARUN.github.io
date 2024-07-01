import React from 'react';
import './Skills.css';
import { FaChevronDown } from 'react-icons/fa';  // Importing the icon from react-icons

const skillData = [
    {
        id: 1,
        title: "Programming",
        skills: ["Python", "Java", "C/C++", "R", "SQL", "JavaScript", "HTML", "CSS", "PHP"]
    },
    {
        id: 2,
        title: "Tools",
        skills: ["Git", "Docker", "AWS", "PySpark", "Linux", "Figma", "Illustrator", "Premiere Pro"]
    },
    {
        id: 3,
        title: "Frameworks",
        skills: ["Flutter", "Hadoop", "MapReduce", "Django", "Flask", "ReactJS", "Node.js"]
    },
    {
        id: 4,
        title: "Libraries",
        skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Seaborn", "Plotly", "Spacy", "NLTK", "OpenCV", "Gensim", "Open AI Gymnasium"]
    },
    {
        id: 5,
        title: "Soft Skills",
        skills: ["Attention to detail", "Adaptability", "Effective Communication", "Team Collaboration", "Problem-solving"] 
    },
    {
        id: 6,
        title: "Practices",
        skills: ["Model Inference Optimization", "LLM Integration", "State Space Analysis", "Temporal Difference Learning", "Performance Monitoring", "Error Analysis"]
    }
];

const Skills = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills</h2>

            <div className="skills__container grid">
                {skillData.map(({ id, title, skills }) => (
                    <div className="skill__card" key={id}>
                        <h3 className="skill__title">
                            {title}
                            <FaChevronDown className="skill__icon" /> {/* Adding the icon */}
                        </h3>
                        <ul className="skill__content">
                            {skills.map((skill, index) => (
                                <li key={index} className="skill__description">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
