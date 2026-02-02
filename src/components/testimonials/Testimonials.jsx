import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Jane Smith',
        review: 'Daniel delivered our project on time and exceeded expectations. His React and Next.js skills are top-notch. Highly recommended for any serious business.',
        title: 'CTO, Acme Corp',
    },
    {
        avatar: AVTR2,
        name: 'John Doe',
        review: 'Professional, communicative, and highly skilled. Our dashboard app is now blazing fast and beautiful. Will hire again!',
        title: 'Product Manager, FinTechX',
    },
    {
        avatar: AVTR3,
        name: 'Aisha Bello',
        review: 'Daniel was a pleasure to work with. He brought our vision to life and made the site truly responsive. Great attention to detail.',
        title: 'Founder, Rise Africa',
    },
    {
        avatar: AVTR4,
        name: 'Michael Lee',
        review: 'The best freelance developer I have worked with. Excellent code quality and business understanding.',
        title: 'Lead Engineer, HealthTech Pro',
    }
]

const Testimonials = () => {
  return (
      <section id='testimonials'>
          <h5>What Clients Say</h5>
          <h2>Testimonials</h2>

          <Swiper
              className="container testimonials__container fade-in"
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={40}
              slidesPerView={1}
          >
              {
                data.map(({ avatar, name, review, title }, index) => (
                  <SwiperSlide key={index} className="testimonial">
                        <div className="client__avatar">
                            <img src={avatar} alt={name} />
                        </div>
                        <h5 className='client__name'>{name}</h5>
                        <p className="testimonial__title">{title}</p>
                        <small className="client__review">“{review}”</small>
                  </SwiperSlide>
                ))
              }
          </Swiper>
      </section>
  )
}

export default Testimonials