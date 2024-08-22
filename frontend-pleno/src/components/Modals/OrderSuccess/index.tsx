import React from 'react'

import useModal from '@/hooks/useModal'

const OrderSucessModal = () => {
  const { onClose } = useModal()

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
          {/* Header do Modal */}
          <div className="flex items-center justify-between border-b p-4">
            <img className="text-xl" src="/icons/user.svg" alt="User Icon" />
            <span className="text-lg text-gray-500">Sucesso!</span>
            <button
              className="text-xl"
              onClick={onClose}
              aria-label="Fechar modal"
            >
              <img className="text-xl" src="/icons/x.svg" alt="Close Icon" />
            </button>
          </div>
          <div className="m-4 flex flex-col items-center justify-center p-2">
            <div>
              <img src="/imgs/success.svg" alt="" />
            </div>
            <h1 className="font-semibold">Seu pedido foi concluído!</h1>
            <p className="text-gray-400">
              Retornaremos com atualizações em seu e-mail.
            </p>
          </div>
          <div className="flex justify-center p-2">
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-2 py-2 text-white"
              onClick={onClose}
            >
              Entendi
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderSucessModal
