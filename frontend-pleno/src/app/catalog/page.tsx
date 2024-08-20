'use client'
import InputWithIcon from '@/components/Input'
import RangeSlider from '@/components/RangeSlider/RangeSlider'
import useCartItems from '@/hooks/useCartItems'
import useProducts from '@/hooks/useProducts'
import { useState, useEffect } from 'react'
import { IProduct } from 'src/types'

export default function Catalog() {
  const { setProducts, products } = useProducts()
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])
  const [options, setOptions] = useState<{ id: number, label: string }[]>([]);
  const {setCartItems} = useCartItems()

  const handleChange = (id: number) => {
    setSelectedOptions((prevState) =>
      prevState.includes(id)
        ? prevState.filter((optionId) => optionId !== id)
        : [...prevState, id]
    )
  }


  const [data, setData] = useState<IProduct[]>([])

  const getCategories = (data:IProduct[]) => {
    const categoriesOptions = data.map(item => {
      return {
        id: item.id,
        label: item.categoria
      }
    })
    console.log(categoriesOptions, 'categorie options')
    setOptions(categoriesOptions);
    return options
  }
  const getProducts = async () => {
    const response = await fetch('http://localhost:3333/products')
    const data = await response.json()
    if (data) {
      getCategories(data)
    }

    setData(data)
    setProducts(data)
  }
  const addToCart = (item: IProduct) => {
    setCartItems(prevItems => {
      // Verifica se o item já está no carrinho
      const itemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (itemIndex !== -1) {
        // Item já existe no carrinho, atualize a quantidade
        const updatedItems = [...prevItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1, // Incrementa a quantidade
        };
        return updatedItems;
      } else {
        // Item não existe no carrinho, adicione-o com quantidade inicial 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div >
      <div className="flex items-center justify-between p-8 	">
        {<p> {products.length} produtos encontrados</p>}
        <InputWithIcon />

      </div>
      <div className='flex justify-center flex-row max-sm:flex-col p-8'>
        <div className="mr-8 mt-4">
          <h2 className="mb-4 text-lg font-semibold">Categorias</h2>
          <div className="space-y-2">
          <div className="w-60">
            <InputWithIcon/>
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
       <RangeSlider/>
          </div>

        </div>
        <div>
       
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3  ">
          {products.map(product => (
            <div key={product.id} className=" grid  ">
              <div className=' content-start'>
              <img src={product.imagem} alt={product.nome} className="w-full h-100 h-[330px]  object-fill		rounded-lg" />
              </div>
              <div className='mt-2 flex flex-col content-end'>
                <h3 className="text-lg font-semibold">{product.nome}</h3>
                <p className="text-sm text-gray-600">{product.descrição}</p>
                <p className="text-lg font-bold mt-2">R$ {product.preço.toFixed(2)}</p>

              </div>
              <div className="content-end"  onClick={()=> addToCart(product)}>
              <button className="bg-white border-2 border-primary text-primary py-2 px-4 rounded w-full mt-4  ">
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
