
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/NavBar'


export default function MainLayout() {
    return (
        <main className='w-full h-[200vh] flex flex-col bg-white '>
            <Navbar />
            <div className='px-8 md:px-10 xl:28 2xl:px-36 3xl:px-40'>
                <Outlet />
            </div>
        </main>
    )
}
