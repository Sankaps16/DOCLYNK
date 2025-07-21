import React from 'react'
import { assets } from '../assets/assets'

const Headerfile = () => {
  return (
    <div className='flex flex-col flex-row flex-wrap bg-primary rounded-lg px-0.5 md:px-10 lg:px-20'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-20 leading-tight md:leading-tight lg:leading-tight'>
                SCHEDULE APPOINTMENTS WITH EXPERIENCED DOCTORS
            </p>

        
         {/* LEFT SIDE DIV */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
           
            <div className='flex flex-col flex-row md:flex-row items-center gap-3 text-white text-sm font-medium  '>
                <img className='w-28 ' src={assets.group_profiles} alt="" />
                 <p>
                Browse our comprehensive doctor directory <br className='hidden sm:block' /> and book your visits with ease.
            </p>
            </div>
            <a href="#speciality" className='flex items-center gap-2 font-bold bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                BOOK APPOINTMENT <img className='w-3' src={assets.arrow_icon} alt="" />
            </a>
        </div>
        {/* RIGHT SIDE DIV */}
        <div className='md:w-1/2 relative'>
            <img className='w-full h-full md:absolute bottom-0 rounded-lg' src={assets.header_img} alt="" />

        </div>
        <div>

        </div>

    
    </div>
    
  )
}

export default Headerfile