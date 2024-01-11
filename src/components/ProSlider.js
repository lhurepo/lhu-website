import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'

import './ProSlider.css';

import { Scrollbar, Navigation } from 'swiper/modules';

function ProSlider() {
    return (
        <div className='pro-photos'>
            <div className="pro-title">Professional Photos</div>
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
                navigation={{ enabled: true, nextEl: '#nav-right', prevEl: '#nav-left' }}
                modules={[Scrollbar, Navigation]}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide><img src='./images/DSC01812.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC01833.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC01855.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC01871.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC01870.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC02374.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC02495.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC02527.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC02535.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC02536.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC02588.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC02744.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC00080.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC01465.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC01484.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC01686.jpg' alt='slide1'></img></SwiperSlide>
                <SwiperSlide><img src='./images/DSC01794.jpg' alt='slide1'></img></SwiperSlide>

            </Swiper>
            <div class="swiper-custom-nav">
                <img src="./images/left-arrow.png" alt="Left Arrow" id="nav-left" />
                <img src="./images/right-arrow.png" alt="Right Arrow" id="nav-right" />
            </div>
        </div>
    );
}

export default ProSlider
