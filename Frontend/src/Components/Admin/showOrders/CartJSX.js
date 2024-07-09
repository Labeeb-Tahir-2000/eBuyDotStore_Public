import React,{useContext,useState,useEffect} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './cartJSX.css';


function CartProducts (props){
    const [QTY,setQTY] = useState()

    useEffect(() => {
       
            setQTY(props.productID.filter((itemID)=> itemID === props.id).length);
            setTotalPriceFunc();
            props.totalPrice(totalPrice)
 
    }, [props.product,props.productID])
    
    let totalPrice = 0;
    const setTotalPriceFunc =()=> props.product.map(item=>{
      totalPrice= totalPrice + (item.pPrice) * props.productID.filter((itemID)=> itemID === item._id).length;
    })
 
    return( 
        <div>  
                
                <div className="row cartExternel " style={{backgroundColor:'white', display:'flex-inline' , alignItems:'center'}} >
                    <div className='col-6 ' style={{ display:'flex' , alignItems:'center',margin:'0px', padding:'0px'}}>
                        <img className='col-auto cartImage' style={{ display:'inline',marginBottom:'2px', padding:'0px'}} src={props.imageURL}></img>
                        <div className='col-auto 'style={{ display:'inline'}}>
                            <p className='title' style={{ paddingBottom:'0px', marginBottom:'0px'}}>{props.title}</p>
                            <p style={{ paddingTop:'0px', marginTop:'2px',color:'blue'}}>{props.description}</p>
                        </div>
                    </div>
                    <div className='col-6 cartDetail' style={{ display:'flex',margin:'0px', padding:'0px',justifyContent:'space-between'}}>
                        <div className='col-auto ' style={{ display:'inline'}} >
                             <h6 style={{fontWeight:'bold' , color:'red'}}>Rs. {props.price} </h6>
                             <p style={{fontSize:'10px', color:'black'}}>per Item</p>
                            
                        </div>
                        <div className='col-auto ' style={{display:'flex',justifyContent:'space-between', flexDirection:'column'}} >
                            <h6 style={{ color:'rgb(135, 135, 135)'}}>QTY: <span style={{color:'rgb(42, 237, 139)',fontWeight:'bold'}}>{QTY}</span></h6>
                          {props.removeItem?
                            <button   style={{border:'none',fontSize:'20px',display:'flex',marginBottom:'4px',  marginLeft:'14px',padding:'0px', backgroundColor:'white', color:'rgb(249, 22, 22)'}}
                            onClick={()=> props.removeItem(props.id)}
                            > <FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon> </button>
                           :
                           null} 
                        </div>
                       
                    </div>
                </div>
               

                
    </div> 
    )
};
export default CartProducts;