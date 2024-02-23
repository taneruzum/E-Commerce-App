
import React from 'react'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
    return (
        <main className='w-full h-[100vh] flex justify-center bg-gray-600'>
            <Outlet />
        </main>
    )
}
