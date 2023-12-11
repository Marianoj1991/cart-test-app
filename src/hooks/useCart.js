import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart() {
  const context = useContext(CartContext)
  if(context === undefined) {
    throw new Error(`Try to use the context "CartContext" without being in it`)
  }

  return context
}
