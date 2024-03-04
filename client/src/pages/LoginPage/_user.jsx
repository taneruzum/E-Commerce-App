import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function UserLoginPage() {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className='w-full min-h-[100vh] flex items-center justify-center p-0 xs:p-4 sm:p-8 lg:p-12 '>
      <div className='absolute w-full h-full z-10 bg-login-bg bg-cover transform rotate-180' />
      <div className='absolute w-full h-full z-20 bg-[#4444] blur-3xl' />
      <form className='relative z-30 w-full max-w-[550px] h-full max-h-fit flex flex-col gap-y-12 bg-[#fff] shadow-xl shadow-[#00000044] rounded-xl p-7'>
        <span className='flex items-center justify-center font-poppins font-extrabold text-3xl text-color1 pb-4 border-b-2 border-[#4444]'>KULLANICI GİRİŞ</span>

        <div className='flex flex-col gap-y-10'>
          <div className='relative flex items-center justify-center h-10 gap-x-7'>
            <span className='absolute -left-1 p-3 bg-color1 rounded-full ' ><MdEmail size={40} color='white' /></span>
            <input type="text" placeholder='E-posta Adresi' autoComplete='email' className='w-full h-12 bg-saydam pl-20 font-semibold text-xl rounded-full outline-saydam2 outline-1 placeholder:font-bold ' />
          </div>
          <div className='relative flex items-center justify-center h-10 gap-x-7'>
            <span className='absolute -left-1 p-3 bg-color1 rounded-full ' ><RiLockPasswordFill size={40} color='white' /></span>
            <input type={visibility ? "text" : "password"} placeholder='Şifre' autoComplete='current-password' className='w-full h-12 bg-saydam pl-20 font-semibold text-xl rounded-full outline-saydam2 outline-1 placeholder:font-bold ' />
            {visibility ?
              <span onClick={() => setVisibility((prev) => !prev)} className='absolute right-4 p-1 bg-color1 rounded-full '><IoEye size={24} color='white' /></span> :
              <span onClick={() => setVisibility((prev) => !prev)} className='absolute right-4 p-1 bg-color1 rounded-full '><IoEyeOff size={24} color='white' /></span>}
          </div>


          <button className=' w-full h-12 font-bold text-2xl text-[#fff] bg-color1 text-nowrap rounded-full'>
            Giriş Yap
          </button>
          <NavLink className="hover:underline max-w-fit ">Şifreni mi unuttun?</NavLink>
          <div className='w-full flex items-center justify-center'>
            <span>Hesabın yoksa <NavLink to={"/register"} className="text-blue-600 font-semibold underline">buradan</NavLink> kayıt olabilirsin.</span>
          </div>
        </div>
      </form>
    </div>
  )
}
