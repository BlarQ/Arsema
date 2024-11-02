
"use client"
import React, { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartVal, setCartVal] = useState([])
  return (
    <div>
        <CartContext.Provider value={{cartVal, setCartVal }}>
            {children}
        </CartContext.Provider>
    </div>
  )
}

export {CartContext, CartProvider}