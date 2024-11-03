import Link from 'next/link'
import React from 'react'

const navItems = [
    { id: 1, title: 'Home', link: '/#home' },
    { id: 2, title: 'About Us', link: '/about-us' },
    { id: 3, title: 'Products', link: '/#products' },
    { id: 4, title: 'Contact', link: '/#contact' }
]

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row items-center justify-between px-[5%] py-3 bg-[#f2efea]'>
        <h1 className='text-4xl font-title font-bold text-[#4a6b92] mb-2 md:mb-0'>
            APN
        </h1>

        <nav className='w-full md:w-auto'>
            <ul className='flex items-center justify-center md:justify-between gap-4 md:gap-10 text-[#4a6b92]'>
                {
                    navItems.map((item) => (
                        <Link className='hover:text-[gray] duration-300' key={item.id} href={item.link}>
                            {item.title}
                        </Link>
                    ))
                }
            </ul>
        </nav>
    </header>
  )
}

export default Header
