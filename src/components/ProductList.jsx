import ProductCard from './ProductCard'

const ProductList = ({ products = [], category, onAddToCart }) => {
  const filteredProducts =
    category === 'all'
      ? products
      : products.filter(p => p.category === category)

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  )
}

export default ProductList