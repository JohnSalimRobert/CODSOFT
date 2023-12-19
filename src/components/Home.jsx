import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {
  return (
    <div name='home' className='bg-[#222831] w-full h-screen'>
    {/*  */}
    <div className='max-w-[1240px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#c7c7c7] text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#FAF6F0]'>John Salem Robert</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#439e98]'>I'm a Front-End <h1 className='inline font-tilt text-slate-500'>Developer.</h1></h2>
        <p className='text-[#c7c7c7] py-6 max-w-[760px]'>I'm a result-driven developer with a problem-solving mindset, adept at creating efficient and intuitive web applications; ensures top-notch 
service.</p>
    <div>
        <button className='text-[#c7c7c7] border-2 group flex items-center px-6 py-2.5 m-2 hover:bg-[#439e98] hover:border-[#439e98]'>View Work 
        <span className='group-hover:rotate-90 duration-100'>
        <HiArrowNarrowRight className='ml-4' />
        </span>
        </button>
    </div>
    </div>
    </div>
  )
}

export default Home