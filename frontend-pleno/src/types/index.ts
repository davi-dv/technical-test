export interface IProduct {
  nome: string
  descrição: string
  preço: number
  imagem: string
  id: number
  categoria: string
}
export interface IAppContextType {
  products: IProduct[]
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
  cartItems: IProduct[]
  setCartItems: React.Dispatch<React.SetStateAction<IProduct[]>>
}
