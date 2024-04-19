import React, { useEffect } from 'react'
import { PRODUCTS } from '../product.js'
import Product from './product'
import './shop.css';
import { useContext, useState } from 'react';
import { ShopContext } from '../../context/shop-context.jsx';

const Shop = () => {

const {updated} = useContext(ShopContext);

const [filterUpdate, setFilterUpdate] = useState(updated.map((product) => <Product key={product.id} data={product} />));
useEffect(()=>{
  setFilterUpdate(updated.map((product) => {return <Product key={product.id} data={product} />}))
},[updated])
 
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <p>Handcrafts</p>
        </div> 
        <div className='products'>
          {filterUpdate}
        </div>
    </div>
  )
}

export default Shop