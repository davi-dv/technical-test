import useModal from '@/hooks/useModal'
import { SummaryProps } from 'src/types'

export default function SummaryOrder({
  subtotal,
  shipping,
  total
}: SummaryProps) {
  const { openModal } = useModal()

  const handleSetModalVisible = () => {
    openModal('create-account')
  }

  return (
    <>
      <div className="mt-4 flex flex-col pt-4">
        <div className="mb-2 flex justify-between">
          <span>Subtotal:</span>
          <span>R$ {subtotal.toFixed(2)}</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span>Frete:</span>
          <span>R$ {shipping.toFixed(2)}</span>
        </div>
        <div className="mb-4 flex justify-between">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">R$ {total.toFixed(2)}</span>
        </div>
        <button
          className="w-full rounded-lg bg-primary px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => handleSetModalVisible()}
        >
          Finalizar Pedido
        </button>
      </div>
    </>
  )
}
