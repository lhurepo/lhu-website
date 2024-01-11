import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'

import './PersonalSlider.css';

import { Scrollbar, Navigation } from 'swiper/modules';

function PersonalSlider() {
    return (
        <div className='personal-photos'>
            <div className="personal-title">Travel Photos</div>
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
                navigation={{ enabled: true, nextEl: '#nav-right2', prevEl: '#nav-left2' }}
                modules={[Scrollbar, Navigation]}
                scrollbar={{ draggable: true }}
                className='swiper2'
            >
                <SwiperSlide><img src='./images/DSC05122.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC05355.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC05245.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC05135.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC05345.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC05376.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC05412.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC05413.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC05609.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC07525.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC07672.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC07683.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC07813.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC07842.jpg' alt='slide1'></img></SwiperSlide>
            </Swiper>
            <div class="swiper-custom-nav2">
                <img src="./images/left-arrow2.png" alt="Left Arrow" id="nav-left2" />
                <img src="./images/right-arrow2.png" alt="Right Arrow" id="nav-right2" />
            </div>
        </div>
    );
}

export default PersonalSlider
