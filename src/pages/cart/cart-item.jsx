import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

const CartItems= (props) => {
    const product = props.data
    const  {cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

    return (
    <div className='cartItem'>
        <img  src={product.imageURL} alt='' />
        <div className='description'>
            <p><b>{product.name}</b>
            </p>
            <p>
            ${product.price}
            </p>
            <div className='countHandler'>
              <button onClick={() => removeFromCart(product.id)}>-</button>
              <input value={cartItems[product.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}/>
              <button onClick={() => addToCart(product.id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems