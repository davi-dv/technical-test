export interface IProduct {
  nome: string
  descrição: string
  preço: number
  imagem: string
  id: number
  categoria: string
  quantity?: number | ""
}
export interface IAppContextType {
  products: IProduct[]
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
  cartItems: IProduct[]
  setCartItems: React.Dispatch<React.SetStateAction<IProduct[]>>
  handleSetCartItems: (product:IProduct) => void
}
