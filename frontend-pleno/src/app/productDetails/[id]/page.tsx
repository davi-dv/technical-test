'use client'

import useCartItems from "@/hooks/useCartItems"
import { useEffect, useState } from "react"
import { IProduct } from 'src/types' // Certifique-se de que a interface IProduct está definida corretamente

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<IProduct | null>(null)
  const { handleSetCartItems } = useCartItems()

  const getProductById = async () => {
    try {
      const response = await fetch(`http://localhost:3333/products/${params.id}`)
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.error('Failed to fetch product details:', error)
    }
  }

  useEffect(() => {
    getProductById()
  }, [params.id])

  if (!product) return <p>Loading...</p>

  return (
    <main className="p-8 m-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col space-y-4 w-full md:w-1/4">
            <img
              src={'/imgs/tenis.jpg'} 
              alt="Imagem 1"
              className="w-full h-[100px] object-cover rounded-lg"
            />
            <img
              src={'/imgs/tenis.jpg'} 
              alt="Imagem 2"
              className="w-full h-[100px] object-cover rounded-lg"
            />
            <img
              src={'/imgs/tenis.jpg'} 
              alt="Imagem 3"
              className="w-full h-[100px] object-cover rounded-lg"
            />
            <img
              src={'/imgs/tenis.jpg'} 
              alt="Imagem 4"
              className="w-full h-[100px] object-cover rounded-lg"
            />
          </div>


          <div className="w-full md:w-3/4">
            <img
              src={'/imgs/tenis.jpg'} 
              alt={product.nome}
              className="w-full h-full object-fit rounded-lg"
            />
          </div>
        </div>


        <div className="flex flex-col justify-between	">
          <div className="text-initial">
            <p className="text-sm text-gray-600">{product.categoria}</p>
            <h1 className="text-2xl font-semibold mt-2">{product.nome}</h1>

          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <img src="/icons/pix.svg" alt="" className="w-auto h-auto" />
            </div>
            <p className="text-gray-500 line-through text-sm"> de R$ 8.9999,00</p>
             <p className="text-2xl	font-bold ">R$ {product.preço.toFixed(2)}</p>
             <p>no pix <span className="text-primary">10%</span> de desconto</p>
          </div>
          <button
            onClick={() => handleSetCartItems(product)}
            className="mt-4 w-full rounded border-2 border-primary  px-4 py-2 text-gray-50 bg-primary" 
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </main>
  )
}
