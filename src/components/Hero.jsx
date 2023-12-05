import React from 'react'
import Typed from 'react-typed'
import backgroundimg from '../assests/background-img.png'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='text-[#1E5128] md:text-7xl sm:text-6xl text-4xl font-bold p-2'>Cloud Game</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[#D8E9A8]'>Be the first to play at your</p>
            <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['home', 'office', 'school']}
            typeSpeed={120}
            backSpeed={140}
            loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Enjoy hundreds of high-quality games with friends on console, PC, and cloud.</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 pt-4 text-[#D8E9A8]'>Meta Game Pass</h1>
        <button className='bg-[#4E9F3D] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Join Now</button>
        </div>
    </div>
  )
}

export default Hero