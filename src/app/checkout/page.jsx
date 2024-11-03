"use client";

import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import { CartContext } from '../providers'; // Import the CartContext
import Footer from '../components/Footer';

const CheckoutPage = () => {
    const { cartVal } = useContext(CartContext); // Access cartVal from context
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        address: '',
        mobile: '', // Added mobile field
        paymentMethod: ''
    });
    const [errors, setErrors] = useState({});
    const [isPaypalLoaded, setIsPaypalLoaded] = useState(false);

    // Calculate total based on wholesale if quantity > 6, else retail
    const total = cartVal.reduce((total, product) => {
        const price = product.quantity > 6 ? product.wholesale : product.retail;
        return total + (price * product.quantity);
    }, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo({
            ...customerInfo,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!customerInfo.name) newErrors.name = 'Name is required';
        if (!customerInfo.email) newErrors.email = 'Email is required';
        if (!customerInfo.address) newErrors.address = 'Address is required';
        if (!customerInfo.mobile) newErrors.mobile = 'Mobile number is required';
        if (!customerInfo.paymentMethod) newErrors.paymentMethod = 'Payment method is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCheckout = async () => {
        if (validateForm()) {
            loadPaypalScript();
            await sendOrderToBackend(); // Send order data to backend before payment
        }
    };

    // Function to send purchase information to the backend
    const sendOrderToBackend = async () => {
        try {
            const orderData = {
                customerInfo,
                products: cartVal.map(product => ({
                    id: product.id,
                    name: product.name,
                    quantity: product.quantity,
                    price: product.quantity > 6 ? product.wholesale : product.retail
                })),
                totalAmount: total.toFixed(2),
            };

            const response = await axios.post('/api/orders', orderData); // Adjust endpoint as needed
            console.log("Order sent to backend:", response.data);
        } catch (error) {
            console.error("Error sending order to backend:", error);
        }
    };

    const handlePaymentSuccess = (details) => {
        alert(`Transaction completed by ${details.payer.name.given_name}`);
        sendOrderToBackend(); // Optional: Send order after payment if needed
    };

    const loadPaypalScript = () => {
        if (!isPaypalLoaded) {
            const script = document.createElement("script");
            script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`;
            script.onload = () => setIsPaypalLoaded(true);
            document.body.appendChild(script);
        }
    };

    useEffect(() => {
        if (isPaypalLoaded) {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: total.toFixed(2)
                            }
                        }]
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then(details => handlePaymentSuccess(details));
                }
            }).render('#paypal-button-container');
        }
    }, [isPaypalLoaded, total]);

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
                        <h3 className='text-lg font-bold'>Total Price</h3>
                        <p className='text-center'>Total: ${total.toFixed(2)}</p>
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
                            {errors.name && <p className='text-red-500'>{errors.name}</p>}
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
                            {errors.email && <p className='text-red-500'>{errors.email}</p>}
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
                            {errors.address && <p className='text-red-500'>{errors.address}</p>}
                        </div>

                        <div className='mb-4'>
                            <label className='block mb-2' htmlFor='mobile'>Mobile Number</label>
                            <input 
                                type='tel' 
                                name='mobile' 
                                id='mobile' 
                                value={customerInfo.mobile} 
                                onChange={handleChange} 
                                className='border p-2 w-full rounded' 
                                required 
                            />
                            {errors.mobile && <p className='text-red-500'>{errors.mobile}</p>}
                        </div>

                        <div className='mb-4'>
                            <label className='block mb-2' htmlFor='paymentMethod'>Payment Method</label>
                            <select 
                                name='paymentMethod' 
                                id='paymentMethod' 
                                value={customerInfo.paymentMethod} 
                                onChange={handleChange} 
                                className='border p-2 w-full rounded' 
                                required
                            >
                                <option value=''>Select Payment Method</option>
                                <option value='Credit Card'>Credit Card</option>
                                <option value='PayPal'>PayPal</option>
                                <option value='Bank Transfer'>Bank Transfer</option>
                            </select>
                            {errors.paymentMethod && <p className='text-red-500'>{errors.paymentMethod}</p>}
                        </div>

                        <button 
                            type='button' 
                            onClick={handleCheckout} 
                            className='bg-[#4a6b92] hover:bg-[#6990c0] text-white font-bold py-2 px-4 rounded'
                        >
                            Checkout
                        </button>
                    </form>

                    {/* PayPal Button Container */}
                    {isPaypalLoaded && (
                        <div className="flex items-center px-[20%] justify-center mt-8">
                            <div className='w-full' id="paypal-button-container"></div>
                        </div>
                    )}
                </div>
            )}

            <Footer />
        </div>
    );
};

export default CheckoutPage;
