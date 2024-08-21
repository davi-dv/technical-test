'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import useCartItems from '@/hooks/useCartItems'
import { IProduct } from 'src/types'

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<IProduct | null>(null)
  const { handleSetCartItems } = useCartItems()
  const router = useRouter()
  const pathImgs = '/imgs/tenis.jpg'
  const getProductById = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:3333/products/${params.id}`
      )
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.error('Failed to fetch product details:', error)
    }
  }, [params.id])

  useEffect(() => {
    getProductById()
  }, [getProductById])
  const goToCart = () => {
    router.push(`/cart`)
  }
  if (!product) return <p>Loading...</p>

  return (
    <main className="m-12 mx-auto flex max-w-[1280px] flex-col p-8 py-4 md:flex-row">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col space-y-4 md:w-1/4">
            <img
              src={pathImgs}
              alt="Imagem 1"
              className="h-[100px] w-full rounded-lg object-cover"
            />
            <img
              src={pathImgs}
              alt="Imagem 2"
              className="h-[100px] w-full rounded-lg object-cover"
            />
            <img
              src={pathImgs}
              alt="Imagem 3"
              className="h-[100px] w-full rounded-lg object-cover"
            />
            <img
              src={pathImgs}
              alt="Imagem 4"
              className="h-[100px] w-full rounded-lg object-cover"
            />
          </div>

          <div className="w-full md:w-3/4">
            <img
              src={'/imgs/tenis.jpg'}
              alt={product.nome}
              className="object-fit h-full w-full rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="text-initial">
            <p className="text-sm text-gray-600">{product.categoria}</p>
            <h1 className="mt-2 text-2xl font-semibold">{product.nome}</h1>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <img src="/icons/pix.svg" alt="" className="h-auto w-auto" />
            </div>
            <p className="text-sm text-gray-500 line-through">
              {' '}
              de R$ 8.9999,00
            </p>
            <p className="text-2xl font-bold">R$ {product.preço.toFixed(2)}</p>
            <p>
              no pix <span className="text-primary">10%</span> de desconto
            </p>
          </div>
          <button
            onClick={() => {
              handleSetCartItems(product)
              goToCart()
            }}
            className="mt-4 w-full rounded border-2 border-primary bg-primary px-4 py-2 text-gray-50"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </main>
  )
}
