import React,{useState,useEffect,useContext} from 'react';
import Axios from 'axios';
import { useCookies } from 'react-cookie';
import { CartContext } from "../cartContext/cartContext";
import CartProducts from './CartJSX';
import './buyNow.css';
import { useLocation } from "react-router-dom";
import { useHistory,Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAddressCard ,faThumbtack,faSignature, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import useBuyNow from './useBuyNow';

function BuyNow(props){
  const history = useHistory();
  const [displayShippingDetails, setDisplayShippingDetails] = useState('none')
    const  [showAddress, setShowAddress] = useState(false)
    const  [userAddress, setUserAddress] = useState();
    const [cartDisplay, setCartDisplay] = useState(false)
    const [cookie] = useCookies(['jwt']);
    const [cartItem , setCartItem] = useContext(CartContext);
    const [products , setProducts] = useState([]);
    const location = useLocation();
    const [count,setCount] = useState(0);
    const [totalPrice , setTotalPrice] = useState(0);
    const [shippingFee, setShippingFee] = useState();
    const [ previousTotal, setPreviousTotal] = useState(0)
    const [cartCookie, setCartCookie] = useCookies(['cart']);  
    
    const submit = useBuyNow(location.state,previousTotal , totalPrice , shippingFee);
 
    useEffect(async() => {
      if(location.state){ // if user have clicked for checkout directly from hame note from cart
     
        cartItemsRequestFunc(location.state)// for single product
        setCartDisplay(true)
      }else{
        cartItemsRequestFunc(cartItem);
      }
        addressRequestFunc();
      if(location.state){
          setCount(1)
    
      }else{
          setCount(cartItem.length)
      }
     
    }, [cartItem])

    const cartItemsRequestFunc=async(id)=>{
        try{
        const res = await  Axios.post('http://localhost:3000/api/v1/products/getCartProducts ',{id:id}, {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.jwt}`        
            }});
            
              setProducts(res.data.product);
              console.log(res.data.product)
            
            
          }catch(err){
            if(err.response){
              console.log(err.response.data.message)
            }else{
              console.log(err.message)
            }
           
          }
    }

    const addressRequestFunc= async()=>{
        try{
        const res= await  Axios.post('http://localhost:3000/api/v1/users/getUser',{},{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.jwt}`        
        }});
        console.log(res.data.user)
            if(res.data  && res.data.status === "success" && res.data.user.address ){
              if(res.data.user.orderedProducts){
                  if(res.data.user.orderedProducts.length > 0){
                    const productsArray = res.data.user.orderedProducts
                    let previousTotal = 0;
                    productsArray.map(item=>{
                      previousTotal= previousTotal + (item.pPrice) ;
                    })
                    setPreviousTotal(previousTotal)
                   
                  }
              }
              setUserAddress(res.data.user.address)
                setShowAddress(true)
            }
                
          }catch(err){
            if(err.response){
              console.log(err.response.data.message)
            }else{
              console.log(err.message)
            }
    }
}

const removeItem = (productId) => {
    const index=  cartItem.indexOf(productId);
    let arrayItems = [...cartItem];//hard copying array so to implement splice() on it 
   arrayItems.splice(index,1)
   setCartCookie('cart', arrayItems, { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) });  
   setCartItem(arrayItems); // setting cartItem to spliced array       
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
    return <CartProducts product={[...products]} totalPrice={totalPrice=>{totalPriceHandler(totalPrice)}} cartDisplay={cartDisplay} removeItem={removeItem} imageURL ={item.pImagePath} id={item._id} title={item.pTitle} price={item.pPrice} description={item.pDescription}/>
        })

const totalPriceHandler =(price)=>{
          setTotalPrice(price)
       console.log(previousTotal)
            if(price+previousTotal > 1000) setShippingFee(0);
            else if(price+previousTotal >=500 && price+previousTotal <= 1000) setShippingFee(30)
            else if(price+previousTotal < 500 ) setShippingFee(50)
   
        }
