import React,{useState,useEffect,useContext} from 'react';
import Axios from 'axios';
import { useCookies } from 'react-cookie';

import CartProducts from '../Admin/showOrders/CartJSX';
import '../buyNow/buyNow.css';
import { useLocation } from "react-router-dom";
import { useHistory,Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAddressCard ,faThumbtack,faSignature, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';



function BuyNow(){
  const history = useHistory();
  const [productsIDs, setProductsIDs] = useState([])
 
    const [cookie] = useCookies(['jwt']);
    const [products , setProducts] = useState([]);
    const location = useLocation();
    const [count,setCount] = useState(0);
    const [totalPrice , setTotalPrice] = useState(0);
    const [user, setUser] = useState({});
  
    
 
    useEffect(async() => {  
        getUser()
    }, [])
    
    const getUser=async()=>{
      try{
        const res = await Axios.post('http://localhost:3000/api/v1/users/allOrders',{ID :'LoggedInUser'},
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.jwt}`        
            }
        }
        );

          setUser(res.data.users[0])
          productsIDFunc(res.data.users[0].orderedProducts)
   
      }catch(err){
        console.log(err)
      }
    }

const  getProducts = async (idArray) =>{
      try{
        console.log(idArray)
      const res = await  Axios.post('http://localhost:3000/api/v1/products/getCartProducts ',{id:idArray}, {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.jwt}`        
        }});
        if(res){
          console.log(res.data.product)
        setProducts(res.data.product.sort((a, b) => parseFloat(a.pPrice) - parseFloat(b.pPrice)))
       
        }
      }catch(err){
        if(err.response){
          console.log(err.response.data.message)
        }else{
          console.log(err.message)
        }
       
      }
    }
    
 
const  productsIDFunc=(products)=>{
  
    let ID =[];
    products.map(item=>{
          ID.push(item._id)
    })
    
    setCount(ID.length)
    setProductsIDs(ID)
    getProducts(ID)
}

 const cartProdcutsHeader = <div >
                              <div className="row " style={{color:'white',paddingTop:'8px', paddingBottom:'0px',backgroundColor:'rgb(242, 0, 255)',textAlign:'center'}}>
                                <h3>Following orders are not yet delivered</h3>
                              </div>
                              <div className="row " style={{color:'white',paddingTop:'8px', paddingBottom:'0px',backgroundColor:'rgb(0, 191, 255)', display:'flex-inline' , justifyContent:'center',alignContent:'center'}}> 
                                <div className='col-6' style={{ display:'flex',justifyContent:'start'}}>
                                  <p><span style={{color:'black'}}>{count}</span> ITEM(s)</p>
                                </div>
                                <div className='col-6 ' style={{ display:'flex',justifyContent:'space-between',textAlign:'end'}}>
                                  <p style={{ textAlign:'start'}}>PRICE</p>
                                  <p style={{ textAlign:'end'}}>QUANTITY</p>
                                </div>
                              </div>
                            </div>
const cartProductsDisplay = products.map(item=>{
  return <CartProducts product={[...products]} productID={[...productsIDs]} totalPrice={totalPrice=>{totalPriceHandler(totalPrice)}} imageURL ={item.pImagePath} id={item._id} title={item.pTitle} price={item.pPrice} description={item.pDescription}/>
      })

      const totalPriceHandler =(price)=>{
        setTotalPrice(price)
      }


        
    return(
        <div className='container-fluid outSide' >
      
             {products.length ===0 || user==={}?
              <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
             <h1>No Pending Orders.......</h1>
             </div>
             :
            <div className='row ' id='addressCartFooter' style={{display:'flex',position:'relative' , justifyContent:'space-between'}} >  
                   
                 <div className='col-12 col-md-7 myCart ' style={{display:'flex',flexDirection:'column'}}>
                
                  
                  <div style={{marginBottom:'80px'}}>
  
                  {cartProdcutsHeader}
                  {cartProductsDisplay} 
                  </div>
                  
                   
                </div>
               
                <div className='col-12 col-md-5 myAddressBook'  >
                  <div className='row myOrderDetailsAndAddress' style={{background:'white',display:'flex-block',justifyContent:'center',marginLeft:'4px',marginRight:'4px'}}>
                      
                      <div className='col-12 col-sm-7 col-md-12'>
                      <div style={{display:'flex',justifyContent:'center',paddingTop:'10px',paddingLeft:'10px',paddingRight:'10px',textAlign:'center'}}>
                          <h5 style={{width:'100%', border:'0px', background:'#F57224' , color:'white',paddingTop:'8px',paddingBottom:'8px',textAlign:'center'}} >Shipping Address</h5>
                      </div>  
                      <div style={{padding:'12px 1px 10px 25px'}}> 
                        <div> <p><FontAwesomeIcon style={{color:'rgb(231, 44, 234)',marginRight:'7px',fontSize:'13px'}} icon={faSignature}/>{user.address.name}</p> </div>
                        <div> <p><FontAwesomeIcon  style={{color:'rgb(231, 44, 234)',marginRight:'7px',fontSize:'13px'}} icon={faPhoneAlt}/>{user.address.contact}</p> </div>
                        <div> <p><FontAwesomeIcon  style={{color:'rgb(231, 44, 234)',marginRight:'7px',fontSize:'13px'}} icon={faAddressCard}></FontAwesomeIcon>{user.address.address}</p> </div>
                        <div> <p><FontAwesomeIcon  style={{color:'rgb(231, 44, 234)',marginRight:'10px',fontSize:'13px'}} icon={faThumbtack}></FontAwesomeIcon>{user.address.cityName}, {user.address.provinceName}</p> </div>
                      </div>
                      </div>

                      <div className='col-12 col-sm-5 col-md-12'>
                        <div className='orderDetailHeading' style={{display:'flex',justifyContent:'center',paddingTop:'10px',paddingLeft:'10px',paddingRight:'10px',textAlign:'center'}}>
                            <h5 style={{width:'100%', border:'0px', background:'#F57224' , color:'white',paddingTop:'8px',paddingBottom:'8px',textAlign:'center'}} >Order Details</h5>
                        </div>  
                        <div className='myOrderDetails' style={{padding:'12px 25px 10px 25px'}}>
                          <div style={{display:'flex', justifyContent:'space-between'}}>
                            <p>Subtotal ({count} items) </p>
                            <p>Rs. {totalPrice}</p>
                           </div> 
                          
                           <div style={{display:'flex', justifyContent:'space-between'}}> 
                            <h5>Total</h5>
                            <h5 style={{color:'rgb(252, 22, 22)'}}>Rs. {totalPrice}</h5>
                           </div> 

                        </div> 
                        
                      </div>
                  </div>
               </div>
              
               <div className='container-fluid' style={{position:'fixed',borderTop:'2px solid blue' , height:'10%',alignItems:'center',display:"flex",alignContent:'center', justifyContent:'space-around', bottom:'0px',background:'white',left:'0px',width:'100%'}}>
                <h4 >Total:<span style={{color:'red',marginTop:'0px'}}> Rs. {totalPrice}</span></h4>
              </div>
            </div>
            
             }
             
        </div>
    )
}
export default BuyNow;