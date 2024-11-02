"use client"

import React, { useContext, useState } from 'react';
import { CartContext } from '../providers'; // Import the CartContext
import Footer from '../components/Footer';

const CheckoutPage = () => {
    const { cartVal } = useContext(CartContext); // Access cartVal from context
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: ''
    });

    // Calculate total prices
    const totalWholesale = cartVal.reduce((total, product) => total + (product.wholesale * product.quantity), 0);
    const totalRetail = cartVal.reduce((total, product) => total + (product.retail * product.quantity), 0);

    const handleChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from the event target
        setCustomerInfo({
            ...customerInfo,
            [name]: value // Update the customerInfo state
        });
    };

    const handleCheckout = () => {
        // payment processing logic
        alert('Proceeding to payment...'); // For demonstration purposes
    };

    return (
        <div className='pt-32'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Checkout</h2>
            {cartVal.length === 0 ? (
                <div className='flex items-center justify-center min-h-[57vh]'>

                    <p className='text-center text-lg text-red-400'>Your cart is empty!</p>
                </div>
            ) : (
                <div className='px-[5%] pb-10'>
                    <h3 className='text-lg font-semibold mb-4'>Your Order</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {cartVal.map((product) => (
                            <div key={product.id} className='border p-4 rounded shadow bg-white'>
                                <h4 className='text-lg font-semibold text-center'>{product.name}</h4>
                                <p className='text-center'>Quantity: {product.quantity}</p>
                                <p className='text-center'>Wholesale Price: ${product.wholesale}</p>
                                <p className='text-center'>Retail Price: ${product.retail}</p>
                            </div>
                        ))}
                    </div>

                    {/* Total Price Section */}
                    <div className='mt-8'>
                        <h3 className='text-lg font-bold'>Total Prices</h3>
                        <p className='text-center'>Total Wholesale Price: ${totalWholesale.toFixed(2)}</p>
                        <p className='text-center'>Total Retail Price: ${totalRetail.toFixed(2)}</p>
                    </div>

                    {/* Customer Information Form */}
                    <form className='mt-8 px-[5%]'>
                        <div className='mb-4'>
                            <label className='block mb-2' htmlFor='name'>Name</label>
                            <input 
                                type='text' 
                                name='name' 
                                id='name' 
                                value={customerInfo.name} 
                                onChange={handleChange} 
                                className='border p-2 w-full rounded' 
                                required 
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block mb-2' htmlFor='email'>Email</label>
                            <input 
                                type='email' 
                                name='email' 
                                id='email' 
                                value={customerInfo.email} 
                                onChange={handleChange} 
                                className='border p-2 w-full rounded' 
                                required 
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block mb-2' htmlFor='address'>Address</label>
                            <input 
                                type='text' 
                                name='address' 
                                id='address' 
                                value={customerInfo.address} 
                                onChange={handleChange} 
                                className='border p-2 w-full rounded' 
                                required 
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block mb-2' htmlFor='paymentMethod'>Payment Method</label>
                            <input 
                                type='text' 
                                name='paymentMethod' 
                                id='paymentMethod' 
                                value={customerInfo.paymentMethod} 
                                onChange={handleChange} 
                                className='border p-2 w-full rounded' 
                                required 
                                placeholder='e.g., Credit Card, PayPal'
                            />
                        </div>

                        <button 
                            type='button' 
                            onClick={handleCheckout} 
                            className='bg-[#4a6b92] hover:bg-[#6990c0] text-white font-bold py-2 px-4 rounded'
                        >
                            Checkout
                        </button>
                    </form>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default CheckoutPage;
