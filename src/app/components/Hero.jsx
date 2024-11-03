"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"
import { HiMenu, HiX } from "react-icons/hi"  // Icons for the hamburger menu

const socials = [
    { id: 1, icon: <FaFacebookF />, url: 'https://www.facebook.com' },
    { id: 2, icon: <FaInstagram />, url: 'https://www.instagram.com' },
    { id: 3, icon: <MdOutlineMail />, url: 'mailto:info@example.com' }
]

const navLinks = [
    { id: 1, label: 'all collections', href: '/' },
    { id: 2, label: 'Body Cream', href: '/' },
    { id: 3, label: 'Face Cream', href: '/' },
    { id: 4, label: 'Business', href: '/' },
    { id: 5, label: 'Special Offers', href: '/' },
    // { id: 6, label: 'Cosmetic ', href: '/' },
]

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <section>
            {/* Main Grid with Heading and Social Icons */}
            <div className='grid grid-cols-1 sm:grid-cols-[90%_10%] items-center mx-[5%] my-4 p-10 gap-4 pt-32'>
                {/* Social Icons */}
                <div className='flex justify-center sm:justify-end space-x-4 order-1 sm:order-2'>
                    {socials.map((item) => (
                        <Link key={item.id} href={item.url} className='text-base hover:text-gray-500 duration-300'>
                            {item.icon}
                        </Link>
                    ))}
                </div>

                {/* Heading */}
                <div className='order-2 sm:order-1'>
                    <h2 className='text-6xl font-title text-[#4a6b92]'>ARSEMA Pure Naturals</h2>
                </div>
            </div>

            {/* Hamburger and Navigation */}
            <div className="px-[10%] flex justify-between items-center sm:hidden">
                <button onClick={toggleMenu} className="text-3xl flex gap-1 hover:text-gray-500 duration-300">
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                    <p className="text-lg font-semibold">Menu</p>
                </button>
            </div>

            {/* Navigation Links */}
            <ul className={`px-[10%] flex-col sm:flex-row flex-wrap justify-start sm:justify-center items-start gap-4 sm:divide-x divide-gray-300 sm:flex ${isMenuOpen ? 'flex' : 'hidden'} sm:block`}>
                {navLinks.map((item) => (
                    <li key={item.id} className='px-2 h-10 flex justify-start sm:justify-center items-center'>
                        <Link href={item.href} className='text-base uppercase text-left flex items-center justify-start sm:justify-center px-6 hover:text-gray-500 duration-300'>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Hero;
