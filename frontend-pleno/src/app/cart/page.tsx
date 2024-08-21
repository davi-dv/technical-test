'use client'
import React from 'react'

import useCartItems from '@/hooks/useCartItems'

import CartItem from '@/components/CartItem'
import SummaryOrder from '@/components/SummaryOrder'

const Cart = () => {
  const { cartItems, setCartItems } = useCartItems()

  const handleRemove = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.preço * (item.quantity || 1),
    0
  )
  const shipping = 10
  const total = subtotal + shipping

  return (
    <div className="container mx-auto max-w-[1280px] p-8 md:flex-col">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              handleRemove={handleRemove}
              quantity={item.quantity || 1}
              handleQuantityChange={handleQuantityChange}
            />
          ))}
        </div>

        <div className="ml-4 w-full max-w-[1280px] border border-gray-100 p-4 md:w-1/4">
          <SummaryOrder subtotal={subtotal} shipping={shipping} total={total} />
        </div>
      </div>
    </div>
  )
}

export default Cart
