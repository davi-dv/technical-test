'use client'

import { createContext, useState, ReactNode } from 'react'

import { IAppContextType, IProduct } from 'src/types'

const defaultContextValue: IAppContextType = {
  products: [],
  setProducts: () => {},
  cartItems: [],
  setCartItems: () => {},
  handleSetCartItems: () => {}
}

export const appContext = createContext<IAppContextType>(defaultContextValue)

export function AppContext({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([])
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const handleSetCartItems = (product: IProduct) => {
    setCartItems((prevItems: IProduct[]) => {
      const itemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === product.id
      )
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems]
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: (updatedItems[itemIndex].quantity || 0) + 1
        }
        return updatedItems
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }
  const contextValue = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    handleSetCartItems
  }
  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  )
}
