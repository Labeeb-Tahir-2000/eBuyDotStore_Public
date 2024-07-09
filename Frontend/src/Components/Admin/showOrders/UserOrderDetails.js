import React,{useState,useEffect,useContext} from 'react';
import Axios from 'axios';
import { useCookies } from 'react-cookie';

import CartProducts from './CartJSX';
import '../../buyNow/buyNow.css';
import { useLocation } from "react-router-dom";
import { useHistory,Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAddressCard ,faThumbtack,faSignature, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { getSuggestedQuery } from '@testing-library/dom';
import { UserContext } from '../../userContext/UserContext';


function BuyNow(){
  const history = useHistory();
  const [productsIDs, setProductsIDs] = useState([])
    const [productListEdited, setProductListEdited] = useState('')
    const [cookie] = useCookies(['jwt']);
 const [shippingFee, setShippingFee] = useState()
    const [products , setProducts] = useState([]);
    const location = useLocation();
    const [count,setCount] = useState(0);
    const [totalPrice , setTotalPrice] = useState(0);
    const [user, setUser] = useState({});
    let firstRender = true
    const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
 
    useEffect(async() => {
      if(location.state){
        if(firstRender){
        getUser(location.state.user._id)

        }
      }else{
       console.log('no user sended here')
      }
    
     
    }, [productListEdited])
    
    const getUser=async(id)=>{
      try{
        const res = await Axios.post('http://localhost:3000/api/v1/users/allOrders',{ID :id},
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
          if(res.data.product.length === 0){
            history.push({pathname:'/Orders'})
          }
        setProducts(res.data.product.sort((a, b) => parseFloat(a.pPrice) - parseFloat(b.pPrice)))
        setProductListEdited('yes')
        }
      }catch(err){
        if(err.response){
          console.log(err.response.data.message)
        }else{
          console.log(err.message)
        }
       
      }
    }
    
 
const  productsIDFunc=(product)=>{
  
    let ID =[];
    product.map(item=>{
          ID.push(item._id)
    })
    
    setCount(ID.length)
    setProductsIDs(ID)
    getProducts(ID)
}
const removeItem = (productId) => {
  console.log(productId)
  const productsArray = [...productsIDs]

    const index=  productsArray.indexOf(productId);

    productsArray.splice(index,1)
   
   updateProductList(productsArray)
       
 }
const allOrdersDelivered=()=>{
  updateProductList([])
}
 const  updateProductList=async(productList)=>{
  try{
 
    const res = await Axios.post('http://localhost:3000/api/v1/users/updateOrdersList',{productList:productList,userID:user._id},
    {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.jwt}`        
        }
    }
    );
      if(res){
        console.log('it is product',res.data.user.orderedProducts)  
        productsIDFunc(res.data.user.orderedProducts)   
        firstRender = false
      }
        
  }catch(err){
    console.log(err)
  }

}
 const cartProdcutsHeader = <div  className="row " style={{color:'white',paddingTop:'8px', paddingBottom:'0px',backgroundColor:'rgb(0, 191, 255)', display:'flex-inline' , justifyContent:'center',alignContent:'center'}}>
                              <div className='col-6' style={{ display:'flex',justifyContent:'start'}}>
                                <p><span style={{color:'black'}}>{count}</span> ITEM(s)</p>
                              </div>
                              <div className='col-6 ' style={{ display:'flex',justifyContent:'space-between',textAlign:'end'}}>
                                <p style={{ textAlign:'start'}}>PRICE</p>
                                <p style={{ textAlign:'end'}}>QUANTITY</p>
                              </div>
                            </div>

const cartProductsDisplay = products.map(item=>{
  return <CartProducts product={[...products]} productID={[...productsIDs]} totalPrice={totalPrice=>{totalPriceHandler(totalPrice)}} removeItem={removeItem} imageURL ={item.pImagePath} id={item._id} title={item.pTitle} price={item.pPrice} description={item.pDescription}/>
      })
      const totalPriceHandler =(price)=>{
        setTotalPrice(price)
        if(price > 1000)setShippingFee(0)
        if(price >=500 && price <= 1000)setShippingFee(30)
        if(price < 500 )setShippingFee(50)
      }


        
    return(
      <>
     
      {userLoggedIn.length !== 0 ?
     
      <>
  {userLoggedIn.role === 'admin'?  
        <div className='container-fluid outSide' >
      
             {products.length ===0 || user==={}?
             <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
             <h1>No products to show</h1>
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
                            <p>Shipping fee</p>
                            <p>Rs. {shippingFee}</p>
                           </div>
                           <div style={{display:'flex', justifyContent:'space-between'}}> 
                            <h5>Total</h5>
                            <h5 style={{color:'rgb(252, 22, 22)'}}>Rs. {totalPrice + shippingFee}</h5>
                           </div> 

                        </div> 
                        
                      </div>
                  </div>
               </div>
              
               <div className='container-fluid' style={{position:'fixed',borderTop:'2px solid blue' , height:'10%',alignItems:'center',display:"flex",alignContent:'center', justifyContent:'space-around', bottom:'0px',background:'white',left:'0px',width:'100%'}}>
                <h4 >Total:<span style={{color:'red',marginTop:'0px'}}> Rs. {totalPrice + shippingFee}</span></h4>
                <button onClick={allOrdersDelivered} style={{textAlign:'center',textDecoration:'none', marginBottom:'5px', border:'solid red',padding:'3px ' ,width:'200px', background:'rgb(247, 142, 4)', color:'white'}}>Delivered</button>
              </div>
            </div>
            
             }
             
        </div>
          	:
            history.push({pathname:'/'})
                            }
            </>
  :
  <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
      <h2>Loading.....</h2>
   </div> 
                  }
  </>
    )
}
export default BuyNow;