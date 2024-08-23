import { fireEvent, screen, render } from '@testing-library/react'

import InputWithIcon from '.'

describe('Input Component', () => {
  const handleChangeMock = jest.fn()
  const searchTermMock = ''
  it('should render Input component', () => {
    render(<InputWithIcon handleChange={handleChangeMock} searchTerm={searchTermMock} />)
  })
  it('should call handleChange when the input value changes', () => {
    render(<InputWithIcon handleChange={handleChangeMock}  searchTerm={'test'}/>)
    const inputElement = screen.getByPlaceholderText('Pesquisar...')
    fireEvent.change(inputElement, { target: { value: 'test' } })

    expect(handleChangeMock).toHaveBeenCalled()
    const event = handleChangeMock.mock.calls[0][0]
    expect(event.target.value).toBe('test')
  })
})
