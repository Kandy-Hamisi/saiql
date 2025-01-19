'use client'


import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import MobileMenu from '../mobileMenu/MobileMenu'

const Navbar = () => {

    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
  return (
    <header className='fixed top-0 w-full flex items-center justify-between padding-x py-6 xl:px-32 bg-white-400 z-20'>
        {/* logo */}
        <div className='flex items-center'>
            <h1 className='text-2xl md:text-4xl font-bold font-allura text-saiql-teal'>Saiql</h1>
        </div>

        {/* hamburger icon visible to mobile only */}
        <div className='block lg:hidden'>
            <FaBars onClick={() => setIsMobileMenuOpen(true)} className='cursor-pointer' />
        </div>
      {/* mobile menu */}
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  )
}

export default Navbar
