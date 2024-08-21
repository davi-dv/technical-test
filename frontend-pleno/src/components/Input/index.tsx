import React from 'react'
import { IInput } from 'src/types'

export default function InputWithIcon({searchTerm, handleChange}: IInput) {
  return (
    <div className="relative w-full max-w-sm ">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
        onChange={handleChange}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <img src="/icons/lupa.svg" alt="" />
      </div>
    </div>
  )
}
