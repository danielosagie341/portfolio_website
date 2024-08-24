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
        name: 'Elizabeth Owoha',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime quasi voluptatem id officia maiores sint labore ex mollitia eius, vel accusantium, sapiente recusandae. Perspiciatis tempore exercitationem impedit distinctio eius!',
    },
    {
        avatar: AVTR2,
        name: 'Elizabeth Owoha',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime quasi voluptatem id officia maiores sint labore ex mollitia eius, vel accusantium, sapiente recusandae. Perspiciatis tempore exercitationem impedit distinctio eius!',
    },
    {
        avatar: AVTR3,
        name: 'Elizabeth Owoha',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime quasi voluptatem id officia maiores sint labore ex mollitia eius, vel accusantium, sapiente recusandae. Perspiciatis tempore exercitationem impedit distinctio eius!',
    },
    {
        avatar: AVTR4,
        name: 'Elizabeth Owoha',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime quasi voluptatem id officia maiores sint labore ex mollitia eius, vel accusantium, sapiente recusandae. Perspiciatis tempore exercitationem impedit distinctio eius!',
    }
]

const Testimonials = () => {
  return (
      <section id='testimonials'>
          <h5>Review from clients and employers</h5>
          <h2>Testimonials</h2>

          <Swiper
              className="container testimonials__container"
              // install Swiper modules
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={40}
                slidesPerView={1}
            >
                {
                  data.map(({ avatar, name, review }, index) => {
                      return (
                          <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                              <h5 className='client__name'>{name}</h5>
                              <small className="client__review">{ review}</small>
                            </SwiperSlide>
                        )
                    })
                }
              

              
          </Swiper>
      </section>
  )
}

export default Testimonials