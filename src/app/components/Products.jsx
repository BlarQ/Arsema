"use client"

import Image from 'next/image';
import React, { useContext } from 'react';
import { CartContext } from '../providers';

const products = [
    { 
        id: 1, 
        name: 'Body Cream',
        wholesale: 45,
        retail: 50, 
        img: '/batana.jpg'
    },
    { 
        id: 2, 
        name: 'Face Cream',
        wholesale: 70, 
        retail: 75,
        img: '/batana.jpg'
    },
    { 
        id: 3, 
        name: 'CBD infused Raw Shea Butter',
        wholesale: 28, 
        retail: 30, 
        img: '/batana.jpg'
    },
    { 
        id: 4, 
        name: 'Raw Shea Butter',
        wholesale: 95, 
        retail: 100, 
        img: '/batana.jpg'
    },
];

const Products = () => {
    const { cartVal, setCartVal } = useContext(CartContext)

    function addValueToCart(product) {
        const existingProductIndex = cartVal.findIndex(item => item.id === product.id);
        
        if (existingProductIndex !== -1) {
            // Product already in the cart, increase quantity
            const updatedCart = [...cartVal];
            updatedCart[existingProductIndex].quantity += 1; // Increment quantity
            setCartVal(updatedCart);
        } else {
            // Product not in the cart, add it with quantity 1
            const updatedCart = [...cartVal, { ...product, quantity: 1 }];
            setCartVal(updatedCart);
        }
    
        // alert('Product added to cart!'); // Alert for demonstration purposes
    }
    

    return (
        <section className='py-10 px-[5%]'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Our Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {products.map((product) => (
                    <div key={product.id} className='border p-4 rounded shadow bg-white'>
                        <div className='flex justify-center mb-4'>
                            <Image 
                                src={product.img} 
                                width={200}
                                height={200}
                                alt={product.name}
                                className='rounded object-cover'
                            />
                        </div>

                        <div className='py-2'>
                            <h3 className='text-lg font-semibold text-center'>{product.name}</h3>
                            <p className='text-center'>Wholesale Price: ${product.wholesale}</p>
                            <p className='text-center'>Retail Price: ${product.retail}</p>
                        </div>

                        <button onClick={() => addValueToCart(product)} className='border p-2 rounded shadow hover:-translate-y-1 duration-300 bg-[#4a6b92] hover:bg-[#6990c0] text-[#f2efea] w-full mt-4'>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
