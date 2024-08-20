'use client'
import { useContext } from 'react'

import { appContext } from '@/context/index'

export default function useProducts() {
  const { products, setProducts } = useContext(appContext)
  return { products, setProducts }
}
