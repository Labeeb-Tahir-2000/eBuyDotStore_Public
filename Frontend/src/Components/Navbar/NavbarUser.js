import React,{useContext} from "react";
import {NavLink,Link} from "react-router-dom";
import "./Navbar.css";
import {useEffect, useState} from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import { useHistory } from "react-router-dom";
import { CartContext } from "../cartContext/cartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from "../userContext/UserContext";





function MyNavbar(){
    const [User,setUser] = useState({});
    const [userName,setUserName] = useCookies('userCookie');
    const [cartCookie,setCartCookie] = useCookies(['cart']);
    const [cookie,setCookie] = useCookies(['jwt']);
    const history = useHistory();
    const [cartItem , setCartItem] = useContext(CartContext)
    const cartItemCount = cartItem.length;
    const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
        if(cookie.jwt ){
          document.getElementById("name").innerHTML =  userName.userCookie  ;
        }
       
    },[cookie.jwt])
    const style={
        // color:"red",
        // marginLeft:"12px",
        paddingRight:'30px'
    }
   
    function useSignOut(){ 
        try{
                    setUserName('userCookie',userName, { path:'/' , expires : new Date(Date.now()) });
                    setCookie('jwt',cookie, { path:'/' , expires : new Date(Date.now()) }); 
                    setCartCookie('cart',cartCookie, { path:'/' , expires : new Date(Date.now()) }); 
                    setCartItem([])
                    setUserLoggedIn([])
                    console.log('loggedout succesfully');
                 
                    return history.push("/");
        }catch(err){
            console.log(err.message)
        }
    }
    
  const searchChangeHandler=(event)=>{
    console.log(event.currentTarget.value)
    setSearchTerm(event.currentTarget.value)
   
  }
  // const RedirectToAllProducts=()=>{
  //    history.push({pathname:'/AllProducts', state:{searchTerm:searchTerm}})
  // }
    return(
       
       <div style={{position:'relatve'}}>
       
                    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark" style={{position:'fixed',zIndex:'100',width:'100%',top:'0px'}}>
                        <Link style={{padding:'0px',margin:'0px'}}  to="/Orders"><img style={{height:'55px', width:'170px',margin:'0px',padding:'0px',float:'left'}}src='https://firebasestorage.googleapis.com/v0/b/meharsuperstore-2021.appspot.com/o/Asset%206.svg?alt=media&token=e68b81c6-729e-4981-b5ae-be3cd7ae662c'></img>
                        </Link>
                       <ul className="navbar-nav cartSmall" style={{position:'absolute',top:'22px',right:'90px'}}>
                       <li className="nav-item cart">
                              <Link className="nav-link " to="/chatbot">
                              <i class="fa-solid fa-message-bot"></i>
                                   Help
                              </Link> 
                            </li>
                        <li className="nav-item ">
                              <Link className="nav-link " to="/Cart">
                                  <i class="fa fa-shopping-cart">
                                      <span class="badge badge-warning">{cartItemCount} </span>
                                  </i>
                                   
                              </Link>
                            </li>
                          </ul>  
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse centered" id="navbarSupportedContent">
                      
                          <ul style={{marginLeft:'15px'}} className="navbar-nav mr-auto">
                            <li className="nav-item ">
                              <Link to="/" className="nav-link" >
                                  <i class="fa fa-home"></i>
                                <span className="sr-only">(current)</span>
                                Home
                                </Link>
                            </li>
                            <li className="nav-item cart">
                              <Link className="nav-link " to="/Cart">
                                  <i className="fa fa-shopping-cart">
                                      <span class="badge badge-warning">{cartItemCount} </span>
                                  </i>
                                   Cart
                              </Link> 
                            </li>
                            <li className="nav-item ">
                              <Link className="nav-link " to="/chatbot">
                              <i class="fa fa-message-bot" style={{color:'blue'}}></i>
                                   Help
                              </Link> 
                            </li>
                          </ul>
                              {
                                cookie.jwt? 
                                <ul className="navbar-nav rightSide  " style={{marginLeft:'15px ',marginRight:'20px ',padding:'0px', marginTop:'0px'}} >
                                <li className="nav-item dropdown"style={{marginRight:'10px'}}>
                                      <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i class="fa fa-user"></i>
                                    <span id="name">User</span>
                                      
                                      </a>
                                      <div className="dropdown-menu col-6 " aria-labelledby="navbarDropdown" style={{textAlign:'center',paddingLeft:'0px'}}>
                                          <Link className="dropdown-item " to="/PendingOrder">My Orders</Link>
                                          <Link className="dropdown-item " to="/MyAccount">My Account</Link>
                                          <Link className="dropdown-item " to="/ChangeUserName">Change Email </Link>
                                      </div>
                                </li>
                                <li className="nav-item">
                                  
                                  <Link className="nav-link "  onClick={useSignOut}>
                                  <i className="fa fa-sign-out"></i>
                                      SignOut
                                  </Link>
                              </li>
                            </ul>
                                :
                                <ul className="navbar-nav  " style={{marginLeft:'10px ',padding:'0px', marginTop:'0px',marginRight:'17px '}} >
                                      <li className="nav-item">
                                      
                                      <Link className="nav-link " to="/signIn" >
                                      <i className="fa fa-sign-in"></i>
                                          SignIn
                                      </Link>
                                    </li>
                                    <li className="nav-item">
                                        
                                        <Link className="nav-link " to="/signUp" >
                                        <i class="fa fa-user-plus"></i>
                                            SignUp
                                        </Link>
                                    </li>
                               </ul>
                               
                              }
                              
                             
                            <form className="form-group row my-2 my-lg-0 " style={{paddingBottom:'0px',marginBottom:'0px'}}>
                              <div className=" form-group  search col-lg-12" style={{display:'flex',paddingBottom:'0px',marginBottom:'0px'}}>
                               <input  className=" form-control mr-sm-2 col-lg-9 col-md-12" type="text" placeholder="Search Product" onChange={searchChangeHandler}  name="search"/>
                              <Link  className=" myButton col-4 col-lg-3 " to={{pathname:'/AllProducts', state:`${searchTerm}`}} style={{color:'#F57224',background:'black',border:'3px solid #F57224'}}>Search</Link>
                              </div>
                              
                            </form>
                        </div>
                        
                       
                      </nav>
                         
          
          </div>      

    )
}
export default MyNavbar;

