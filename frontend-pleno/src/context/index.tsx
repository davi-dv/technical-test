'use client'

import { createContext, useState, ReactNode } from 'react'
import { IProduct } from 'src/types'

export const appContext = createContext<any>(null)

export function AppContext ({ children }: { children: ReactNode })  {
  const [products, setProducts] = useState<any[]>([])
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const contextValue = {
    products,
    setProducts,
    cartItems,
    setCartItems
  }
  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  )
}
