import React, { useEffect, useState } from 'react'
import Button from '../Button'
import navbarRouter from '../../routes/navbarRoutes'
import { NavLink } from 'react-router-dom'
import { SlMenu, SlClose, SlSupport } from "react-icons/sl";
import classNames from 'classnames';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='sticky top-0 z-50 px-0 sm:px-4 2xl:px-24 3xl:px-32 '>
            <nav className=' bg-[#fff] w-full  flex items-center justify-between lg:justify-normal p-4 3xl:px-10 shadow-xl shadow-saydam rounded-xl '>
                <div className='flex-shrink-0  p-0 md:p-2 lg:p-0 xl:p-1'>
                    <img className='block w-40 md:w-52  lg:hidden xl:block xl:w-60 3xl:w-80' src="/yatayLogo.png" alt="logo" />
                </div>
                <div className={classNames(`absolute z-50 pl-10 lg:pl-0 overflow-hidden w-full h-0 flex flex-col px-1 bg-[#ffffff] left-0 top-[110px]  transition-all ease-out duration-500 
            lg:static lg:overflow-visible lg:min-h-fit  lg:bg-transparent lg:w-full lg:flex lg:flex-row justify-center lg:items-center md:gap-x-4 2xl:gap-x-6 3xl:gap-x-8 [&>*:nth-child(4)]:max-w-fit
            [&>*:nth-child(4)]:rounded-3xl [&>*:nth-child(4)]:bg-color1 
            [&>*:nth-child(4)]:py-2 [&>*:nth-child(4)]:text-[#fff] `, {
                    "  transition-all h-[50vh] shadow-xl shadow-[#4444] rounded-3xl gap-y-4 py-4 font-bold": open === true,
                })}>
                    {navbarRouter.map((item, index) => (
                        <NavLink key={index} to={item.path} className='relative group px-2 py-5 hover:bg-[#efefef2d] hover:shadow-md rounded-xl lg:hover:shadow-none lg:hover:bg-transparent lg:px-1 lg:py-3 text-xs md:text-sm 3xl:text-base text-nowrap font-Roboto lg:rounded-lg '>
                            <div className='flex items-center gap-x-4'>
                                <span className='static lg:hidden'>{item.icon}</span>
                                {item.name}
                            </div>
                            {index !== 3 && (
                                <span className="hidden  lg:block lg:absolute inset-x-0 bottom-0 h-1 rounded-full bg-color1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
