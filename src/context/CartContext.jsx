import { createContext, useReducer, useState } from 'react'
import { cartReducer } from '../reducers/cartReducer'
import { types } from '../types/cartTypes'

export const CartContext = createContext()

const cartInitialState = () => {
  return JSON.parse(window.localStorage.getItem('cart')) || []
}

export function CartContextProvider ({children}) {

  const [ cart, dispatch ] = useReducer(cartReducer, null, cartInitialState)

  const addToCart = (product) => {

    dispatch({
      type: types.ADD_TO_CART,
      payload: product
    })

    // // check if product exist in cart
    // const indexProduct = cart.findIndex(prod => prod.id === product.id)
    // if(indexProduct >= 0) {
    //   const newCart = structuredClone(cart)
    //   newCart[indexProduct].quantity += 1
    //   window.localStorage.setItem('cart', JSON.stringify(newCart))
    //   setCart(newCart)
    //   return
    // }

    // const newCart = [
    //   ...cart,
    //   {
    //     ...product,
    //     quantity: 1
    //   }
    // ]
    // window.localStorage.setItem('cart', JSON.stringify(newCart))
    // setCart(newCart)
  }

  const removeToCart = (product) => {

    dispatch({
      type: types.REMOVE_FROM_CART,
      payload: product
    })
    // const newCart = cart.filter(prod => prod.id != product.id)
    
    // window.localStorage.setItem('cart', JSON.stringify(newCart))
    // setCart(newCart)
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    })

    // const newCart = []
    // setCart(newCart)
    // window.localStorage.setItem('cart', JSON.stringify(newCart))
  }

  return ( 
    <CartContext.Provider value={{cart, addToCart, removeToCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}