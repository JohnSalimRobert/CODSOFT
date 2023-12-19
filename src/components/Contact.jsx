import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#222831] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/600132b7-30c8-45c3-9fb3-b7fdf9df5a52' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-[#FAF6F0]'>Contact</p>
                <p className='text-[#FAF6F0]'>You can submit the from below or send me an email at johnsalimrobert@gmail.com</p>
            </div>
            <input className='p-2 bg-[#e8f1ff]' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#e8f1ff]' type='email' placeholder='Email' name='email'/>
            <textarea name='message' rows='10' className='bg-[#e8f1ff]' placeholder='Message'></textarea>
            <button className='text-[#c7c7c7]  border-2 flex items-center px-4 py-2.5 my-8 mx-auto hover:bg-[#439e98] hover:border-[#439e98]'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact