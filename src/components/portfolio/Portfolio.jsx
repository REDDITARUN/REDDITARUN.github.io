import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import Menu from "./Menu";
import { RiGithubLine, RiLink } from "react-icons/ri";
import { motion } from "framer-motion";
import { GoPlusCircle } from "react-icons/go";
import { FaPlus  } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { PiArticleMediumLight } from "react-icons/pi";

const Portfolio = () => {
    const initialFilter = "AI/ML/RL";
    const [items, setItems] = useState([]);
    const [activeFilter, setActiveFilter] = useState(1);

    useEffect(() => {
        // Initial filter set to "AI/ML/RL"
        const initialItems = Menu.filter((curElem) => curElem.category.includes(initialFilter));
        setItems(initialItems);
    }, []);

    const filterItems = (categoryItem) => {
        if (categoryItem === "All") {
            setItems(Menu);
        } else {
            const updatedItems = Menu.filter((curElem) => curElem.category.includes(categoryItem));
            setItems(updatedItems);
        }
    };

    return (
        <section className="portfolio container section" id="portfolio">
            <h2 className="section__title">My Art</h2>

            <div className="portfolio__filters">
                <span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("AI/ML/RL"); setActiveFilter(1) }}>
                    AI/ML/RL
                </span>
                <span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Cyber Security"); setActiveFilter(2) }}>
                    Cyber Security
                </span>
                <span className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("General"); setActiveFilter(3) }}>
                    General
                </span>
                <span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("All"); setActiveFilter(0) }}>
                    All
                </span>
            </div>

            <div className="portfolio__container grid">
                {items.map((elem) => {
                    const { id, image, title, description, category, url, repositoryUrl } = elem;

                    return (
                        <motion.div
                            layout
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="portfolio__card"
                            key={id}>
                            <div className="portfolio__thumbnail">
                                <img src={image} alt="" className="portfolio__img" height="267" />
                                <div className="portfolio__mask">
                                    <span className="portfolio__category">{category.join(', ')}</span>
                                    <h3 className="portfolio__title">{title}</h3>
                                    <p className="portfolio__description">{description}</p>
                                    {elem.skills && (
                                        <div className="portfolio__skills">
                                            <h4>Skills/Tech Used:</h4>
                                            <ul>
                                                {elem.skills.map((skill, index) => (
                                                    <li key={index}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="portfolio__buttons">
                                        {url && (
                                            <a href={url} target="_blank" rel="noreferrer" className="portfolio__button">
                                                <PiArticleMediumLight className="portfolio__button-icon" />
                                            </a>
                                        )}
                                        <a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button">
                                            <FaGithub  className="portfolio__button-icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
