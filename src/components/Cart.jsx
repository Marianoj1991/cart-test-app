import { CartIcon, ClearCartIcon } from './Icons'
import products from '../mocks/product.json'
const product = products.slice(0, 1)

import '../styles/cart.css'
import { useCart } from '../hooks/useCart'

export function Cart() {
  const { cart, addToCart, removeToCart, clearCart } = useCart()

  return (
    <>
      <label
        htmlFor='cart-check'
        className='cart-label'
      >
        <CartIcon />
      </label>
      <input
        type='checkbox'
        id='cart-check'
        className='checkbox-cart'
        s
      />
      <aside className='cart'>
        <ul className='cart-container'>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
          {cart?.map((prod) => (
            <li className='cart-product' key={prod.id}>
              <img
                src={prod.image}
                alt={prod.title}
              />
              <div>
                <strong>{prod.title} </strong>
                <span>Price </span>
                <span>${prod.price}</span>
              </div>
              <div className='div-quantity'>
                <p>Quantity: {prod.quantity}</p>
                <button onClick={() => addToCart(prod)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
