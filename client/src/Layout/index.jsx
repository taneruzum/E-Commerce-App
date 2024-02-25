
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/NavBar'


export default function MainLayout() {
    return (
        <main className='w-full h-auto flex flex-col bg-white'>
            <Navbar />
            <Outlet />
        </main>
    )
}
