import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.png';
import Image2 from '../../assets/service-2.png';
import Image3 from '../../assets/service-3.png';
import { FaLink } from 'react-icons/fa';

const data = [
    {
        id: 1,
        image: Image1,
        title: "Comprehensive Examination of Email Spoofing: Issues and Prospects for Email Security",
        description: "• Leveraged SMTP analysis, demographic impact studies, and malware distribution methods using cybersecurity tools. \n • Provided structured analysis in 12 sections covering various aspects of email security. \n• Offered 11 mitigation best practices to enhance email security and reduce threats.",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0167404823005102" // Add the link for the publication
    },
    {
        id: 2,
        image: Image2,
        title: "Prioritized Approach for Reducing Waiting Time in Traffic ",
        description: "• Proposed an AI-driven traffic control system. \n • To optimize traffic flow and reduce waiting times. \n• Utilizes deep learning, real-time traffic and weather data, and created a dynamic priority index for traffic signal adjustments.",
        link: "https://drive.google.com/file/d/1IQ3j91zaaRp2M9RS5U5Rp3WhA4LOSnRN/view" // Add the link for the publication
    },
    {
        id: 3,
        image: Image3,
        title: "Mapping Crime Dynamics: Integrating Textual, Spatial, and Temporal Perspectives [In progress]",
        description: "• Conducted comprehensive data driven crime analysis.\n• Employed machine learning algorithms for classification and hotspot clustering, using LDA for topic modeling and LSTM for temporal analysis, combined with spatial data techniques like BIRCH and Mini Batch KMeans.",
        // link: "https://example.com/publication3" // Add the link for the publication
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Publications</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description, link }) => (
                    <div className="services__card" key={id}>
                        <img src={image} alt="" className="services__img" />

                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                        
                        <a href={link} className="services__link-button" target="_blank" rel="noopener noreferrer">
                            <FaLink />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
