"use client";

import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { CartContext } from '../providers';

const BottomHeader = () => {
    const { cartVal } = useContext(CartContext);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // Update cart count only on the client side
        setCartCount(cartVal.length);
    }, [cartVal]); // Dependency array to update when cartVal changes

    return (
        <div className='flex flex-wrap items-center justify-center sm:justify-end px-[5%] py-1 bg-[#f2efea]'>
            <ul className='flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10 text-[#4a6b92]'>
                <li className='hover:text-[gray] duration-300'>
                    <Link href={'/login'}>Log in</Link>
                </li>
                <li className='hover:text-[gray] duration-300 flex items-center'>
                    <IoMdCart />
                    <Link href={'/cart'}>Cart ({cartCount})</Link> {/* Use cartCount state */}
                </li>
                <li className='hover:text-[gray] duration-300'>
                    <Link href={'/checkout'}>Checkout</Link>
                </li>
            </ul>
        </div>
    );
}

export default BottomHeader;
