import { Filters } from "./Filters";
// Styles
import '../styles/header.css'

export function Header() {
  return (
    <header className='header'>
      <h1>Cart Shop App 🛒</h1>
      <hr />
      <Filters />
    </header>
  )
}
