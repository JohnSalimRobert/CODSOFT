import React from 'react'
import html5 from '../assets/html5.png'
import css3 from '../assets/css3.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwindcss from '../assets/tailwindcss.png'
import mongoDB from '../assets/mongoDB.png'
import nodejs from '../assets/nodejs.png'
import github from '../assets/github.png'

const Skills = () => {
  return (
    <div className='bg-[#222831] text-[#FAF6F0] w-full h-full' name='skills'>
        <div className='max-w-[1000px] mx-auto p-4 py-8 flex flex-col justify-center align-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold '>Skills</p>
                <p className=''>These are skills I have</p>
            </div>
            <div className='w-full m-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#04080f] hover:scale-110 duration-500'>
                    <img src={html5} alt='HTML5 icon' className='w-20 m-auto'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#04080f] p-1 hover:scale-110 duration-500'>
                    <img src={css3} alt='CSS icon' className='w-19 h-20 m-auto'></img>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#04080f] p-1 hover:scale-110 duration-500'>
                    <img src={javascript} alt='JS icon' className='w-20 m-auto'></img>
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#04080f] p-1 hover:scale-110 duration-500'>
                    <img src={react} alt='React icon' className='w-20 m-auto'></img>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#04080f] p-1 hover:scale-110 duration-500'>
                    <img src={nodejs} alt='nodejs icon' className='w-20 m-auto'></img>
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='shadow-md shadow-[#04080f] p-1 hover:scale-110 duration-500'>
                    <img src={mongoDB} alt='Mongodb icon' className='w-20 m-auto'></img>
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#04080f] p-1 hover:scale-110 duration-500'>
                    <img src={github} alt='github icon' className='w-18 h-20 m-auto'></img>
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#04080f] p-1 hover:scale-110 duration-500'>
                    <img src={tailwindcss} alt='tailwind icon' className='w-18 h-20 m-auto'></img>
                    <p className='my-4'>Tailwindcss</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills
