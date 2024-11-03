'use client'

import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Load initial cart value from local storage or set to an empty array
    const [cartVal, setCartVal] = useState(() => {
        if (typeof window !== "undefined") {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    // Save cartVal to local storage whenever it changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('cart', JSON.stringify(cartVal));
        }
    }, [cartVal]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCartVal((prevCart) => [...prevCart, item]); // Update cart state
    };

    // Function to remove an item from the cart (example)
    const removeFromCart = (itemId) => {
        setCartVal((prevCart) => prevCart.filter(item => item.id !== itemId)); // Update cart state
    };

    return (
        <CartContext.Provider value={{ cartVal, setCartVal, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
