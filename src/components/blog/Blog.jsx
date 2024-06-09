import React from 'react';
import './Blog.css';

import Image1 from '../../assets/Projects/Medium1.webp';
import Image2 from '../../assets/Projects/Medium2.webp';
import Image3 from '../../assets/Projects/Medium3.webp';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Insights & Articles</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/predict/beyond-deep-learning-how-meta-learning-unlocks-powerful-ai-745c481980a1" target="_blank" rel="noopener noreferrer">
                            <span className="blog__category">AI/ML</span>
                        </a>
                        <a href="https://medium.com/predict/beyond-deep-learning-how-meta-learning-unlocks-powerful-ai-745c481980a1" target="_blank" rel="noopener noreferrer">
                            <img src={Image1} alt="" className='blog__img' />
                        </a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Beyond Deep Learning: How Meta-Learning Unlocks Powerful AI</h3>
                        <div className="blog__meta">
                            <span>13 April, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Teen Different</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/predict/simplifying-object-detection-annotate-your-custom-dataset-with-grounding-dino-148576d497da" target="_blank" rel="noopener noreferrer">
                            <span className="blog__category">AI/ML</span>
                        </a>
                        <a href="https://medium.com/predict/simplifying-object-detection-annotate-your-custom-dataset-with-grounding-dino-148576d497da" target="_blank" rel="noopener noreferrer">
                            <img src={Image2} alt="" className='blog__img' />
                        </a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Auto-Annotate Your Custom Dataset with Grounding DINO</h3>
                        <div className="blog__meta">
                            <span>30 March, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Teen Different</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/predict/beyond-deep-learning-how-meta-learning-unlocks-powerful-ai-745c481980a1" target="_blank" rel="noopener noreferrer">
                            <span className="blog__category">AI/ML</span>
                        </a>
                        <a href="https://medium.com/predict/beyond-deep-learning-how-meta-learning-unlocks-powerful-ai-745c481980a1" target="_blank" rel="noopener noreferrer">
                            <img src={Image3} alt="" className='blog__img' />
                        </a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Beyond Deep Learning: How Meta-Learning Enables Efficient AI</h3>
                        <div className="blog__meta">
                            <span>13 April, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Teen Different</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog__read-more">
                <button className="read-more-button">Read more on!</button>
                <div className="blog__buttons">
                    <a href="https://medium.com/@teendifferent/list/cyber-security-540a607eb47d?source=my_lists---------5-------540a607eb47d---------------------" target="_blank" rel="noopener noreferrer" className="btn">Cyber Security</a>
                    <a href="https://medium.com/@teendifferent/list/ai-trends-9de2e58c4fe4?source=my_lists---------2-------9de2e58c4fe4---------------------" target="_blank" rel="noopener noreferrer" className="btn">Artificial Intelligence</a>
                    <a href="https://medium.com/@teendifferent/list/productivity-9d45905210a9?source=my_lists---------4-------9d45905210a9---------------------" target="_blank" rel="noopener noreferrer" className="btn">Productivity</a>
                </div>
            </div>
        </section>
    )
}

export default Blog;
