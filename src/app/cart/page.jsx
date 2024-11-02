"use client"

import React, { useContext } from 'react';
import { CartContext } from '../providers'; // Import the CartContext
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const CartPage = () => {
    const { cartVal, setCartVal } = useContext(CartContext); // Access cartVal and setCartVal from context

    // Function to remove an item from the cart
    const removeFromCart = (id) => {
        const updatedCart = cartVal.filter((product) => product.id !== id); // Filter out the product by its id
        setCartVal(updatedCart); // Update the cart context state
    };

    // Calculate total wholesale and retail prices
    const totalWholesale = cartVal.reduce((total, product) => total + (product.wholesale * product.quantity), 0);
    const totalRetail = cartVal.reduce((total, product) => total + (product.retail * product.quantity), 0);

    return (
        <div>
            <Hero />
            <h2 className='text-2xl font-bold mb-4 text-center py-10'>Your Cart</h2>
            {cartVal.length === 0 ? ( // Check if the cart is empty
                <div className='min-h-[15vh]'>
                    <p className='text-center text-xl text-red-400'>Your cart is empty!</p>
                </div>
            ) : (
                <div className='pb-20 px-[5%]'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {cartVal.map((product) => (
                            <div key={product.id} className='border p-4 rounded shadow bg-white'>
                                <div className='flex justify-center mb-4'>
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className='rounded object-cover w-32 h-32' // Adjust as needed
                                    />
                                </div>

                                <div className='py-2'>
                                    <h3 className='text-lg font-semibold text-center'>{product.name}</h3>
                                    <p className='text-center'>Wholesale Price: ${product.wholesale}</p>
                                    <p className='text-center'>Retail Price: ${product.retail}</p>
                                    <p className='text-center'>Quantity: {product.quantity}</p> {/* Display quantity */}
                                </div>

                                <button 
                                    onClick={() => removeFromCart(product.id)} 
                                    className='border p-2 rounded shadow hover:-translate-y-1 duration-300 bg-red-500 hover:bg-red-700 text-white w-full mt-4'
                                >
                                    Remove from Cart
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    {/* Total Price Section */}
                    <div className='mt-8'>
                        <h3 className='text-lg font-bold'>Total Prices</h3>
                        <p className='text-center'>Total Wholesale Price: ${totalWholesale.toFixed(2)}</p>
                        <p className='text-center'>Total Retail Price: ${totalRetail.toFixed(2)}</p>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default CartPage;
