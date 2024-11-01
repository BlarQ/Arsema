import Link from 'next/link'
import React from 'react'
import { IoMdCart } from "react-icons/io";

const BottomHeader = () => {
  return (
    <div className='flex flex-wrap items-center justify-center sm:justify-end px-[5%] py-1 bg-[#f2efea]'>
        <ul className='flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10 text-[#4a6b92]'>
            <li className='hover:text-[gray] duration-300'>
                <Link href={'/'}>Log in</Link>
            </li>
            <li className='hover:text-[gray] duration-300 flex items-center'>
                <IoMdCart />
                <Link href={'/'}>Cart(0)</Link>
            </li>
            <li className='hover:text-[gray] duration-300'>
                <Link href={'/'}>Checkout</Link>
            </li>
        </ul>
    </div>
  )
}

export default BottomHeader
