import React,{useEffect,useContext,useState} from "react";
import { CartContext } from "../cartContext/cartContext";
import CartProducts from "./CartJSX";
import CartTable from "./cartTableJSX";
import {useCookies} from "react-cookie";
import Axios from 'axios';
import './cartJSX.css';
import {Link,useHistory} from 'react-router-dom';


 function Cart(){
   const history = useHistory();
    const [cookie] = useCookies(['jwt']);
    const [cartItem,setCartItem] = useContext(CartContext);
    const [products , setProducts] = useState([]);
    const [totalPrice , setTotalPrice] = useState(0)
    const [cartCookie, setCartCookie] = useCookies(['cart']);   

    useEffect(() => {
    console.log("this cartCookie"+ cartCookie.cart)
    getProducts(cartItem)
    }, [cartItem])// must put cartItem state in here bcz it will re call useEffect when ever this state change 
    //so by this getProducts call on each time according to changed cartItem global state which is essential to call bcz when we remove product and 
   // cartItem state set to changed  by setCartItem it will call useEffect and call getProducts so products get that are not removed

    const  getProducts = async (id) =>{
      try{
        console.log(id)
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
    const removeFromCart = (productId) => {
     const index=  cartItem.indexOf(productId);
     let arrayItems = [...cartItem];//hard copying array so to implement splice() on it 
    arrayItems.splice(index,1);
    setCartCookie('cart', arrayItems, { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) });  
    setCartItem(arrayItems); // setting cartItem to spliced array
          
  }
  const totalPriceHandler =(totalPrice)=>{
    setTotalPrice(totalPrice)
  }

    const cartProductsDisplay = products.map(item=>{
return <CartProducts removeItem={removeFromCart} imageURL ={item.pImagePath} id={item._id} title={item.pTitle} price={item.pPrice} description={item.pDescription}/>

    })
    return(
      <>	
  {cookie.jwt ?
        <div  >
              {products.length === 0? 
            <div style={{ display: 'flex',flexDirection:'column', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
              <div><h2>Empty cart!</h2></div>
              <br />
              <div><h3>Please add Products in Cart......</h3></div>
            </div>
            :
            <div >
              <h2 style={{color:'rgb(94, 94, 94)',textAlign:'center', marginTop:'0px',paddingTop:'3%',marginBottom:'1%'}}>My Cart ({cartItem.length})</h2>
              <div className='container' style={{marginBottom:'100px'}}>
                {cartProductsDisplay}
                <CartTable product={[...products]} totalPrice={totalPrice=>{totalPriceHandler(totalPrice)}} removeItem={removeFromCart}/>
              </div>
              <div className='container-fluid' style={{position:'fixed',borderTop:'2px solid blue' , height:'10%',alignItems:'center',display:"flex",alignContent:'center', justifyContent:'space-around', bottom:'0px',background:'white',left:'0px',width:'100%'}}>
                <h4 >Subtotal:<span style={{color:'red',marginTop:'0px'}}> Rs. {totalPrice}</span></h4>
                <Link className='checkOut' to='/shippingPage' style={{textAlign:'center',textDecoration:'none', marginBottom:'5px', border:'solid red',padding:'3px ' ,width:'200px', background:'rgb(247, 142, 4)', color:'white'}}>Check Out</Link>
              </div>
            </div>
           }

            
        </div>
:
history.push({pathname:'/'})     
 }   
        </>
    )
}
export default Cart;