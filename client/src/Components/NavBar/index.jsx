import React, { useEffect, useState } from 'react'
import Button from '../Button'
import navbarRouter from '../../routes/navbarRoutes'
import { NavLink } from 'react-router-dom'
import { SlMenu, SlClose } from "react-icons/sl";
import classNames from 'classnames';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <div className='px-24 sm:px-4  2xl:px-12 3xl:px-40'>
            <nav className=' w-full  flex items-center justify-between lg:justify-normal p-4  3xl:px-10 shadow-xl rounded-xl'>
                <div className='flex-shrink-0 p-2 lg:p-0 xl:p-1'>
                    <img className='block w-56  lg:hidden xl:block xl:w-60 3xl:w-80' src="/yatayLogo.png" alt="logo" />
                </div>
                <div className={classNames(`absolute  flex flex-col gap-y-4 min-h-[50vh] px-1 py-4 bg-[#ffffff26] backdrop-blur-md  left-0 top-[-100%]  transition-all 
            lg:static lg:min-h-fit lg:bg-transparent lg:w-full lg:flex lg:flex-row justify-center lg:items-center  
            md:gap-x-4 2xl:gap-x-6 3xl:gap-x-8 
            [&>*:nth-child(4)]:rounded-3xl [&>*:nth-child(4)]:bg-color1 
            [&>*:nth-child(4)]:py-2 [&>*:nth-child(4)]:text-[#fff] `, {
                    "top-10": open === true,
                })}>
                    {navbarRouter.map((item, index) => (
                        <NavLink key={index} to={item.path} className='relative group px-1 py-3 text-sm 2xl:text-base text-nowrap font-Roboto rounded-lg '>
                            {item.name}
                            {index !== 3 && (
                                <span className="hidden lg:block lg:absolute inset-x-0 bottom-0 h-1 rounded-full bg-color1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            )}
                        </NavLink>
                    ))}
                </div>
                <div className='w-full flex justify-end gap-x-7'>
                    <div className='w-full max-w-80 sm:flex justify-end items-center gap-x-4 hidden xl:pl-0 2xl:pl-5 3xl:pl-10'>
                        <Button text={"Giriş Yap"} url={"/login"} customClass={" text-color2 transition-all  hover:border-b-8 hover:border-b-color1 duration-100 hover:shadow-inner hover:shadow-saydam "} />
                        <Button text={"Kayıt Ol "} url={"/register"} customClass={" text-[#fff] bg-color1 transition-all hover:border-b-8 hover:border-b-saydam duration-100 hover:shadow-inner hover:shadow-saydam"} />
                    </div>
                    <div onClick={() => setOpen((prev) => !prev)} className='flex lg:hidden items-center p-4 rounded-full cursor-pointer transition-all hover:bg-saydam '>
                        {open ? <SlClose size={36} /> : <SlMenu size={36} />}
                    </div>
                </div>

            </nav>
        </div>
    )
}
