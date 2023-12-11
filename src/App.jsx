// Styles
import './styles/App.css'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import { CartContextProvider } from './context/CartContext'

export default function App() {
  const { productsFiltered } = useFilters()

  return (
    <CartContextProvider>
      <main className='App'>
        <Header />
        <Products products={productsFiltered} />
        <Cart />
      </main>
    </CartContextProvider>
  )
}
