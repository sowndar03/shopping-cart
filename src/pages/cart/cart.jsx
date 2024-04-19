import React, { useContext } from 'react'
import {PRODUCTS} from  "../product.js"
import  {ShopContext}  from "../../context/shop-context"
import CartItems from "./cart-item"
import './cart.css'

import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const  {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>(
          cartItems[product.id] !==0) && <CartItems data={product} />
        )}
      </div>
      {totalAmount > 0 ? <div className='checkout'>
        <p>Subtotal:  ${totalAmount}</p>
        <button onClick={() =>navigate("/")}>Continue Shopping</button>
        <button onClick={() =>navigate("/Payment")}>Checkout</button>
      </div> : <h1>Your Cart is Empty!</h1> }
      
    </div>
  )
}

export default Cart