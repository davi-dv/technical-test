import React from 'react'

import useModal from '@/hooks/useModal'

import CreateAccountModal from './CreateAccount'
import OrderSucessModal from './OrderSuccess'

const Modal = () => {
  const { modalName } = useModal()

  const modalComponents: Record<string, React.ReactNode> = {
    'create-account': <CreateAccountModal />,
    'order-success': <OrderSucessModal />
  }

  return (
    <>
      <div>{modalComponents[modalName]}</div>
    </>
  )
}

export default Modal
