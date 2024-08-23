export interface IProduct {
  nome: string
  descrição: string
  preço: number
  imagem: string
  id: number
  categoria: string
  quantity: number
}
export interface IAppContextType {
  products: IProduct[]
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
  cartItems: IProduct[]
  setCartItems: React.Dispatch<React.SetStateAction<IProduct[]>>
  handleSetCartItems: (product: IProduct) => void
}
export interface CartItemProps {
  product: IProduct
  onRemove: (id: number) => void
  onQuantityChange: (id: number, quantity: number) => void
}
export interface SummaryProps {
  subtotal: number
  shipping: number
  total: number
}
export interface QuantitySelectorProps {
  quantity: number
  handleQuantityChange: (id: number, newQuantity: number) => void
  handleRemove: (id: number) => void
  product: IProduct
}
export interface CartItemProps {
  product: IProduct
}

export interface IInput {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export interface RangeSliderProps {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
}

export interface IModalContextType {
  openModal: (name: string) => void
  onClose: () => void
  modalName: string
  isOpen: boolean
  onSuccess: () => void
  handleCreateAccountSuccess: () => void
}
export interface IFormInputs {
  nome: string
  email: string
  telefone: string
  senha: string
}
