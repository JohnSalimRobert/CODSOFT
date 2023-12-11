import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <div className='bg-[#22092C] w-full h-[100px] flex justify-between items-center px-4'>
      <div>
        <img src={logo} style={{width:'100px'}} alt='/'></img>
      </div>
      {/* Navbar */}
        <ul className='md:flex hidden text-[#FAF6F0]'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
    {/**/}
    <div onClick={handleNavbar} className='md:hidden z-10 text-[#FAF6F0]'>
      {!navbar ? <FaBars /> : <FaTimes />}
    </div>
    <ul className={!navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#22092C] text-[#FAF6F0] flex flex-col justify-center items-center transition ease-in-out delay-150'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Resume</li>
          <li className='py-6 text-4xl'>Contact</li>
    </ul>
    </div>
  )
}

export default Navbar