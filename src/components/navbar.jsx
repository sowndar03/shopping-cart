import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';
import { FaSearch, FaHome, FaHeart } from 'react-icons/fa';
import  Autocomplete  from '@mui/joy/Autocomplete';
import { PRODUCTS } from '../pages/product';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

const Navbar = () => {
const {handleFilter} = useContext(ShopContext);
const [filter, setFilter] = useState("Instock");
const [query, setQuery] = useState("")

  const products = PRODUCTS.map((product) => {
    return {label: product.name};
  });

  return (
    <div className='navbar'>
      <div className='links'>
        <h1 className='header'>EMart</h1>
        <div className='searchBar'>
          {/* <FaSearch className='searchIcon' /> */}
          <Autocomplete onInputChange={(event, value) => {if(value !== null){handleFilter(filter, value);setQuery(value)};}}
              inputValue={query}
              onChange={(event,value)=>{if(value !== null){handleFilter(filter,value.label);setQuery(value.label);}}}
              value={query}
              startDecorator={<FaSearch />}
              placeholder="Search.."
              options={products}
              sx={{ width: 300, marginRight:1 }}
/>

<Select onChange={(event,value) =>{handleFilter(value, query);setFilter(value);}} defaultValue="Instock">
  <Option value="Instock">In-stock</Option>
  <Option value="Outstock">Out-of-stock</Option>
  <Option value="Male">Male</Option>
  <Option value="Female">Female</Option>
</Select>
        </div>
        <div className='home'>
          <Link to="/"><FaHome size={32} /></Link>
          <Link to="/Favourite"><FaHeart size={28} /></Link>
          <Link to="/cart" className='cartIcon'><ShoppingCart size={32} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
