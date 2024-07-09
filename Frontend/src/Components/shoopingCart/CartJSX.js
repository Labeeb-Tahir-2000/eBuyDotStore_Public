import React,{useContext} from "react";
import { CartContext } from "../cartContext/cartContext";

import './cartJSX.css';

function CartProducts (props){
    
    const [cartItem,setCartItem] = useContext(CartContext)
    return( 
        <div>  
              
                <div className="row externel displaySmall" style={{marginTop:'10px',backgroundColor:'white', display:'flex-inline' , alignItems:'center'}} >
                    <div className='col-4 ' style={{ display:'flex-inline' , alignItems:'center'}}>
                        <img className='image'src={props.imageURL}></img>
                    </div>
                    <div className='col-5 detail' style={{ display:'flex-inline' , alignItems:'center' }}>
                       <h4>{props.title}</h4>
                       <p style={{ color:'rgb(135, 135, 135)', fontSize:'15px'}}>QTY: <span style={{color:'rgb(42, 237, 139)',fontSize:'16px',fontWeight:'bold'}}>{cartItem.filter((itemID)=> itemID === props.id).length}</span></p>
                       <p style={{ color:'blue'}}>{props.description}</p>
                       <p style={{fontWeight:'bold' , color:'red'}}>Rs. {props.price} <span style={{fontWeight:'normal', color:'black', fontSize:'11px'}}>per Item</span></p>
                    </div>
                    <div className='col-3'  style={{ display:'flex-inline' , alignItems:'center', marginLeft:'0px',paddingLeft:'2px' }}>
                    <button style={{background:'rgb(237, 33, 33)' , border:'1px' , color :' white'}}
                        onClick={()=> props.removeItem(props.id)}
                        > Remove </button>
                    </div>
                </div>

                
    </div> 
    )
};
export default CartProducts;