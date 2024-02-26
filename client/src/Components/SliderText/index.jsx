
import React from 'react'

export default function CustomSlider({ header, text, subInfo, imageUrl }) {
    return (
        <div className=''>
            <img className='relative w-full h-[30vh] xs:h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[54vh]  xl:h-[58vh] 2xl:h-[60vh] 3xl:h-[75vh] rounded-3xl object-cover z-10;' src={imageUrl} alt="sliderImage" />
            <div className=' absolute top-10 left-12 w-2/5 flex flex-col gap-y-4  sm:backdrop-blur-sm '>
                <span className='absolute h-full max-w-2 border-8 border-color1 rounded-sm'></span>
                <span className='pl-5 xs:text-base sm:text-xl md:text-4xl xl:text-6xl 3xl:text-9xl font-Roboto font-bold text-zinc-800 text-wrap drop-shadow-md'>{header}</span>
                <span className='pl-5 hidden sm:block sm:text-sm md:text-base xl:text-2xl font-Roboto text-zinc-800 text-wrap text-justify drop-shadow-md'>{text}</span>
                <span className='pl-5 xs:text-sm md:text-base 2xl:text-lg font-Roboto text-zinc-800 text-nowrap text-justify drop-shadow-sm'>{subInfo}</span>
            </div>
        </div>
    )
}
