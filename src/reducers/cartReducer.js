import { types } from "../types/cartTypes";

const initialState = []

export function cartReducer (state, action) {
  const { type, payload } = action

  switch (type) {
    case types.ADD_TO_CART: {
      // check if product exist in cart
      const indexProduct = state.findIndex((prod) => prod.id === payload.id)

      if (indexProduct >= 0) {
        const newCart = structuredClone(state)
        newCart[indexProduct].quantity += 1
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart
      }
      const newCart = [
        ...state,
        {
          ...payload,
          quantity: 1
        }
      ]
      window.localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart;
    }

    case types.REMOVE_FROM_CART: {
       const newCart = state.filter(prod => prod.id != payload.id)
    
      window.localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart;
    }
      
    case 'CLEAR_CART': 
      const newCart = initialState
      window.localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
  }
}