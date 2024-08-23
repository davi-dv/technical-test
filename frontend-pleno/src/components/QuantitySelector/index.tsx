import { QuantitySelectorProps } from 'src/types'

export default function QuantitySelector({
  handleQuantityChange,
  handleRemove,
  quantity,
  product
}: QuantitySelectorProps) {
  return (
    <div className="flex flex-row">
      <div
        className="mr-2 h-full w-12 cursor-pointer rounded bg-gray-100 px-2 py-1"
        onClick={() => handleRemove(product.id)}
      >
        <img src="/icons/trash.svg" alt="Trash icon" />
      </div>
      <div className="flex items-center rounded bg-gray-100">
        <button
          onClick={() => handleQuantityChange(product.id, quantity - 1)}
          disabled={quantity <= 1}
          className="h-full w-12 rounded bg-gray-100 px-2 py-1"
          data-testid="decrement-button"
        >
          -
        </button>
        <span className="h-full w-12 rounded bg-gray-100 px-4 py-1 text-center">
          {quantity}
        </span>
        <button
          onClick={() => handleQuantityChange(product.id, quantity + 1)}
          className="h-full w-12 rounded border-none bg-gray-100 px-2 py-1"
          data-testid="increment-button"
        >
          +
        </button>
      </div>
    </div>
  )
}
