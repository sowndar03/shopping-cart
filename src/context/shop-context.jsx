import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../pages/product';
import Product from '../pages/shop/product';


export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}
const getDefaultFavorite = () =>{
    let favorite = {};
    for(let i=1;i<=PRODUCTS.length;i++){
        favorite[i]=0;
    }
return favorite
}


const ShopcontextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [favorite, setFavorite] = useState(getDefaultFavorite())
    const [updated, setUpdated] = useState(PRODUCTS);

    const handleFilter = (filter, query) =>{
        const filterProducts = [...PRODUCTS].filter((product)=>
        {
            switch(filter){
                case "Instock":
                    return product.is_in_inventory === true;
                case "Outstock":
                    return product.is_in_inventory === false;
                case "Male":
                    return product.gender === "MEN";
                case "Female":
                    return product.gender === "WOMEN"
            }
        })
        const product=[...filterProducts].filter((product)=>{
            if(query!==""){
                return product.name.toLowerCase().includes(query.toLowerCase());
            }
            else{
                return product;
            }   
        });
           
        
        setUpdated(product)
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for( const item in cartItems){
            if(cartItems[item] >0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
        }
    }
    return totalAmount;
}

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const updateCartItemCount = (newAmount, itemId) =>{
        setCartItems((prev) =>({
            ...prev, [itemId]: newAmount
        }))
    }

    const addToFavorite = (itemId) =>{
        setFavorite((prev) => ({...prev, [itemId]: prev[itemId] +1}))
    }

    const handleDelete = (itemId) =>{
        setFavorite((prev) => ({...prev, [itemId]: prev[itemId] -1}))
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        favorite,
        addToFavorite,
        updated,
        handleFilter,
        handleDelete
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopcontextProvider;
