
import Axios from 'axios';
import { useState,useContext } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../userContext/UserContext';


function UseChangePassword(props){
  const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
    const [cookie,setCookie] = useCookies(['jwt'])
   const history = useHistory();
    return async function(e){
    try
      {
        console.log(props)
        e.preventDefault();
        
       const res =await Axios.post('http://localhost:3000/api/v1/users/changePassword',{
         password :e.target.password.value,
         confirmPassword:e.target.confirmPassword.value,
         resetToken:props
       });
       setCookie('jwt',res.data.jwt, { path:'/' , expires : new Date(Date.now()+(48 * 60 *60 * 1000)) });                 
                setUserLoggedIn(res.data.data.user)

                if(res.data && res.data.jwt && res.data.status === "success" ){
                    if(res.data.data.user.role === 'user'){
                        return history.push("/Home");
                    }else if(res.data.data.user.role === 'admin'){
                        return history.push("/Orders");
                    }
                } 
       
    }catch(err){
      if(err.response){
        document.getElementById('errMessage').innerHTML = err.response.data.message;
        document.getElementById('errMessage').style.visibility = 'visible';
      }else
      alert(err)
      
    }
    }
}
export default UseChangePassword;
