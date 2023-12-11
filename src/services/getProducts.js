export async function getProducts (category) {
  const categories = category
  try {
    if( categories === 'all' ) {
    const resp = await fetch('https://fakestoreapi.com/products')
    const data = await resp.json()
    console.log(data)
    return data
  } else {
    const resp = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await resp.json()
    console.log(data)
    return data
  }
  } catch (err) {
    console.error('Error fetching products: ', err)
    throw err
  }
}