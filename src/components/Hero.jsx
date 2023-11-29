import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#1E5128] font-bold p-2'>Cloud Game</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#D8E9A8]'>Meta Game Pass</h1>
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
        <button className='bg-[#4E9F3D] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero