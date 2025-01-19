'use client'

import Link from 'next/link'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const MobileMenu = () => {

  return (
    <div className='p-4 transition-all duration-300 ease-in-out bg-white absolute right-0 top-0 w-[60vw] h-screen z-20'>
      <div className='flex justify-end'>
        <FaTimes className='text-xl cursor-pointer' />
      </div>
      <div className='mt-8 h-[20vh] flex justify-around'>
        <ul className='list-none text- flex flex-col items-center space-y-4 text-xl'>
          <Link className='flex-1' href="/">Home</Link>
          <Link className='flex-1' href="/">About</Link>
          <Link className='flex-1' href="/">Services</Link>
          <Link className='flex-1' href="/">Contact</Link>
        </ul>
      </div>
      <div className='mt-4 w-full flex justify-center'>
        <button className='w-full bg-saiql-orange-secondary p-2 rounded-md'>Login</button>
      </div>
    </div>
  )
}

export default MobileMenu
