import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'

import './PersonalSlider.css';

import { Scrollbar, Navigation } from 'swiper/modules';

function PersonalSlider() {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.sliderNext();
    }, []);

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
                navigation
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
                <div className='prev-arrow' onClick={handlePrev} />
                <div className='next-arrow' onClick={handleNext} />
            </Swiper>
        </div>
    );
}

export default PersonalSlider
