
import Axios from 'axios';
import { useCookies } from 'react-cookie'; 
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom"


function useLogin(props){
    const location = useLocation();
    const history = useHistory();
    const [cookie, setCookie] = useCookies(['jwt']);        

    return async function(e){
    
        e.preventDefault();
        try{
            const res=  await Axios.post('http://localhost:3000/api/v1/users/setAddress',{
                name: e.target.name.value,
                contact: e.target.number.value,
                address: e.target.address.value,
                cityName: e.target.cityName.value,
                provinceName: e.target.provinceName.value,
            },{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.jwt}`        
            }});
                console.log(res)
                if(res.data  && res.data.status === "success"  ){
                    if(props !== ' '){
                        console.log(location.state)
                        return history.push({pathname:"/BuyNow",state:`${props}`})
                    }
                    return history.push("/BuyNow")
                }
               
                
        }catch(err){
            if(err.response.data){
                document.getElementById('errMessage').style.visibility = 'visible';
             document.getElementById('errMessage').innerHTML = err.response.data.message;
            }else{
            document.getElementById('errMessage').innerHTML = err;
            document.getElementById('errMessage').style.visibility = 'visible';
            
            }
        }
    }

      
}
export default useLogin;
