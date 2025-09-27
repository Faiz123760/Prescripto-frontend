import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        
        <div className='text-center text-2xl pt-10 text-gray-700'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='flex flex-col my-10 md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to prescripto , your trusted partner in managing your healthcare Needs Conveniently and efficiently. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic accusamus, voluptatibus maxime porro mollitia illum facilis alias animi excepturi? </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsum eveniet iste quae et soluta reprehenderit id porro maiores adipisci vitae quibusdam impedit reiciendis nobis, pariatur nesciunt, sapiente nostrum aliquam at nisi nam labore! Quasi inventore accusantium repellendus porro, earum atque amet rem voluptatibus dolorem reiciendis soluta similique. Nemo, provident.</p>
            <p className='text-gray-800'>Our Visions</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quae vero est sint velit eius doloremque accusamus pariatur magnam quod rem similique optio officia necessitatibus minima nemo voluptas qui, suscipit incidunt eveniet. Debitis, accusamus error molestias unde accusantium architecto. Labore!</p>
          </div>
        </div>

        <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE INDIA</span></p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>
          <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b>Efficiency :</b>
              <p>Streamlined appointment scheduling that fits int your busy lifestyle</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience :</b>
          <p>Access to a network of trusted healthcare professionals in your area</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b>Personalization :</b>
               <p>Tailored recommendations and reminders to help you stay on top of your health</p>
          </div>
        </div>
    </div>
  )
}

export default About