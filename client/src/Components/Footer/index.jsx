
import React from 'react'
import { NavLink } from 'react-router-dom';
import footerLink from '../../Constants/footerConst.js'
export default function Footer() {
    const dateTime = new Date();
    return (
        <footer className="w-full flex flex-col items-center bg-color2  border-t">
            <div className='w-full flex justify-center font-Roboto ' >
                <div className='w-11/12 sm:w-10/12 md:w-9/12 xl:w-8/12 2xl:w-6/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 py-10'>
                    {footerLink.map((object, index) => (
                        <div key={index} className='  min-w-40 flex flex-col gap-y-2 text-[#fff] '>
                            <h4 className='border-b-2 border-color1 font-thin text-nowrap text-xl p-2'>{object.title}</h4>
                            <div className='flex flex-col gap-y-3 font-light text-sm text-nowrap '>
                                <NavLink className=" p-2 rounded-xl transition-all hover:bg-color3">{object.link1}</NavLink>
                                <NavLink className=" p-2 rounded-xl transition-all hover:bg-color3">{object.link2}</NavLink>
                                <NavLink className=" p-2 rounded-xl transition-all hover:bg-color3">{object.link3}</NavLink>
                                <NavLink className=" p-2 rounded-xl transition-all hover:bg-color3">{object.link4}</NavLink>
                                {object?.googleBadge && object?.appBadge && (
                                    <>
                                        <span className='font-medium'>Mobil Uygulamalarımız</span>
                                        <img className='max-w-44' src={object.googleBadge} alt="" />
                                        <img className='max-w-44' src={object.appBadge} alt="" />
                                    </>
                                )}
                                {object?.icons && (<span className='font-medium'>Sosyal Medya</span>)}
                                <div className="flex gap-x-4 ">
                                    {object?.icons &&
                                        Object.values(object.icons).map((icon, index) => (
                                            <div key={index} className=' cursor-pointer rounded-full transition-colors hover:bg-[#ffffff20]'>
                                                <img src={icon} width={32} className='' />
                                            </div>
                                        ))}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="w-full">
                <div className="w-full flex items-center justify-center bg-[#000] font-semibold text-[#f0f8ff] text-xs ">
                    <p>Telif Hakkı © {dateTime.getFullYear()} Mister Tanner | Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    )
}
