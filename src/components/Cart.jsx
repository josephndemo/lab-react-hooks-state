import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>🧺 Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart