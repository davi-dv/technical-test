'use client'
import { useContext } from 'react'

import { ModalContext } from '@/context/Modal'

export default function useModal() {
  const {
    openModal,
    modalName,
    isOpen,
    onClose,
    onSuccess,
    handleCreateAccountSuccess
  } = useContext(ModalContext)
  return {
    openModal,
    onClose,
    onSuccess,
    modalName,
    isOpen,
    handleCreateAccountSuccess
  }
}
