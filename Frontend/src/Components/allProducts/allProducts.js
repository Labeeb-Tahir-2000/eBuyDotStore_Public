import React,{useEffect,useState,useContext} from "react";
import Axios from "axios";
import {useCookies} from "react-cookie";
import CardProductsJSX from "../Home/cardProductsJSX";
import { UserContext } from "../userContext/UserContext";
import {useHistory,useLocation,Link} from 'react-router-dom'
import './allProducts.css';
import { CartContext } from "../cartContext/cartContext";

function GetProducts(props){
  const location = useLocation();
  const history = useHistory();
  const [userLoggedIn] = useContext(UserContext)
  const [cookie] = useCookies(['jwt']);
   const[products , setProduct] = useState([]);
   const [Skip, setSkip] = useState(0)
   const [Limit, setLimit] = useState(12)
   const [PostSize, setPostSize] = useState()
   const [SearchTerms, setSearchTerms] = useState("");
   const [displayLoginMSG, setdisplayLoginMSG] = useState('none');
   const [cartCookie, setCartCookie] = useCookies(['cart']);   
  const [cartItem , setCartItem] = useContext(CartContext);

  useEffect(() => {
    const variables = {
        skip: Skip,
        limit: Limit,
        searchTerms :location.state? location.state : SearchTerms
    }
    if(location.state){
      setSearchTerms(location.state)
      console.log(location.state)
    }
    
    getProducts(variables)
  }, [location.state?location.state:null]);

  const  getProducts= async(variables)=>{
    try{
      console.log(variables)
    const res =  await Axios.post('http://localhost:3000/api/v1/products/getProducts ',variables);
      
      if (res.data.status === 'success') {
        if (variables.loadMore) {
            setProduct([...products, ...res.data.product])
        } else {
            setProduct(res.data.product)
        }
        setPostSize(res.data.product.length)
    } else {
       console.log('Failed to fetch product data')
    }
      
    }catch(err){
      console.log(err.response)
    }
  }
const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            searchTerms:SearchTerms
        }
        getProducts(variables)
        setSkip(skip)
    }
      const items= products.map(item=>{
       
          return <div className="col-sm-4 col-lg-3 col-6 " >
               <CardProductsJSX checkLogin={checkLoginfunc} id={item._id} url={item.pImagePath} title={item.pTitle} price={item.pPrice}  description={item.pDescription}/>
          </div>
        
      });

      //following code is for check login buyknow and add to cart buttons
      let id=[];
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
   
    return(
    
        <div  onClick={hideLoginFunc}>
    
           {products.length === 0 ?
                    <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                      <h2>No Product Found.....</h2>   
                    </div> 
                    :
    
                  <div id="homeData">
                     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                       {location.state || SearchTerms?
                        <h2 style={{marginTop:'3%'}}>Search Results</h2>
                        :
                        <h2 style={{marginTop:'3%'}}>All Products</h2>
                       }
                    
                    </div> 
                      
                        <div style={{marginTop:'30px' ,paddingRight:'4px',paddingLeft:'5%'}} className="row container-fluid myAllProducts">
                          {items}
                        </div>
                        
                          {PostSize >= Limit &&
                                                 
                                                   
                          <div   onClick={onLoadMore} style={{ display: 'flex', justifyContent: 'center'}}  >
                               <Link  className='showMore' style={{ display: 'flex', justifyContent: 'center',flexDirection:'column' }}>
                                  <h5 style={{marginBottom:'0px'}} >Load More</h5>
                                  <i style={{fontSize:'50px',paddingLeft:'32%'}}className="fa fa-angle-double-down"></i>
                                </Link>            
                          </div>
                        }
                   </div>   
             }
              <div className='container-fluid' id='LogInMSG' style={{ position:'fixed', display:'flex',alignContent:'center',top:'20%',display:'none',textAlign:'center'}}>
                              <div className="container" style={{background:'rgb(255, 170, 0)', color:"white",paddingTop:"60px  ",height:" 200px", width:" 370px", borderRadius:"10%"}}>
                                <h2 style={{color:'red'}}>Please sign in first !</h2>
                                <Link to='/signIn' style={{color:'black' }}><h6>Click here to sign in </h6></Link>
                              </div>
              </div>
      </div>
  
    );

}
export default GetProducts;