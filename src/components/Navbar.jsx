import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <div className='bg-[#222831] w-full h-[100px] flex justify-between items-center px-4'>
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
    <ul className={!navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#393E46] text-[#FAF6F0] flex flex-col justify-center items-center transition ease-in-out delay-150'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Resume</li>
          <li className='py-6 text-4xl'>Contact</li>
    </ul>
    <ul className='hidden lg:flex flex-col fixed top-[40%] right-0 text-[#FAF6F0]'>
      <li className='flex justify-end mr-[-80px] hover:mr-0 duration-300 p-0'>
        <a href='/' className='w-[125px] rounded-sm p-1 flex flex-row-reverse justify-between items-center bg-[#0077b5]'>
        LinkedIn <FaLinkedin size={35}/>
        </a>
      </li>
      <li className='flex justify-end mr-[-80px] hover:mr-0 duration-300 p-0 '>
        <a href='/' className='w-[125px] rounded-sm p-1 flex flex-row-reverse justify-between items-center bg-[#333]'>
        Github <FaGithub size={35}/>
        </a>
      </li>
      <li className='flex justify-end mr-[-80px] hover:mr-0 duration-300 p-0 '>
        <a href='/' className='w-[125px] rounded-sm p-1 flex flex-row-reverse justify-between items-center bg-[#c71610]'>
        E-mail <HiOutlineMail size={35}/>
        </a>
      </li>
      <li className='flex justify-end mr-[-80px] hover:mr-0 duration-300 p-0 '>
        <a href='/' className='w-[125px] rounded-sm p-1 flex flex-row-reverse justify-between items-center bg-[#6DB56D]'>
        Resume <BsFillPersonLinesFill size={35}/>
        </a>
      </li>
    </ul>
    </div>
  )
}

export default Navbar