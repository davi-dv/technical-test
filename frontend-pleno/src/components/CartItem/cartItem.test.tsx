import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'

import CartItem from '../CartItem'

jest.mock(
  '../QuantitySelector',
  () =>
    (props: {
      handleQuantityChange: (quantity: number) => void
      handleRemove: () => void
      quantity: number
      product: {
        nome: string
        preço: number
      }
    }) => (
      <div data-testid="quantity-selector">
        <button onClick={() => props.handleQuantityChange(props.quantity - 1)}>
          -
        </button>
        <span>{props.quantity}</span>
        <button onClick={() => props.handleQuantityChange(props.quantity + 1)}>
          +
        </button>
        <button onClick={() => props.handleRemove()}>Remove</button>
      </div>
    )
)

describe('CartItem Component', () => {
  const mockProduct = {
    nome: 'Sample Product',
    descrição: 'Sample Description',
    preço: 99.99,
    imagem: 'https://example.com/image.jpg',
    id: 1,
    categoria: 'Sample Category',
    quantity: 1
  }

  const mockHandleQuantityChange = jest.fn()
  const mockHandleRemove = jest.fn()

  const defaultProps = {
    product: mockProduct,
    quantity: mockProduct.quantity,
    handleQuantityChange: mockHandleQuantityChange,
    handleRemove: mockHandleRemove
  }

  it('should render product image, name, and price', () => {
    render(<CartItem {...defaultProps} />)

    expect(screen.getByAltText(mockProduct.nome)).toHaveAttribute(
      'src',
      mockProduct.imagem
    )
    expect(screen.getByText(mockProduct.nome)).toBeInTheDocument()
    expect(
      screen.getByText(`R$ ${mockProduct.preço.toFixed(2)}`)
    ).toBeInTheDocument()
  })

  it('should render the QuantitySelector component', () => {
    render(<CartItem {...defaultProps} />)

    expect(screen.getByTestId('quantity-selector')).toBeInTheDocument()
  })

  it('should call handleQuantityChange with the correct value when quantity buttons are clicked', () => {
    render(<CartItem {...defaultProps} />)

    fireEvent.click(screen.getByText('+'))
    expect(mockHandleQuantityChange).toHaveBeenCalledWith(
      mockProduct.quantity + 1
    )

    fireEvent.click(screen.getByText('-'))
    expect(mockHandleQuantityChange).toHaveBeenCalledWith(
      mockProduct.quantity - 1
    )
  })

  it('should call handleRemove when remove button is clicked', () => {
    render(<CartItem {...defaultProps} />)

    fireEvent.click(screen.getByText('Remove'))
    expect(mockHandleRemove).toHaveBeenCalled()
  })
})
