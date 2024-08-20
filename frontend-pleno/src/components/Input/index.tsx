import React from 'react';

export default function InputWithIcon() {
  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <img src="/icons/lupa.svg" alt="" />
      </div>
    </div>
  );
}
