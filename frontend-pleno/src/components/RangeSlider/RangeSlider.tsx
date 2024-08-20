import React, { useState } from 'react';
import './rangeSlider.css'; // Importa o CSS personalizado

export default function RangeSlider() {
  const [value, setValue] = useState(0); // Valor inicial do slider

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-1">
      <label htmlFor="range-slider" className="text-lg font-semibold mb-2">Preço</label>
      <div className="relative w-full">
        {/* Slider */}
        <input
          id="range-slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{ background: `linear-gradient(to right, #FF7600 ${value}%, #F3F4F6 ${value}%)` }}
        />

      </div>
      <div className="flex justify-between w-full mt-2 text-sm text-gray-600">
        <span>0</span>
        <span>{value}</span>
        <span>100</span>
      </div>
    </div>
  );
}
