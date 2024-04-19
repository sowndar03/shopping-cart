import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import '../shop/shop.css'
import { FaTrashAlt } from 'react-icons/fa';

const Favouriteitem = (props) => {

  const product = props.data;
  const {addToCart, cartItems, handleDelete} = useContext(ShopContext)
  const favouriteitemcount = cartItems[product.id]
  return (
    <div className='product'>
      <div className='trashButton'><FaTrashAlt onClick={() => handleDelete(product.id)}/></div>
      <div className='image'>
        <img src={product.imageURL} alt='' width={180} height={180} />
      </div>
      <div className='description'>
        <p>
          <b>{product.name}</b>
        </p>
        <p>${product.price}</p>
        <button className='addToCartButton' onClick={() => addToCart(product.id)}>
          Add To Cart {favouriteitemcount > 0 && <>({favouriteitemcount})</>}
        </button>
      </div>

    </div>
  );
}

export default Favouriteitem;