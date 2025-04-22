import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-between bg-purple-700 text-white  p-6 h-17'>
        <div className="logo text-2xl font-bold">
            bitlink
        </div>
        <ul className=' text-lg flex gap-8 items-center'>
            <Link href="/"><li className='hover:text-gray-400 w-fit '>Home</li></Link>
            <Link href="/about"><li className='hover:text-gray-400 w-fit '>About</li></Link>
            <Link href="/generate"><li className='hover:text-gray-400 w-fit '>shorten</li></Link>
            <Link href="/contact"><li className='hover:text-gray-400 w-fit '>Contact</li></Link>

            <li className='flex gap-4'>
                <Link href="/generate"><button className='bg-purple-500 hover:bg-purple-400 p-2 rounded-xl'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 hover:bg-purple-400 p-2 rounded-xl'>GitHub</button></Link>
            </li>
            
        </ul>
    </nav>

      
   
    </>
  )
}

export default Navbar
