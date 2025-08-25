import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* LEFT SIDE */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6 '>This is a dummy text of the printing and typesetting industry. It is displayed for the copyright ytext and future enhancements. It is a standard text that is used for the replacement in future </p>

            </div>

            {/* CENTER SIDE */}
            <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>

            {/* RIGHT SIDE */}
            <div>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 9876543210</li>
                    <li>sandoclynk@hotmail.com</li>

                </ul>
                
            </div>

        </div>
        <div>
            {/* COPYRIGHT TEXT */}
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@Doclynk-All Right Reserved</p>


        </div>

    </div>
  )
}

export default Footer