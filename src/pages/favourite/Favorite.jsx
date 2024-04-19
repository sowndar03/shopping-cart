import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../product';
import { ShopContext } from '../../context/shop-context';
import { useContext, useMemo } from 'react';
import Favouriteitem from './favouriteitem';
import '../shop/shop.css';

const Favourite = () => {
  const navigate = useNavigate();  
  const { favorite} = useContext(ShopContext);
  
  const sumOfFav = useMemo(() => {
      let sum = 0;

    for (const key in favorite) {
      if (favorite.hasOwnProperty(key)) {
        sum += favorite[key];
      }
    }

    return sum;
  },[favorite])

  return (
    <div className='favoriteshop'>
      <div>
        <h1>Favourite Items</h1>
      </div>


        <div className='favoriteproduct'>
          {PRODUCTS.map((product) => (
            favorite[product.id] > 0 && <Favouriteitem key={product.id} data={product} />
          ))}</div>
        <button className={`checkout1 ${sumOfFav === 0 && "checkout1hidden"}`} onClick={() => navigate("/")}>Continue Shopping</button>
    </div>
  );
};

export default Favourite;
