"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

import useCartItems from '@/hooks/useCartItems';
import useProducts from '@/hooks/useProducts';
import { IProduct } from 'src/types';

import RangeSlider from '@/components/RangeSlider/RangeSlider';
import InputWithIcon from '@/components/Input';

export default function Catalog() {
  const { setProducts, products: allProducts } = useProducts();
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [options, setOptions] = useState<{ id: number; label: string }[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [priceValue, setPriceValue] = useState<number>(0); // Valor máximo inicial
  const { handleSetCartItems } = useCartItems();

  const router = useRouter();

  const handleChange = (id: number) => {
    setSelectedOptions((prevState) =>
      prevState.includes(id)
        ? prevState.filter((optionId) => optionId !== id)
        : [...prevState, id]
    );
  };

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3333/products');
      const data = await response.json();
      if (data) {
        const categoryMap = new Map<string, number>();

        data.forEach((item: IProduct) => {
          if (!categoryMap.has(item.categoria)) {
            categoryMap.set(item.categoria, item.id);
          }
        });
        const categoriesOptions = Array.from(categoryMap, ([label, id]) => ({ id, label }));

        setOptions(categoriesOptions);
        setProducts(data);
        setFilteredProducts(data);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }, [setProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {

    const filtered = allProducts.filter(product => {
      const matchesSearch = product.nome.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedOptions.length === 0 || selectedOptions.includes(product.id);
      const matchesPrice = product.preço >= priceValue 

      return matchesSearch && matchesCategory && matchesPrice
    });
    setFilteredProducts(filtered);
  }, [searchTerm, selectedOptions,  allProducts, priceValue]);

  const goToProductDetails = (id: string) => {
    router.push(`/productDetails/${id}`);
  };

  return (
    <div>
  
      <div className="flex flex-row justify-between  items-center p-8">
      <p className='font-bold'>{filteredProducts.length} produtos encontrados</p>
        <InputWithIcon
          searchTerm={searchTerm}
          handleChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
  
      <div className="flex flex-row  p-8 max-sm:flex-col rounded">
        <div className="mr-8 mt-4 p-3 bg-white">
          <h2 className="mb-4 text-lg font-semibold ">Categorias</h2>
          <div className="space-y-2  ">
            <div className="w-60">
              <InputWithIcon
                searchTerm={searchTerm}
                handleChange={(e) => setSearchTerm(e.target.value)}
              />
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
          </div>
          <div className='bg-white mt-4 rounded'>
          <RangeSlider
              min={0}
              max={4000} // Ajuste conforme o intervalo máximo dos produtos
              value={priceValue}
              onChange={setPriceValue}
            />
          </div>
        </div>
        <div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="grid"
                onClick={() => goToProductDetails(product.id)}
              >
                <div className="content-start">
                  <img
                    src={product.imagem}
                    alt={product.nome}
                    className="h-100 h-[330px] w-full rounded-lg object-fill"
                  />
                </div>
                <div className="mt-2 flex flex-col content-end">
                <h3 className="text-base text-gray-500 ">{product.categoria}</h3>
                <h3 className="text-lg font-semibold ">{product.nome}</h3>
                  <p className="text-sm text-gray-600">{product.descrição}</p>
                <h3 className="text-lg text-gray-500 line-through ">de {product.preço}</h3>
                <div className='flex flex-row items-center'>
                  <p className="text-2xl	font-bold">
                    R$ {product.preço.toFixed(2)}
                  </p>
                  <p className='text-primary ml-2'> 10% OFF</p>
                </div>
                </div>
                <div
                  className="content-end"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevenir que o click no botão também dispare o click no item
                    handleSetCartItems(product);
                  }}
                >
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
  );
}