const displayShippingDetailsFunc=()=>{
  console.log(displayShippingDetails)
  if(displayShippingDetails === 'none'){
    document.getElementById('shippingDetails').style.display = 'inline';
    document.getElementById('addressCartFooter').style.opacity = '0.1';
    document.getElementById('shippingDetails').style.opacity = '1';
    console.log(displayShippingDetails)
    setDisplayShippingDetails('inline')
  }else if(displayShippingDetails === 'inline'){
    document.getElementById('shippingDetails').style.display = 'none';
    document.getElementById('addressCartFooter').style.opacity = '1';
    setDisplayShippingDetails('none')
}
}
const hideShippingDetailsFunc=()=>{
  if(displayShippingDetails === 'inline'){
    document.getElementById('shippingDetails').style.display = 'none';
    document.getElementById('addressCartFooter').style.opacity = '1';
    setDisplayShippingDetails('none')
}
}
        
    return(
        <div className='container-fluid outSide'  onClick={hideShippingDetailsFunc} >
          
             {showAddress && products?
            <div className='row ' id='addressCartFooter' style={{display:'flex',position:'relative' , justifyContent:'space-between'}} >  
                 <div className='col-12 col-md-7 myCart ' style={{display:'flex',flexDirection:'column'}}>
                  {!location.state && cartItem.length === 0?
                     history.push('/')
                  :
                  <div style={{marginBottom:'80px'}}>
                  {cartProdcutsHeader}
                  {cartProductsDisplay} 
                  </div>
                  }
                   
                </div>
               
                <div className='col-12 col-md-5 myAddressBook'  >
                  <div className='row myOrderDetailsAndAddress' style={{background:'white',display:'flex-block',justifyContent:'center',marginLeft:'4px',marginRight:'4px'}}>
                      
                      <div className='col-12 col-sm-7 col-md-12'>
                      <div style={{display:'flex',justifyContent:'center',paddingTop:'10px',paddingLeft:'10px',paddingRight:'10px',textAlign:'center'}}>
                          <h5 style={{width:'100%', border:'0px', background:'#F57224' , color:'white',paddingTop:'8px',paddingBottom:'8px',textAlign:'center'}} >Shipping Address</h5>
                      </div>  
                      <div style={{padding:'12px 1px 10px 25px'}}> 
                        <div> <p><FontAwesomeIcon style={{color:'rgb(231, 44, 234)',marginRight:'7px',fontSize:'13px'}} icon={faSignature}/>{userAddress.name}</p> </div>
                        <div> <p><FontAwesomeIcon  style={{color:'rgb(231, 44, 234)',marginRight:'7px',fontSize:'13px'}} icon={faPhoneAlt}/>{userAddress.contact}</p> </div>
                        <div> <p><FontAwesomeIcon  style={{color:'rgb(231, 44, 234)',marginRight:'7px',fontSize:'13px'}} icon={faAddressCard}></FontAwesomeIcon>{userAddress.address}</p> </div>
                        <div> <p><FontAwesomeIcon  style={{color:'rgb(231, 44, 234)',marginRight:'10px',fontSize:'13px'}} icon={faThumbtack}></FontAwesomeIcon>{userAddress.cityName}, {userAddress.provinceName}</p> </div>
                      </div>
                      </div>

                      <div className='col-12 col-sm-5 col-md-12'>
                        <div className='orderDetailHeading' style={{display:'flex',justifyContent:'center',paddingTop:'10px',paddingLeft:'10px',paddingRight:'10px',textAlign:'center'}}>
                            <h5 style={{width:'100%', border:'0px', background:'#F57224' , color:'white',paddingTop:'8px',paddingBottom:'8px',textAlign:'center'}} >Order Details</h5>
                        </div>  
                        <div className='myOrderDetails' style={{padding:'12px 25px 10px 25px'}}>
                          <div className ='pendingOrder' style={{display:'flex', justifyContent:'space-between'}}>
                            <p style={{color:'rgb(76, 209, 69)' }}>Pending Order <span ><Link style={{color:'red'}} to='/PendingOrder'>show?</Link></span></p>
                            <p style={{color:'rgb(244, 165, 36)'}}>Rs. {previousTotal}</p>
                          </div> 
                          <div style={{display:'flex', justifyContent:'space-between'}}>
                            <p>Subtotal ({count} items) </p>
                            <p>Rs. {totalPrice}</p>
                           </div> 
                           <div style={{display:'flex', justifyContent:'space-between'}}>
                            <p>Shipping fee <span   style={{color:'red'}}><u><a onClick={displayShippingDetailsFunc} className="shippingCriteria">details?</a></u></span></p>
                            <p>Rs. {shippingFee}</p>
                           </div>
                           <div style={{display:'flex', justifyContent:'space-between'}}> 
                            <h5>Total</h5>
                            <h5 style={{color:'rgb(252, 22, 22)'}}>Rs. {previousTotal +totalPrice + shippingFee}</h5>
                           </div> 

                        </div> 
                        
                      </div>
                  </div>
               </div>
              
               <div className='container-fluid' style={{position:'fixed',borderTop:'2px solid blue' , height:'10%',alignItems:'center',display:"flex",alignContent:'center', justifyContent:'space-around', bottom:'0px',background:'white',left:'0px',width:'100%'}}>
                <h4 >Total:<span style={{color:'red',marginTop:'0px'}}> Rs. {previousTotal +totalPrice + shippingFee}</span></h4>
                <button className='confirmOrder'onClick={submit}  style={{marginBottom:'5px', border:'solid red',padding:'3px ' ,width:'200px', background:'rgb(247, 142, 4)', color:'white'}}>Confirm Order</button>
              </div>
            </div>
             :
             null
             }
              <div className='container-fluid' id='shippingDetails' style={{position:'fixed', display:'flex',left:'0px',alignContent:'center',top:'20%',display:'none',textAlign:'center'}}>
                              <div className='container shippingDetails' >
                              <h5><u>Shipping Charges:</u></h5>
                               <p> Zero Charges if Subtotal + Pending Order is above Rs.1000</p>
                                <p>30rs Charges if Subtotal + Pending Order is b/w Rs.500 & 1000</p>
                                <p>50rs Charges if Subtotal + Pending Order is below  Rs.500 </p>
                                <h4 style={{color:'red'}}>Click To Hide Shipping Details!</h4>
                              </div>
              </div> 
              <div className='container-fluid' id='goToHome' style={{position:'fixed', display:'flex',left:'0px',alignContent:'center',top:'30%',display:'none',textAlign:'center'}}>
                              <div onClick={()=>{
                                if(!location.state)setCartItem([]);
                                history.push({pathname:'/'})}
                              }  className='container goToHome' >
                              <h1>Order Submitted</h1>
                              <Link to='/' style={{color:'red' }}><h6>Click To Continue Shopping!</h6></Link>
                              </div>
              </div> 
        </div>
    )
}
export default BuyNow;