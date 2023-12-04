import React from 'react'
import { BsMouse3} from "react-icons/bs"
import { FaCheckCircle } from "react-icons/fa";
import { SlGameController } from "react-icons/sl";
import { SiGamejolt } from "react-icons/si";

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <h1 className='font-bold text-center pb-8 text-2xl sm:text-3xl md:text-4xl'>Choose your Plan</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
         <div className='w-full shadow-xl flex flex-col p-4 my-4 justify-between rounded-lg hover:scale-105 duration-300'>
          <BsMouse3 className='mx-auto mt-[-2.5rem] bg-white' size={60}/>
          <h2 className='text-2xl font-bold text-center py-8'>PC</h2>
          <p className='text-center text-4xl text-bold'>$9.99/mo.</p>
          <div className='font-medium text-left'>
            <div className='flex flex-row items-center border-b mt-8'>
            <FaCheckCircle className='inline' color='green'/>
            <p className='py-2 mx-8'>Hundreds of high-quality games</p>
            </div>
            <div className='flex flex-row border-b  items-center mt-8'>
            <FaCheckCircle color='green'/>
            <p className='py-2 mx-8'>New games on day one</p>
            </div>
            <div className='flex flex-row border-b  items-center mt-8'>
            <FaCheckCircle color='green'/>
            <p className='py-2 mx-8'>Member deals & discounts</p>
            </div>
            <div className='flex flex-row border-b  items-center mt-8'>
            <FaCheckCircle color='green'/>
            <p className='py-2 mx-8'>EA Play membership</p>
            </div>
          </div>
          <button className="bg-[#4E9F3D] w-[200px] align-center font-bold rounded-md py-3 my-6 mx-auto">Join now</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 justify-between rounded-lg hover:scale-105 duration-300'>
          <SlGameController className='mx-auto mt-[-2.5rem] bg-white' size={60}/>
          <h2 className='text-2xl font-bold text-center py-8'>Console</h2>
          <p className='text-center text-4xl text-bold'>$9.99/mo.</p>
          <div className='font-medium text-left'>
            <div className='flex flex-row items-center border-b mt-8'>
            <FaCheckCircle className='inline' color='green'/>
            <p className='py-2 mx-8'>Online console multiplayer</p>
            </div>
            <div className='flex flex-row border-b  items-center mt-8'>
            <FaCheckCircle color='green'/>
            <p className='py-2 mx-8'>Over 25 high-quality games</p>
            </div>
            <div className='flex flex-row border-b  items-center mt-8'>
            <FaCheckCircle color='green'/>
            <p className='py-2 mx-8'>Member deals & discounts</p>
            </div>
            <div className='flex flex-row border-b  items-center mt-8'>
            <FaCheckCircle color='green'/>
            <p className='py-2 mx-8'>EA Play membership</p>
            </div>
          </div>
          <button className="bg-[#4E9F3D] w-[200px] align-center font-bold rounded-md py-3 my-6 mx-auto">Join now</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 justify-between rounded-lg hover:scale-105 duration-300'>
          <SiGamejolt className='mx-auto mt-[-2.5rem] bg-white' size={60}/>
          <h2 className='text-2xl font-bold text-center py-8'>Pro</h2>
          <p className='text-center text-4xl text-bold'>$16.99/mo.</p>
          <div className='font-medium text-left'>
            <div className='flex flex-row items-center border-b mt-8'>
            <FaCheckCircle className='inline' color='green'/>
            <p className='py-2 mx-8'>Online console and PC multiplayer</p>
            </div>
            <div className='flex flex-row border-b  items-center mt-8'>
            <FaCheckCircle color='green'/>
            <p className='py-2 mx-8'>Hundreds of high-quality games</p>
            </div>
            <div className='flex flex-row border-b  items-center mt-8'>
            <FaCheckCircle color='green'/>
            <p className='py-2 mx-8'>Member deals, discounts, and Perks</p>
            </div>
            <div className='flex flex-row border-b  items-center mt-8'>
            <FaCheckCircle color='green'/>
            <p className='py-2 mx-8'>EA Play membership</p>
            </div>
          </div>
          <button className="bg-[#4E9F3D] w-[200px] align-center font-bold rounded-md py-3 my-6 mx-auto">Join now</button>
          </div>
        </div>
    </div>
  )
}

export default Cards