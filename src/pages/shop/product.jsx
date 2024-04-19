import React, { useContext, useState } from 'react';
import './shop.css';
import { ShopContext } from '../../context/shop-context';
import { FaHeart } from 'react-icons/fa';

const Product = (props) => {
  const product = props.data;
  const isStock = product.is_in_inventory ? 'in-stock' : 'out-of-stock';

  const { addToCart, cartItems, addToFavorite } = useContext(ShopContext);
  const [color, setColor] = useState(true);

  const handleChange = () => {
    setColor((prevColor) => !prevColor);
  };

  const cartItemAmount = cartItems[product.id];

  return (
    <div className='product'>
      <div className='heartButton' onClick={handleChange} style={{ color: color ? 'white' : 'red' }}>
        <FaHeart onClick={() => addToFavorite(product.id)} />
      </div>
      <div className='image'>
        <img src={product.imageURL} alt='' width={180} height={180} />
      </div>

      <div className='description'>
        <p>
          <b>{product.name}</b>
        </p>
        <p>${product.price}</p>
        <button className='addToCartButton' onClick={() => addToCart(product.id)}>
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
        <p className={isStock}>{product.is_in_inventory ? 'In Stock' : 'Out of Stock'}</p>
      </div>
    </div>
  );
};

export default Product;
