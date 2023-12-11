import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"

export function useFilters () {
  const context = useContext(FilterContext)
  if(!context) {
    throw new Error('Try to access to a FilterContext without being in it')
  }

  return context
}