"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <nav className='sticky top-0 z-50 glass backdrop-blur-md shadow-lg border-b border-purple-200 dark:border-purple-800 h-16 px-3 md:px-6 items-center flex justify-between text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900'>

      <div className='logo font-bold text-xl md:text-2xl font-poppins text-purple-700 dark:text-purple-300'>
        <Link href="/" className='hover:text-purple-500 dark:hover:text-purple-400 transition'>BitLinks</Link>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex justify-center gap-6 lg:gap-8 items-center text-base font-medium'>
        <Link href="/" className='hover:text-purple-500 dark:hover:text-purple-400 transition'><li>Home</li></Link>
        <Link href="/about" className='hover:text-purple-500 dark:hover:text-purple-400 transition'><li>About</li></Link>
        <Link href="/shorten" className='hover:text-purple-500 dark:hover:text-purple-400 transition'><li>Shorten</li></Link>
        <Link href="/contact" className='hover:text-purple-500 dark:hover:text-purple-400 transition'><li>Contact</li></Link>
        <div className='flex gap-3'>
          <Link href="/shorten">
            <button className='bg-purple-500 hover:bg-purple-600 text-white rounded-xl shadow-lg px-4 py-2 font-semibold text-sm transition-all duration-200 hover:shadow-glow hover:scale-105'>Try Now</button>
          </Link>
          <Link href="/github">
            <button className='bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-400 rounded-xl shadow-lg px-4 py-2 font-semibold text-sm transition-all duration-200 hover:shadow-glow hover:scale-105 border border-purple-200 dark:border-purple-700'>GitHub</button>
          </Link>
        </div>
      </ul>

      {/* Mobile menu button */}
      <div className='md:hidden flex items-center gap-2'>
        <button onClick={toggleMobile} className='p-1'>
          {mobileOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-t border-purple-200 dark:border-purple-800 py-4'>
          <ul className='flex flex-col gap-4 px-6 text-lg font-medium'>
            <Link href="/" className='hover:text-purple-500 dark:hover:text-purple-400 transition py-1' onClick={() => setMobileOpen(false)}><li>Home</li></Link>
            <Link href="/about" className='hover:text-purple-500 dark:hover:text-purple-400 transition py-1' onClick={() => setMobileOpen(false)}><li>About</li></Link>
            <Link href="/shorten" className='hover:text-purple-500 dark:hover:text-purple-400 transition py-1' onClick={() => setMobileOpen(false)}><li>Shorten</li></Link>
            <Link href="/contact" className='hover:text-purple-500 dark:hover:text-purple-400 transition py-1' onClick={() => setMobileOpen(false)}><li>Contact</li></Link>
            <Link href="/shorten" className='mt-2'>
              <button className='w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl shadow-lg py-3 font-semibold text-base transition-all duration-200 hover:shadow-glow'>Try Now</button>
            </Link>
            <Link href="/github" className='w-full'>
              <button className='w-full bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-400 rounded-xl shadow-lg py-3 font-semibold text-base transition-all duration-200 hover:shadow-glow border border-purple-200 dark:border-purple-700'>GitHub</button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
