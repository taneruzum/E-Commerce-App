
import React from 'react'
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
export default function UserRegisterPage() {
  return (
    <div className='w-full min-h-[100vh] flex items-center justify-center p-0 xs:p-4 sm:p-8 lg:p-12 '>
      <div className='absolute w-full h-full z-10 bg-login-bg bg-cover' />
      <div className='absolute w-full h-full z-20 bg-[#4444] blur-3xl' />
      <form className='relative z-30 w-full max-w-[550px] h-full max-h-fit flex flex-col gap-y-12 bg-[#fff] shadow-xl shadow-[#00000044] rounded-xl p-7'>
        <span className='flex items-center justify-center font-poppins font-extrabold text-3xl text-color1 pb-4 border-b-2 border-[#4444]'>KULLANICI KAYIT</span>

        <div className='flex flex-col gap-y-10'>

          <div className='relative flex items-center justify-center h-10 gap-x-7'>
            <span className='absolute left-0 p-3 bg-color1 rounded-full' ><CgProfile size={40} color='white' /></span>
            <input type="text" placeholder='Kullanıcı Adı' autoComplete='username' className='w-full h-12 bg-saydam pl-20 font-semibold text-xl rounded-full outline-none placeholder:font-bold' />
          </div>

          <div className='relative flex items-center justify-center h-10 gap-x-7'>
            <span className='absolute left-0 p-3 bg-color1 rounded-full' ><MdEmail size={40} color='white' /></span>
            <input type="text" placeholder='E-posta Adresi' autoComplete='email' className='w-full h-12 bg-saydam pl-20 font-semibold text-xl rounded-full outline-none placeholder:font-bold' />
          </div>
          <div className='relative flex items-center justify-center h-10 gap-x-7'>
            <span className='absolute left-0 p-3 bg-color1 rounded-full' ><RiLockPasswordFill size={40} color='white' /></span>
            <input type="text" placeholder='Şifre' autoComplete='new-password' className='w-full h-12 bg-saydam pl-20 text-xl rounded-full outline-none placeholder:font-bold' />
          </div>
          <div className='relative flex items-center justify-center h-10 gap-x-7'>
            <span className='absolute left-0 p-3 bg-color1 rounded-full' ><RiLockPasswordFill size={40} color='white' /></span>
            <input type="text" placeholder='Şifre Onayı' autoComplete='new-password' className='w-full h-12 bg-saydam pl-20 text-xl rounded-full outline-none placeholder:font-bold' />
          </div>

          <button className=' w-full h-12 font-bold text-2xl text-[#fff] bg-color1 text-nowrap rounded-full'>Kayıt Ol</button>

          <div className='w-full flex items-center justify-center'>
            <span>Hesabın varsa <NavLink to={"/login"} className="text-blue-500 underline">buradan</NavLink> giriş yapabilirsin.</span>
          </div>
        </div>
      </form>
    </div>
  )
}
