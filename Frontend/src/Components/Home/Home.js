import React,{useEffect,useState,useContext} from "react";
import ImageSLiderSmall from "./Sliders/ImageSliderSmaller";
import Axios from "axios";
import {useCookies} from "react-cookie";
import CardProductsJSX from "./cardProductsJSX";
import './line.css';
import './imageSlider.css';
import FilterBar from "./filterBar/FilterBar";
import SaleSlider from "./Sliders/SaleSlider";
import ImageSliderLarge from "./Sliders/ImageSliderLarger";
import { UserContext } from "../userContext/UserContext";
import {useHistory,Link} from 'react-router-dom'
import { CartContext } from "../cartContext/cartContext";
import Chatbot from "../Chatbot/chatbot";

function Home(){
  const history = useHistory();
  const [userLoggedIn] = useContext(UserContext)
  const [cookie] = useCookies(['jwt']);
   const[products , setProduct] = useState([]);
   const [displayLoginMSG, setdisplayLoginMSG] = useState('none');
   const [cartCookie, setCartCookie] = useCookies(['cart']);   
  const [cartItem , setCartItem] = useContext(CartContext);

  let id =[] ;
  
  useEffect(() => {
    getProducts();
  }, []);

  const  getProducts= async()=>{
    try{
    const res =  await Axios.post('http://localhost:3000/api/v1/products/getProducts',{ });
    console.log(res.data);
        setProduct(res.data.product);
        // console.log(res.data);
      
      
    }catch(err){
      console.log(err)
    }
  }
  

  // useEffect(() => { // will run every time cart item changed either on refresh on on add to cart click to set crt items from cookie so cart items data didnot loose
  //     if(typeof(cartCookie.cart) !== "undefined" ){
  //         setCartItem([...cartCookie.cart]);
  //     }else{
  //         setCartItem([]);
  //     }
     
  //   }, [cartItem]);
  
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
    let count = 0;
    //product image must have size 500x500 for better adjustment in card
      const items= products.map(item=>{
        if(count <= 16){
          count ++;
          return <div className="col-sm-4 col-lg-3 col-6 " >
               <CardProductsJSX checkLogin={checkLoginfunc} id={item._id} url={item.pImagePath} title={item.pTitle} price={item.pPrice}  description={item.pDescription}/>
          </div>
          }else return;
        
      });

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

      var hrCount =0;
      const hrLine = products.map(item=>{
        if(item.pOnSale === 'onSale'){ 
          hrCount =hrCount +1;                     
          return ( 
           <div>
            { hrCount === 1?  
            <hr className="hr-text" data-content="Flash Sale" style={{marginBottom:'50px'}}/>
             :
              null}
            
             </div>
           )
        } else{
            return ;
          }  
        
    });
   
      const itemsSale= products.map(item=>{
        if(item.pOnSale === 'onSale'){                       
          return (  
          <div  className="col-sm-4 col-lg-3 col-6 " >
          <CardProductsJSX checkLogin={checkLoginfunc} id={item._id} url={item.pImagePath} oldPrice={item.pOldPrice} title={item.pTitle} price={item.pPrice}  description={item.pDescription}/>
          </div>
           )
        } else{
            return ;
          }  
        
    });

  
    
    
    
    return(
    
<div>
  <div id="homeData" onClick={hideLoginFunc}>
        {/* image Sliders */}
        <div className="imageSliderLarge">
           <ImageSliderLarge/>
        </div>
        <div className="imageSliderSmall">
          <ImageSLiderSmall/>
        </div>
    
    {/* Filter bar */} 
    <FilterBar/>
    
     {/* Products cart */}      
           {products.length === 0 ?
                    <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                        <h2>Loading.....</h2>
                    </div> 
                    :
    
                    <div>
                      <div className="saleSliderLarger" style={{marginBottom:'0px'}} >             
                        <SaleSlider  checkLogin={checkLoginfunc} />
                       </div>
                       <div className='saleCardSmall' style={{marginTop:'0px'}}>
                          <div style={{ marginRight:'0px',paddingRight:'3px'}} className="row container-fluid">
                            {hrLine}
                            {itemsSale}
                         </div>
                        </div>
                      <hr style={{marginTop:'0px'}}className="hr-text" data-content="All Products"/>
                        <div style={{marginTop:'50px' ,paddingRight:'4px',paddingLeft:'5%'}} className="row container-fluid myAllProducts">
                          {items}
                        </div>
                        {/* <div className='container'style={{display:'flex',justifyContent:'end',alignContent:'end',marginBottom:'50px'}}>
        <i className="fa fa-facebook-messenger"></i>

      </div> */}
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                              <Link className='showMore' to={{pathname:'AllProducts'}} style={{ display: 'flex', justifyContent: 'center',flexDirection:'column' }}>
                                <h5 style={{marginBottom:'0px'}} >Show More</h5>
                                <i style={{fontSize:'50px',paddingLeft:'32%'}}className="fa fa-angle-double-down"></i>
                              </Link>
                          </div>
          

                    </div>
                    
           }  
 </div>
      <div className='container-fluid' id='LogInMSG' style={{ position:'fixed', display:'flex',alignContent:'center',top:'20%',display:'none',textAlign:'center'}}>
                              <div className="container" style={{background:'rgb(255, 170, 0)', color:"white",paddingTop:"60px  ",height:" 200px", width:" 370px", borderRadius:"10%"}}>
                                <h2 style={{color:'red'}}>Please sign in first !</h2>
                                <Link to='/signIn' style={{color:'black' }}><h6>Click here to sign in </h6></Link>
                              </div>

      </div> 
      

</div>
  
    );

}
export default Home;