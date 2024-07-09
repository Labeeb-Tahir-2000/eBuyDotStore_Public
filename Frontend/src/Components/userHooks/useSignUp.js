
import Axios from 'axios';
import { useState,useContext } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
import {UserContext} from '../userContext/UserContext'

function UseSignUp(){
  const [userName, setUserName] = useCookies('userCookie');  
  const history = useHistory();
  const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
  const [cookie, setCookie] = useCookies(['jwt']);      
    return async function(e){
    try
      {
        e.preventDefault();
        
       const res =await Axios.post('http://localhost:3000/api/v1/users/signup',{
        name :e.target.name.value,
        email :e.target.email.value,
         password :e.target.password.value,
         confirmPassword:e.target.confirmPassword.value
       });
     
     
      
       if(res.data && res.data.jwt && res.data.status === "success") {
        setUserLoggedIn(res.data.data.user)
          setCookie('jwt',res.data.jwt, { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) }); 
          setUserName('userCookie',res.data.data.user.name, { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) });    
         location.reload();
         return history.push("/");
       }
    }catch(err){
      if(err.response){
        document.getElementById('errMessage').style.visibility = 'visible';
     document.getElementById('errMessage').innerHTML = err.response.data.message;
   
    }else{
    document.getElementById('errMessage').innerHTML = "Error : No response from back_end server";
   
    document.getElementById('errMessage').style.visibility = 'visible';
    
    }
    }
    }
}
export default UseSignUp;
