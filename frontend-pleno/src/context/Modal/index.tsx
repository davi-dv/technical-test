import React, { createContext, useState, ReactNode } from 'react'

import { IModalContextType } from 'src/types'

const defaultContextValue: IModalContextType = {
  openModal: () => {},
  modalName: '',
  onClose: () => {},
  isOpen: false,
  onSuccess: () => {},
  handleCreateAccountSuccess: () => {}
}
export const ModalContext =
  createContext<IModalContextType>(defaultContextValue)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalName, setModalName] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  const openModal = (name: string) => {
    setModalName(name)
    setIsOpen(true)
  }
  const handleCreateAccountSuccess = () => {
    setModalName('order-success')
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
    setModalName('')
  }
  const onSuccess = () => {
    setIsOpen(false)
    setModalName('')
  }
  const contextValue = {
    openModal,
    modalName,
    isOpen,
    onClose,
    onSuccess,
    handleCreateAccountSuccess
  }

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}
