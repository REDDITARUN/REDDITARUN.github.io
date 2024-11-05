import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import blogData from './blogData'; // Import your static data file
import './Blog.css';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Words & Ideas</h2>

            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                loop
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    320: { slidesPerView: 1 },
                }}
            >
                {blogData.map((article, index) => (
                    <SwiperSlide key={index}>
                        <div className="blog__card">
                            <div className="blog__thumb">
                                <a href={article.url} target="_blank" rel="noopener noreferrer">
                                    <span className="blog__category">AI/ML</span>
                                </a>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">
                                    <img src={article.image} alt={article.title} className="blog__img" />
                                </a>
                            </div>
                            <div className="blog__details">
                                <h3 className="blog__title">{article.title}</h3>
                                <div className="blog__meta">
                                    <span className="blog__dot"></span>
                                    <span>Teen Different</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="blog__read-more">
                <button className="read-more-button">Read more on!</button>
                <div className="blog__buttons">
                    <a href="https://medium.com/@teendifferent/list/cyber-security-540a607eb47d" target="_blank" rel="noopener noreferrer" className="btn">Cyber Security</a>
                    <a href="https://medium.com/@teendifferent/list/ai-trends-9de2e58c4fe4" target="_blank" rel="noopener noreferrer" className="btn">Artificial Intelligence</a>
                    <a href="https://medium.com/@teendifferent/list/productivity-9d45905210a9" target="_blank" rel="noopener noreferrer" className="btn">Productivity</a>
                </div>
            </div>
        </section>
    );
};

export default Blog;
