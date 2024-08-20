'use client'
import { useState, useEffect, useCallback } from 'react'

import useCartItems from '@/hooks/useCartItems'
import useProducts from '@/hooks/useProducts'
import { IProduct } from 'src/types'

import InputWithIcon from '@/components/Input'
import RangeSlider from '@/components/RangeSlider/RangeSlider'
import { useRouter } from 'next/navigation'

export default function Catalog() {
  const { setProducts, products } = useProducts()
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])
  const [options, setOptions] = useState<{ id: number; label: string }[]>([])
  const { handleSetCartItems } = useCartItems()
  let t = {
    d: ''
  };
  const router = useRouter()
  const handleChange =  (id: number) => {
    setSelectedOptions((prevState) =>
      prevState.includes(id)
        ? prevState.filter((optionId) => optionId !== id)
        : [...prevState, id]
    )
  }

  const getProducts = useCallback(async () => {
    const response = await fetch('http://localhost:3333/products')
    const data = await response.json()
    if (data) {
      const categoriesOptions = data.map((item: IProduct) => ({
        id: item.id,
        label: item.categoria
      }))
      setOptions(categoriesOptions)
      setProducts(data)
    }
  }, [setProducts])

  const goToProductDetails = (id:string) => {
    router.push(`/productDetails/${id}`)
  }
  useEffect(() => {
    getProducts()
  }, [getProducts])
  return  (
    <div >
      <div className="flex items-center justify-between p-8">
        {<p> {products.length} produtos encontrados</p>}
        <InputWithIcon />
      </div>
      <div className="flex flex-row justify-center p-8 max-sm:flex-col">
        <div className="mr-8 mt-4">
          <h2 className="mb-4 text-lg font-semibold">Categorias</h2>
          <div className="space-y-2">
            <div className="w-60">
              <InputWithIcon />
            </div>

            {options.map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`checkbox-${option.id}`}
                  checked={selectedOptions.includes(option.id)}
                  onChange={() => handleChange(option.id)}
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor={`checkbox-${option.id}`}
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  {option.label}
                </label>
              </div>
            ))}
            <RangeSlider />
          </div>
        </div>
        <div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" >
            {products.map((product) => (
              <div key={product.id} className="grid" onClick={() => goToProductDetails(product.id)}>
                <div className="content-start">
                  <img
                    src={product.imagem}
                    alt={product.nome}
                    className="h-100 h-[330px] w-full rounded-lg object-fill"
                  />
                </div>
                <div className="mt-2 flex flex-col content-end">
                  <h3 className="text-lg font-semibold">{product.nome}</h3>
                  <p className="text-sm text-gray-600">{product.descrição}</p>
                  <p className="mt-2 text-lg font-bold">
                    R$ {product.preço.toFixed(2)}
                  </p>
                </div>
                <div className="content-end" onClick={() => handleSetCartItems(product)}>
                  <button className="mt-4 w-full rounded border-2 border-primary bg-white px-4 py-2 text-primary">
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
