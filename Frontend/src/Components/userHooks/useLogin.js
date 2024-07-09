
import Axios from 'axios';
import {useContext} from 'react';
import { useCookies } from 'react-cookie'; // package to set and store cookies on frontend 
import { useHistory } from "react-router-dom";
import {UserContext} from '../userContext/UserContext'


//  cookies.set('jwt',res.data.jwt) will set or making cookie by putting token value 'which is coming from API's object data' into our custon made and named jwt 
function useLogin(){
    const [userName, setUserName] = useCookies('userCookie');  
    const history = useHistory();
    const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
    const [cookie, setCookie] = useCookies(['jwt']);        

    return async function(e){
        const d= new Date();
         d.setDate(7);

       
        e.preventDefault();
        try{
            const res=  await Axios.post('http://localhost:3000/api/v1/users/signin',{
                email: e.target.email.value,
                password: e.target.password.value
            });
                
               
                           
                
                console.log('hey',res.data.data.user.name)
                if(res.data && res.data.jwt && res.data.status === "success" ){
                    setUserLoggedIn(res.data.data.user)
                    setCookie('jwt',res.data.jwt, { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) });      
                    if(res.data.data.user.role === 'user'){
                        setUserName('userCookie',res.data.data.user.name, { path:'/' , expires : new Date(Date.now()+(1000*60*60*24*7)) });   
                        location.reload();
                        return history.push("/");
                    }else if(res.data.data.user.role === 'admin'){
                        location.reload();
                        return history.push("/Orders");
                    }
                } 
          
        }catch(err){
            if(err.response){
                document.getElementById('errMessage').style.visibility = 'visible';
             document.getElementById('errMessage').innerHTML = err.response.data.message;
           
            }else{
            document.getElementById('errMessage').innerHTML = "Error : No response from back_end server, There is problem with backend server";
           
            document.getElementById('errMessage').style.visibility = 'visible';
            
            }
        }
    }

      
}
export default useLogin;
// export default useLoginstatic axiosInstance =  axios.create({
//     baseURL: "BASE_API_URL",
//     timeout: 5000,
//     headers: {
//       'Authorization': "JWT_TOKEN",
//       'Content-Type': 'application/json'
//     }
//   }); 