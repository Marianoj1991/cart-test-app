import React from 'react'
import ReactDom from 'react-dom/client'

// Styles
import './style.css'
import App from './src/App'
import { FilterContextProvider } from './src/context/FilterContext'

const root = ReactDom.createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </React.StrictMode>
)
