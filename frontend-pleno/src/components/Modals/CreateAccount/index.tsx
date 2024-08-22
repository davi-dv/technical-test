import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import useModal from '@/hooks/useModal'
import { IFormInputs } from 'src/types'

const CreateAccountModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>()
  const { handleCreateAccountSuccess, onClose } = useModal()

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log('Dados do Formulário:', data)
    handleCreateAccountSuccess()
  }

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
            <span className="text-lg text-gray-500">Cadastre-se</span>
            <button
              className="text-xl"
              onClick={onClose}
              aria-label="Fechar modal"
            >
              <img className="text-xl" src="/icons/x.svg" alt="Close Icon" />
            </button>
          </div>

          {/* Body do Modal */}
          <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  type="text"
                  id="nome"
                  {...register('nome', { required: 'Nome é obrigatório' })}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
                  placeholder="Seu nome"
                />
                {errors.nome && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.nome.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Email inválido'
                    }
                  })}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
                  placeholder="Seu email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="telefone"
                  {...register('telefone', {
                    required: 'Telefone é obrigatório'
                  })}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
                  placeholder="Seu telefone"
                />
                {errors.telefone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.telefone.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="senha"
                  {...register('senha', { required: 'Senha é obrigatória' })}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
                  placeholder="Sua senha"
                />
                {errors.senha && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.senha.message}
                  </p>
                )}
              </div>
              <div className="flex justify-center p-2">
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-2 py-2 text-white"
                >
                  Criar minha conta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAccountModal
