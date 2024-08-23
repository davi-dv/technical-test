import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuantitySelector from '.'; 
import { QuantitySelectorProps } from 'src/types'; 

describe('QuantitySelector Component', () => {
  const mockHandleQuantityChange = jest.fn();
  const mockHandleRemove = jest.fn();

  const mockProduct = {
    nome: 'Sample Product',
    descrição: 'Sample Description',
    preço: 99.99,
    imagem: 'https://example.com/image.jpg',
    id: 1,
    categoria: 'Sample Category',
    quantity: 1
  };

  const defaultProps: QuantitySelectorProps = {
    handleQuantityChange: mockHandleQuantityChange,
    handleRemove: mockHandleRemove,
    quantity: 1,
    product: mockProduct
  };

  it('should render the QuantitySelector component', () => {
    render(<QuantitySelector {...defaultProps} />);

    expect(screen.getByTestId('increment-button')).toBeInTheDocument();

    expect(screen.getByTestId('decrement-button')).toBeInTheDocument();

    expect(screen.getByAltText('Trash icon')).toBeInTheDocument();

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should call handleQuantityChange with the correct values when quantity buttons are clicked', () => {
    const {rerender} =render(<QuantitySelector {...defaultProps} />);


    fireEvent.click(screen.getByTestId('increment-button'));

    expect(mockHandleQuantityChange).toHaveBeenCalledWith(mockProduct.id, 2);

    defaultProps.quantity = 2;

    rerender(<QuantitySelector {...defaultProps} />);

    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(mockHandleQuantityChange).toHaveBeenCalledWith(mockProduct.id, 1); 
  
  });
  
  it('should call handleRemove with the correct product id when remove button is clicked', () => {
    render(<QuantitySelector {...defaultProps} />);

    fireEvent.click(screen.getByAltText('Trash icon'));
    expect(mockHandleRemove).toHaveBeenCalledWith(mockProduct.id);
  });
});
