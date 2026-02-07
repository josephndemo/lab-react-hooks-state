import React from 'react'
import ProductCard from './ProductCard'

const products = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Milk', category: 'Dairy' },
  { id: 3, name: 'Banana', category: 'Fruits' }
]

const ProductList = ({ category, onAddToCart }) => {
  const filteredProducts =
    category === 'all'
      ? products
      : products.filter(p => p.category === category)

  return (
    <div>
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList