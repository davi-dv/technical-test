import { QuantitySelectorProps } from 'src/types'

import QuantitySelector from '../QuantitySelector'

export default function CartItem(props: QuantitySelectorProps) {
  return (
    <div className="flex flex-col py-4 md:flex-row">
      <div className="w-full flex-shrink-0 md:w-1/3">
        <img
          src={props.product.imagem}
          alt={props.product.nome}
          className="h-32 w-full rounded-lg object-cover"
        />
      </div>

      <div className="flex w-full flex-col justify-between pl-4">
        <div className="mb-2 flex flex-col">
          <h3 className="text-2xl">{props.product.nome}</h3>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-xl font-semibold">
            R$ {props.product.preço.toFixed(2)}
          </p>
          <QuantitySelector
            handleQuantityChange={props.handleQuantityChange}
            handleRemove={props.handleRemove}
            quantity={props.quantity}
            product={props.product}
          />
        </div>
      </div>
    </div>
  )
}
