'use client'
import { useContext } from 'react'

import { appContext } from '@/context/index'

export default function useCartItems() {
  const { cartItems, setCartItems, handleSetCartItems } = useContext(appContext)
  return { cartItems, setCartItems, handleSetCartItems }
}
