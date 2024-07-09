import React,{useContext,useState,useEffect} from "react";
import './cartJSX.css'
import { CartContext } from "../cartContext/cartContext";

function CartProducts (props){
  
    const [cartItem,setCartItem] = useContext(CartContext)
    useEffect(() => {
        setTotalPriceFunc();
        props.totalPrice(totalPrice)
    }, [cartItem])
    let totalPrice = 0;
    const setTotalPriceFunc =()=> props.product.map(item=>{
      totalPrice= totalPrice + (item.pPrice) * cartItem.filter((itemID)=> itemID === item._id).length;
    })
    
   const renderItems = () => (
       
        props.product && props.product.map(product => (
            <tr key={product._id}>
                <td >
                    <img style={{ width: '70px' }} alt="product" 
                    src={product.pImagePath} />
                </td> 
                <td style={{paddingTop:'25px',color:'rgb(104, 104, 104)'}} >{product.pTitle}</td>
                <td style={{paddingTop:'25px',color:'rgb(104, 104, 104)'}}>{product.pDescription}</td>
                <td style={{paddingTop:'25px',color:'rgb(104, 104, 104)'}}>{cartItem.filter((itemID)=> itemID === product._id).length}</td>
                <td style={{ paddingTop:'25px',color:'red' }} >Rs. {product.pPrice} </td>
                <td style={{paddingTop:'25px'}}><button style={{background:'rgb(237, 33, 33)' , border:'1px' , color :' white'}}
                onClick={()=> props.removeItem(product._id)}
                > Remove </button> </td>
                
            </tr>
           
        ))
    )

    return( 
        <div>  
               
                <div className='displayLarge'>
                 <table className="table  table-hover" style={{outlineStyle: 'solid',outlineWidth:'thin',outlineColor:'rgb(178, 178, 178)',textAlign:'center'}}>
                     <thead  style={{background:'rgb(56, 188, 255)',color:'white'}}>
                         <tr>
                             <th>Product Image</th>
                             <th>Product Title</th>
                             <th>Product Description</th>
                             <th>Number of Items</th>
                             <th>Price per Item</th>
                             <th>Remove Item</th>
                         </tr>
                     </thead>
                     <tbody  style={{background:'white'}} >
                         {renderItems()}
                     </tbody>
                 </table>
             </div>
             
    </div> 
    )
};
export default CartProducts;