import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At <b>DOCLYNK</b> , we believe your health deserves the highest priority. That’s why we’ve built a user-friendly and secure platform where you can book doctor appointments quickly and confidently. Whether you need a general consultation, a specialist opinion, or a quick health check, DOCLYNK connects you with verified, experienced doctors tailored to your needs all in just a few clicks.</p>
          <br />
          <p>Choosing the right doctor can be stressful — we’re here to make it easier. Every doctor on DOCLYNK is thoroughly vetted, licensed, and reviewed by real patients. Each profile features detailed information including medical specialty, qualifications, availability, clinic location, and authentic ratings.</p>
          <br />
          <b className='text-gray-600 '>Our Mission</b>
         <p>Our mission is to simplify healthcare access. DOCLYNK works seamlessly on both desktop and mobile, allowing you to book appointments in under 2 minutes. We provide automated appointment reminders, a complete visit history, and even virtual consultation options to give you maximum flexibility. With DOCLYNK, your path to trusted healthcare is just a tap away.</p>

        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span>?</p>
        <br />
        <div  className='flex flex-col md:flex-row md-20'> 
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover hover:bg-primary hover:text-white transition-all duration:300 text-gray-600 cursor-pointer '>
            <b>Efficiency:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover hover:bg-primary hover:text-white transition-all duration:300 text-gray-600 cursor-pointer '>
            <b>Convience:</b>
            <p>Access to a network of trusted heathcare professionals in your area.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover hover:bg-primary hover:text-white transition-all duration:300 text-gray-600 cursor-pointer '>
            <b>Personalization:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your heath.</p>
          </div>
        </div>
      </div>
      

      
        
    </div>
  )
}

export default About