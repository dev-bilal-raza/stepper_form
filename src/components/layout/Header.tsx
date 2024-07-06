import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../../public/angle_logo.png"

const Header = () => {
  return (
    <header className='flex p-4 px-6 items-center justify-between bg-gradient-to-tr from-black via-slate-950 to-slate-900'>
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt='Logo of Angle Bracket' />
        </Link>
      </div>
      <nav className='flex items-center gap-5 font-link text-white md:text-lg text-sm'>
        <Link href="/" className='hover:text-gray-400'>Home</Link>
        <Link href="/step-form" className='hover:text-gray-400'>Stepper Form</Link>
      </nav>
    </header>
  )
}

export default Header