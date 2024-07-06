import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/angle_logo.png"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full bg-black p-7'>
      <div className='flex justify-between items-center'>
        <Image src={Logo} alt='Logo of Angle Bracket' />
        <div className='flex gap-4 font-link text-gray-300'>
          <Link className='hover:text-gray-600' href="/step-form">Stepper Form</Link>
          <Link className='hover:text-gray-600' href={"https://github.com/dev-bilal-raza"}>Github</Link>
          <Link className='hover:text-gray-600' href={"https://anglebrackets.io/"}>Website</Link>
        </div>
      </div>
      <div className='h-0.5 w-full bg-gradient-to-r from-black via-slate-500 to-black m-3' />
      <p className='flex justify-center items-center m-3 text-white'>
        Copyright © 2024 - 2025
      </p>
    </footer>
  )
}

export default Footer