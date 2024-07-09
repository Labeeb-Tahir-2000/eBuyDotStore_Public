import React,{useState,useEffect,useContext} from 'react';
import Axios from 'axios';
import { useCookies } from 'react-cookie';

import CartProducts from '../Admin/showOrders/CartJSX';
import '../buyNow/buyNow.css';
import { useLocation } from "react-router-dom";
import { useHistory,Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAddressCard ,faThumbtack,faSignature, faPhoneAlt, faEnvelope, faShoppingCart} from '@fortawesome/free-solid-svg-icons';



function MyAccountInfo(){
  const history = useHistory();
    const [cookie] = useCookies(['jwt']);
    const [user, setUser] = useState();
  
    
 
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
console.log(res.data)
          setUser(res.data.users[0])
   
      }catch(err){
        console.log(err)
      }
    }
        
    return(
        <div className='container-fluid outSide' >
      
      { user == undefined || user == '' || user == ' ' ?
              <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
             <h1>Loading.......</h1>
             </div>
             :
             <>
             {  user.address == '' || user.address == undefined?
              <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
             <h1>No data available.......</h1>
             </div>
             :
            <div className='row ' id='addressCartFooter' style={{display:'flex',position:'relative' , justifyContent:'space-between'}} >  
                   
               
                <div className='col-12 col-md-12 myAddressBook'  >
                   <div className='row myOrderDetailsAndAddress' style={{background:'white',display:'flex-block',justifyContent:'center',marginLeft:'4px',marginRight:'4px'}}>
                      
                      <div className='col-12'>
                      <div style={{display:'flex',justifyContent:'center',paddingTop:'10px',paddingLeft:'10px',paddingRight:'10px',textAlign:'center'}}>
                          <h5 style={{width:'100%', border:'0px', background:'#F57224' , color:'white',paddingTop:'8px',paddingBottom:'8px',textAlign:'center'}} >Account Details</h5>
                      </div>  
                      <div style={{padding:'15px 1px 15px 0px'}}> 
                        <div style={{padding:'12px 1px 10px 25px'}}> <h5><FontAwesomeIcon style={{color:'rgb(231, 44, 234)',marginRight:'9px',fontSize:'20px'}} icon={faSignature}/>{user.address.name}</h5> </div>
                        <div style={{padding:'12px 1px 10px 25px'}}> <h5><FontAwesomeIcon  style={{color:'rgb(231, 44, 234)',marginRight:'12px',fontSize:'20px'}} icon={faPhoneAlt}/>{user.address.contact}</h5> </div>
                        <div style={{padding:'12px 1px 10px 25px'}}> <h5><FontAwesomeIcon style={{color:'rgb(231, 44, 234)',marginRight:'12px',fontSize:'20px'}}  icon={faEnvelope}/>{user.email}</h5> </div>
                        <div style={{padding:'12px 1px 10px 25px'}}> <h5><FontAwesomeIcon  style={{color:'rgb(231, 44, 234)',marginRight:'9px',fontSize:'20px'}} icon={faAddressCard}></FontAwesomeIcon>{user.address.address}</h5> </div>
                        <div style={{padding:'12px 1px 10px 25px'}}> <h5><FontAwesomeIcon  style={{color:'rgb(231, 44, 234)',marginRight:'12px',marginLeft:'3px',fontSize:'20px'}} icon={faThumbtack}></FontAwesomeIcon>{user.address.cityName}, {user.address.provinceName}</h5> </div>
                        <div style={{padding:'12px 1px 10px 25px'}}> <h5><FontAwesomeIcon style={{color:'rgb(231, 44, 234)',marginRight:'7px',fontSize:'20px'}} icon={faShoppingCart}/><span style={{color:'red'}}>{user.orderedProducts.length}</span> pending orders</h5> </div>
                      </div>
                      </div>

                   </div>
                </div>
             </div>
    }
    </>
}
        </div>
    )
}
export default MyAccountInfo;