import { useState } from 'react'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { products as initialProducts } from './mocks//products.json'
import { useFilters } from './Hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './Context/cart'


function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={ filteredProducts }/>
    </CartProvider>
  )
}

export default App
