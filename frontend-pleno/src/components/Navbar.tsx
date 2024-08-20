'use client'
import { useState } from 'react'
import useCartItems from '@/hooks/useCartItems';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const {cartItems} = useCartItems()
  const t = {
    teste: '',
    dd: ''
  };
  console.log(cartItems,  'cart items')
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav>
      <div className="bg-white">
        <div className="md:pt-custom-top md:pr-custom-right md:pb-custom-bottom md:pl-custom-left flex w-full items-center justify-between p-4">
          <div className="flex items-center">
            <img src="/icons/logo.svg" alt="Logo" />
          </div>

          <div className="hidden space-x-4 md:flex">
          <a href="#" className="flex items-center">
              <img
                src="/icons/shop.svg"
                alt="User"
                width={16}
                height={16}
                className="mr-2"
              />
              <p>carrinho</p>
            </a>

            <span className="flex items-center">
              <img
                src="/icons/user.svg"
                alt="User"
                width={16}
                height={16}
                className="mr-2"
              />
              Entrar
            </span>
          </div>

          <button
            className="p-2 text-gray-500 focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
          <div className="flex flex-col items-start space-y-4 p-4">
          <a href="#" className="flex items-center">
              <img
                src="/icons/shop.svg"
                alt="User"
                width={16}
                height={16}
                className="mr-2"
              />
           <p>Carrinho</p>
            </a>

            <a href="#" className="flex items-center">
              <img
                src="/icons/user.svg"
                alt="User"
                width={16}
                height={16}
                className="mr-2"
              />
              Entrar
            </a>
          </div>
        </div>
        
      </div>
    </nav>
  )
}
