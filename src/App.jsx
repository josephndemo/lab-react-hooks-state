import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'


const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Cart state
  const [cart, setCart] = useState([])

  // Category filter state
  const [category, setCategory] = useState('all')

  // Add to cart handler
  function handleAddToCart(product) {
    setCart(prevItems => [...prevItems, product])
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark mode toggle */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Category filter */}
      <label>Filter by Category: </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product list */}
      <ProductList
        category={category}
        onAddToCart={handleAddToCart}
      />

      {/* Cart */}
      <Cart cartItems={cart} />
    </div>
  )
}

export default App