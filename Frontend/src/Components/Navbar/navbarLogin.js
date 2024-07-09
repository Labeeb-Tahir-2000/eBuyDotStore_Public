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

    return(
       
       <div style={{position:'relatve'}}>
       
                    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark" style={{position:'fixed',zIndex:'100',width:'100%',top:'0px'}}>
                        <Link style={{padding:'0px',margin:'0px'}}  to="/Orders"><img style={{height:'55px', width:'170px',margin:'0px',padding:'0px',float:'left'}}src='https://firebasestorage.googleapis.com/v0/b/meharsuperstore-2021.appspot.com/o/Asset%206.svg?alt=media&token=e68b81c6-729e-4981-b5ae-be3cd7ae662c'></img>
                        </Link>
                      
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
                        </ul>
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
                                       
                        </div>
                        
                       
                      </nav>
                         
          
          </div>      

    )
}
export default MyNavbar;

