import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import sliderText from '../../Constants/const';
import CustomSlider from '../../Components/SliderText';
import HeroSection from './heroSection';

export default function HomePage() {
  return (
    <div className='w-full h-full mt-10'>
      <Swiper
        spaceBetween={60}
        slidesPerView={1}
        loop={true}
        className='!xl:max-h-[950px] flex items-center'
      >
        {sliderText.map(item => (
          <SwiperSlide key={item.id}>
            <CustomSlider
              header={item.header}
              text={item.text}
              subInfo={item.subInfo}
              imageUrl={item.imageUrl} />
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='mt-12 flex flex-col gap-y-10'>
        <HeroSection />
      </div>
    </div>
  )
}
