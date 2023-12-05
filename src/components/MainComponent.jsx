import React from 'react'
import gamingmain from '../assests/gamingmain.jpg'

const MainComponent = () => {
  return (
    <div className='w-full bg-[#e7f3c6] py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[500px] mx-auto my-4 rounded-sm' src={gamingmain} alt='controller' />
    <div className='flex flex-col justify-center'>
        <p className='text-[#1E5128] font-bold'>MANAGE YOUR VERY OWN SYSTEM</p>
        <h1 className='text-[#191A19] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Pay hundreds of high-quality games</h1>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut eius eos officia eveniet temporibus pariatur sit voluptatem ipsa illum nihil itaque dolore, repellendus quas omnis magnam suscipit dignissimos libero?</p>
        <button className='bg-[#191A19] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#4E9F3D]'>Join Now</button>
    </div>
    </div>
    </div>
  )
}

export default MainComponent