import { createContext, useEffect, useState } from 'react'
// import initialProducts from '../mocks/product.json'
import { getProducts } from '../services/getProducts'

export const FilterContext = createContext()

export function FilterContextProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  const [productsState, setProductsState] = useState({
    products: []
  })

 const getProductsAsync = async () => {
   try {
     const productEndPoint = await getProducts(filters.category)
     setProductsState((currentState) => ({
       ...currentState,
       products: productEndPoint
     }))
   } catch (error) {
     console.error('Error fetching products:', error)
   }
 }

  useEffect(() => {
    getProductsAsync()
  }, [filters])

  const filterProducts = (products) => {
    return products.filter(
      (prod) =>
        prod.price >= filters.minPrice &&
        (filters.category === 'all' || prod.category === filters.category)
    )
  }

  const productsFiltered = filterProducts(productsState.products)
  // const productsFiltered = filterProducts(initialProducts)

  return (
    <FilterContext.Provider value={{ filters, setFilters, productsFiltered }}>
      {children}
    </FilterContext.Provider>
  )
}
