import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'

import './DogeSlider.css';

import { Scrollbar, Navigation } from 'swiper/modules';

function DogeSlider() {
    return (
        <div className='doge-photos'>
            <div className="doge-title">Doge Photos</div>
            <Swiper
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    900: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    }
                }}
                slidesPerView={5}
                spaceBetween={20}
                loop={true}
                navigation={{ enabled: true, nextEl: '#nav-right3', prevEl: '#nav-left3' }}
                modules={[Scrollbar, Navigation]}
                scrollbar={{ draggable: true }}
                className='swiper3'
            >
                <SwiperSlide><img src='./images/DSC00350.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00352.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00353.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00354.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00355.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00341.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00342.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00343.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00347.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00348.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00349.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00391.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00392.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00393.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00396.jpg' alt='slide1'></img></SwiperSlide>

            </Swiper>
            <div class="swiper-custom-nav3">
                <img src="./images/left-arrow3.png" alt="Left Arrow" id="nav-left3" />
                <img src="./images/right-arrow3.png" alt="Right Arrow" id="nav-right3" />
            </div>
        </div>
    );
}

export default DogeSlider
