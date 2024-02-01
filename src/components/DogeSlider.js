import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'

import './DogeSlider.css';

import { Scrollbar, Navigation } from 'swiper/modules';

function DogeSlider() {
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
        <div className='doge-photos'>
            <div className="doge-title">Wildlife Photos</div>
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
                <div className='prev-arrow' onClick={handlePrev} />
                <div className='next-arrow' onClick={handleNext} />
            </Swiper>
        </div>
    );
}

export default DogeSlider
