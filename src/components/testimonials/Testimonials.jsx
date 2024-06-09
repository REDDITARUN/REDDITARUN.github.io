import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/VIT-AP_University_seal.png'
import Image4 from '../../assets/UB_Stacked_Small.png'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "University at Buffalo",
			subtitle: "Masters in Computer Science - AI/ML Track | CGPA: 3.8",
			comment: "Featured as a presenter at CSE Demo Day in Fall 2023 and Spring 2024, I am actively involved in groundbreaking research under a distinguished professor, solving real-world problems, and will commence my TA position starting Fall 2024.",
		},
		{
			id: 2,
			image: Image3,
			title: "Vellore Institute of Technology",
			subtitle: "B.Tech in Computer Science - specialization in Network & Security | CGPA: 8.7",
			comment: "During my B.Tech at VIT-AP University, I led pivotal research on email spoofing, published in 'Computers & Security' (Feb 2024), revealing key vulnerabilities. Concurrently, as Creative Team Lead for the Android and Melange Clubs, I merged functionality with visual and cultural appeal in various projects. My tenure was a dynamic blend of innovation and leadership.",
		},
	];

	return (
		<section className="testimonials container section" id = "education">

			<h2 className="section__title">Education</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials