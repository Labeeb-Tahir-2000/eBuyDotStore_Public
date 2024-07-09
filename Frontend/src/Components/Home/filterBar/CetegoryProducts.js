import React,{useEffect,useState,useContext} from "react";
import Axios from "axios";
import {useCookies} from "react-cookie";
import CardProductsJSX from "./../cardProductsJSX";
import './../line.css';
import {useLocation,useHistory,Link} from 'react-router-dom'
import { CartContext } from "../../cartContext/cartContext";

function Home(){
  const history = useHistory();
  const [cookie] = useCookies(['jwt']);
   const [displayLoginMSG, setdisplayLoginMSG] = useState('none')
  const location = useLocation()
  const[cetegory , setCetegory] = useState('');
   const[products , setProduct] = useState([]);
   const [cartCookie, setCartCookie] = useCookies(['cart']);   
   const [cartItem , setCartItem] = useContext(CartContext);
  useEffect(() => {
    const pCetegory =  location.state;
    setCetegory(pCetegory)
    getProducts(pCetegory);
  }, []);

  const getProducts =async (cetegory) => {
    try{
        console.log(cetegory);
    const res =  await Axios.post('http://localhost:3000/api/v1/products/getCetegoryProducts ',{cetegory:cetegory });
      
        setProduct(res.data.product);
        console.log(res.data.product)
      
      
    }catch(err){
      console.log(err.response)
    }
  }
  let id =[] ;
  const addToCartHandler=(pID)=>{
    console.log("this is product id" + pID);
    if(typeof(cartCookie.cart) !== "undefined" ){ // this is to set cart items into cart cookie to not to loose cart items on refresh
        id= [...cartCookie.cart,pID];
        setCartCookie('cart', id , { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) });
        console.log(cartCookie.cart);
    }else{
        id = [];
        setCartCookie('cart', [...id ,pID ], { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) });
        console.log(cartCookie.cart);
    }
    

    // console.log(pID);
    if(cartItem === {}){//if cart is empty array then set id into it
        setCartItem(pID);
        // setCartCookie('cart',pID, { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) });  
        // console.log(cartCookie);
//NOTE: must initialize cartItem as array so then we can use ...cartItem else if it is object then error of cartItem is not iterable occur
    }else{   
        id= [...cartItem,pID];//hard copying the cart array into id array as first asgument 
        setCartItem(id); // now seting cartItem with id array that have all recent IDs
        // setCartCookie('cart',id, { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) });  
        // console.log(cartCookie.cart);
    } 
}

  function checkLoginfunc(pageName , id){    
    if(!cookie.jwt){

      if(displayLoginMSG === 'none'){
        document.getElementById('LogInMSG').style.display = 'inline';
        document.getElementById('homeData').style.opacity = '0.1';
        document.getElementById('LogInMSG').style.opacity = '1';
        setdisplayLoginMSG('inline')
        
      }else if(displayLoginMSG === 'inline'){
        document.getElementById('LogInMSG').style.display = 'none';
        document.getElementById('homeData').style.opacity = '1';
        setdisplayLoginMSG('none')
    }
     
    }else if(pageName == 'addToCart'){
      addToCartHandler(id);
    }else if(pageName == 'shippingPage'){
      history.push({pathname:"/shippingPage" , state:`${id}`});
    }
  }

  const hideLoginFunc=()=>{
    if(displayLoginMSG === 'inline'){
      document.getElementById('LogInMSG').style.display = 'none';
      document.getElementById('homeData').style.opacity = '1';
      setdisplayLoginMSG('none')
  }
  }


    //product image must have size 500x500 for better adjustment in card
      const items= products.map(item=>{
          return <div className="col-sm-4 col-lg-3 col-6 " >
               <CardProductsJSX checkLogin={checkLoginfunc} id={item._id} url={item.pImagePath} title={item.pTitle} price={item.pPrice}  description={item.pDescription}/>
          </div>
      });



    
    return(
  <div  onClick={hideLoginFunc}>
      
       {products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>Stock ranout...</h2>
                </div> 
                :

                <div>
                  <h1 style={{marginTop:'8%', textAlign:'center'}}>{cetegory}</h1>
                    <div id="homeData" style={{marginTop:'50px' ,paddingRight:'4px',paddingLeft:'5%'}} className="row container-fluid myAllProducts">
                      {items}
                    </div>
                    
                
                  <div className='container-fluid' id='LogInMSG' style={{ position:'fixed', display:'flex',alignContent:'center',top:'20%',display:'none',textAlign:'center'}}>
                      <div className="container" style={{background:'rgb(255, 170, 0)', color:"white",paddingTop:"60px  ",height:" 200px", width:" 370px", borderRadius:"10%"}}>
                        <h2 style={{color:'red'}}>Please sign in first !</h2>
                        <Link to='/signIn' style={{color:'black' }}><h6>Click here to sign in </h6></Link>
                      </div>
                  </div>

                </div> 
}
  </div>
    );

}
export default Home;