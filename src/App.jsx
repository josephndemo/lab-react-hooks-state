import { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  function handleAddToCart(product) {
    setCart(prevCart => [...prevCart, product])
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h1>🛒 Shopping App</h1>

      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <label>Filter by Category: </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        category={category}
        onAddToCart={handleAddToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App