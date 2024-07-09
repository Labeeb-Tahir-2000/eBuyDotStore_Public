import React,{useState,useContext,createContext} from 'react';
import {useCookies} from "react-cookie";

export const CartContext = createContext();

export const ProviderFunc = (props)=>{
    const [cartCookie] = useCookies(['cart']);   
    const [cartItem , setCartItem] = useState(typeof(cartCookie.cart) !== "undefined"? [...cartCookie.cart] : []);
 
 return(
     <CartContext.Provider value={[cartItem , setCartItem] }>
         {props.children}
     </CartContext.Provider>
 )

}

