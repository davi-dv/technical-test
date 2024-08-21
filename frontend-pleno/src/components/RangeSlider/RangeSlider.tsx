import React, { useState } from 'react';
import './rangeSlider.css';
import { RangeSliderProps } from 'src/types';

export default function RangeSlider({ min, max, value, onChange }: RangeSliderProps) {
  // Atualiza o estado local com o valor do slider
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(event.target.value)); // Converte o valor para número
  };

  return (
    <div className="flex flex-col items-center p-1">
      <label htmlFor="range-slider" className="mb-2 text-lg font-semibold">
        Preço
      </label>
      <div className="relative w-full">
        {/* Slider */}
        <input
          id="range-slider"
          type="range"
          min={min}
          max={max}
          step="1"
          value={value}
          onChange={handleChange}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
        />
      </div>
      <div className="mt-2 flex w-full justify-between text-sm text-gray-600">
        <span>{min}</span>
        <span>{value}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
