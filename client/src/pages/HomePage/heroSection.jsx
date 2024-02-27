
import React from 'react'
import { GiRoundStar } from "react-icons/gi";
import productDetails from '../../Constants/productConst'

export default function HeroSection() {
    return (
        <div className='w-full h-auto grid grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-3 md:gap-6 2xl:gap-10  p-1'>

            {productDetails?.map((product) => (
                <div className='w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] p-0 lg:p-1 gap-y-1 flex flex-col justify-start lg:items-start bg-[#fff] rounded-2xl shadow-md border transition-all ' key={product.id}>
                    <div className='w-full h-72 md:h-96 xl:h-[400px] 2xl:h-[500px] overflow-hidden rounded-t-xl rounded-b-md cursor-pointer shadow-md transition-all   hover:shadow-xl'>
                        <img loading='lazy' className='w-full h-full object-cover shadow-2xl transition-all hover:scale-150' src={product.image} alt="suggestedProductImage" />
                    </div>

                    <div className='relative w-full h-full p-3 flex flex-col gap-y-4 items-start '>
                        <h3 className='w-full text-center lg:text-start text-lg font-Roboto font-bold'>{product.productName}
                        </h3>
                        <div className='flex flex-col'>
                            <span className='text-sm '>{product.text}</span>
                            <div className='flex gap-x-1 '>
                                {[...Array(product.stars)].map((_, index) => (
                                    <GiRoundStar key={index} fill='#FED900' />
                                ))}
                            </div>
                        </div>
                        <button className='h-10 md:h-14 xl:h-16 absolute bottom-5 lg:bottom-10 left-4 lg:left-10 px-3 py-1 rounded-lg shadow-md shadow-saydam2 font-Roboto font-medium text-black text-sm md:text-lg  2xl:text-xl  transtion-all duration-300 hover:scale-110 hover:shadow-xl'>{product.price} ₺</button>
                    </div>
                </div>

            ))}

        </div>
    )
}
