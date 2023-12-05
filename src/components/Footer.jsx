import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1240px] m-auto py-16 bg-fixed'>
        <div className='px-4 text-[#D8E9A8] flex flex-col-reverse md:flex-row items-center'>
            <div className='flex flex-row items-center w-full md:w-[60%]'>
                <div className='w-full py-4'>
                <h1 className='text-xl font-medium'>Browse</h1>
                <p className='py-1 text-sm'>Meta consoles</p>
                <p className='py-1 text-sm'>Meta games</p>
                <p className='py-1 text-sm'>Meta Games Pass</p>
                <p className='py-1 text-sm'>Meta acceories</p>
                </div>
                <div className='w-full py-4'>
                <h1 className='text-xl font-medium'>Resources</h1>
                <p className='py-1 text-sm'>Meta News</p>
                <p className='py-1 text-sm'>Meta Support</p>
                <p className='py-1 text-sm'>Feedback</p>
                <p className='py-1 text-sm'>Community standards</p>
                </div>
                <div className='w-full py-4'>
                <p className='text-xl font-medium'>Company</p>
                <p className='py-1 text-sm'>About</p>
                <p className='py-1 text-sm'>Blog</p>
                <p className='py-1 text-sm'>Jobs</p>
                <p className='py-1 text-sm'>Partners</p>
                </div>
        </div>
        <div className='md:w-[40%] py-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>META CLOUD GAMING</h1>
            <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda ut autem? Eos laborum quisquam, reprehenderit, expedita voluptatibus odio quasi placeat eveniet soluta amet repudiandae quaerat eius molestiae? Assumenda, delectus!</p>
            <div className=' w-full flex gap-5 items-center py-2'>
            <FaFacebookSquare size={30}/>
            <FaSquareInstagram size={30}/>
            <FaSquareXTwitter size={30}/>
            <FaGithub size={30}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer