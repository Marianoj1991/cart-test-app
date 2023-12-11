import { useFilters } from "../hooks/useFilters"

export function Filters () {
  const { filters, setFilters } = useFilters()

  const handlePriceChange = (e) => {
    const newPrice = e.target.value
    setFilters(currentFilters => ({
      ...currentFilters,
      minPrice: newPrice
    }))
  }

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value
    setFilters(currentFilters => ({
      ...currentFilters,
      category: newCategory
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor='price'>Prices from: </label>
        <input
          onChange={handlePriceChange}
          type='range'
          min='0'
          max='1000'
          id='price'
        />
      <span>{ filters.minPrice }</span>
      </div>
      <div>
        <label htmlFor='category'>Category: </label>
        <select id='category' onChange={handleCategoryChange}>
          <option value='all'>All</option>
          <option value="men's clothing">Men's clothing</option>
          <option value='jewelery'>Jewelery</option>
          <option value='electronics'>Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>
    </section>
  )
}
