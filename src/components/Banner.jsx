import React from 'react'
import Appointment from '../pages/Appointment'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 '>
        {/* LEFT SIDE DIV */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 '> 
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white '>
                <p>Book Appointment</p>
                <p className='mt-4'>With 100+ Trusted Doctors!</p>

            </div>
            <button onClick={()=>{navigate('/login}');scrollTo(0,0)} } className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all font-medium'>CREATE ACCOUNT</button>

        </div>
        {/* RIGHT SIDE DIV */}
        <div className='hidden md:block md:w-2/3 lg:w-[370px] relative'>
            <img className='w-full h-5/6 md:h-3/4 absolute bottom-0 right-0 max-w-md ' src={assets.appointment_img} alt="" />

        </div>

    </div>
  )
}

export default Banner