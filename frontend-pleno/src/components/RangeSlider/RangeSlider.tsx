import React, { useState } from 'react'
import './rangeSlider.css' 

export default function RangeSlider() {
  const [value, setValue] = useState(0) 

  const handleChange = (event) => {
    setValue(event.target.value)
  }

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
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={handleChange}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
          style={{
            background: `linear-gradient(to right, #FF7600 ${value}%, #F3F4F6 ${value}%)`
          }}
        />
      </div>
      <div className="mt-2 flex w-full justify-between text-sm text-gray-600">
        <span>0</span>
        <span>{value}</span>
        <span>100</span>
      </div>
    </div>
  )
}
