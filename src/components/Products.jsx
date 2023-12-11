import { AddToCartIcon } from './Icons'

// Styles 
import '../styles/products.css'
import { useCart } from '../hooks/useCart'

function ProductsList({ products }) {
  const { addToCart } = useCart()

  return (
    <ul className='products'>
      {products.map((prod) => (
        <li className='product' key={prod.id}>
          <img
            src={prod.image}
            alt={prod.title}
          />
          <div>
            <strong>{prod.title}</strong> - <span>${prod.price}</span>
          </div>
          <button onClick={() => addToCart(prod)}>
            <AddToCartIcon />
          </button>
        </li>
      ))}
    </ul>
  )
}

export function Products({ products }) {
  const hasMovies = products?.length > 0
  return hasMovies && <ProductsList products={products} />
}
