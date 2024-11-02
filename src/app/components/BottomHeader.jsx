"use client"

import Link from 'next/link'
import React, { useContext } from 'react'
import { IoMdCart } from "react-icons/io";
import { CartContext } from '../providers';

const BottomHeader = () => {
    const {cartVal} = useContext(CartContext)

  return (
    <div className='flex flex-wrap items-center justify-center sm:justify-end px-[5%] py-1 bg-[#f2efea]'>
        <ul className='flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10 text-[#4a6b92]'>
            <li className='hover:text-[gray] duration-300'>
                <Link href={'/login'}>Log in</Link>
            </li>
            <li className='hover:text-[gray] duration-300 flex items-center'>
                <IoMdCart />
                <Link href={'/cart'}>Cart({cartVal.length})</Link>
            </li>
            <li className='hover:text-[gray] duration-300'>
                <Link href={'/checkout'}>Checkout</Link>
            </li>
        </ul>
    </div>
  )
}

export default BottomHeader
