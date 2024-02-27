
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/NavBar'


export default function MainLayout() {
    return (
        <main className='w-full min-h-[100vh] h-full flex flex-col bg-saydam '>
            <Navbar />
            <div className='w-full h-full px-1 md:px-10 xl:28 2xl:px-36 3xl:px-40'>
                <Outlet />
            </div>
        </main>
    )
}
