import React, { useState} from 'react'
import { MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='w-full h-[80px] z-10 fixed bg-zinc-200 drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND</h1>
                <ul className='hidden md:flex'>
                    {['Home','About', 'Support','Platforms', 'Pricing'].map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='bg-transparent border-none text-black mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='md:hidden ' onClick={handleClick}>
                {!nav ? <MenuIcon  className='w-5 hover:cursor-pointer'/> : <XIcon className='w-5 hover:cursor-pointer'/>}
            </div>
        </div>
        <ul className={!nav ? 'hidden' :'absolute z-10 bg-zinc-200 w-[70vw] h-screen justify-start items-end -right-2 px-8 rounded-xl animate-slide-in list-none md:hidden'}>
            {['Home','About', 'Support','Platforms', 'Pricing'].map((item) => (
                    <li key={item} className='border-b-2 border-zinc-300 w-full'>{item}</li>
            ))}
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar