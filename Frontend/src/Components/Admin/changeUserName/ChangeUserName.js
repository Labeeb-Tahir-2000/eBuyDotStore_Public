import Axios,{useState,useContext} from "axios";
import {useCookies} from "react-cookie";
import "./../SignIn.css";
import { useHistory } from "react-router-dom";

function ChangeUserName(){
    const [cookie,setCookie] = useCookies(['jwt']);
    const history = useHistory();


    function UseChangefunc(){
        
        return async function(e){
            e.preventDefault();
         
            try{
                    const res = await Axios.patch('http://localhost:3000/api/v1/users/changeEmail',{
                    oldEmail: e.target.oldEmail.value,
                    newEmail: e.target.newEmail.value,                          
                },{
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${cookie.jwt}`        
                    }
                });
                if(res.data.status === 'success'){
                    setCookie('jwt',cookie, { path:'/' , expires : new Date(Date.now()) }); 
                   
                   return history.push({pathname:'/'})
                }
                      
            }catch(err){
                if(err.response){
                    document.getElementById('errMessage').style.visibility = 'visible';
                 document.getElementById('errMessage').innerHTML = err.response.data.message;
                }else{
                    document.getElementById('errMessage').style.visibility = 'visible';
                document.getElementById('errMessage').innerHTML = err;
               
                
                }
             }
          }
        }
    return(
        <div className = "text-center" style={{padding:'50px'  }} >
        <div className = "logo"style={{color:'#F57224'}}>Change Email Address</div>   
          <div className="login-form-1">
            <form className="text-left" onSubmit={UseChangefunc()}> 

                   <div className="main-login-form">
                      <div className="login-group">
                      
                      <div className="form-group">
                              <input type="email" className="form-control"  name="oldEmail" placeholder="Old Email Address"/>
                          </div>
                          <div className="form-group">
                              <input type="email" className="form-control"  name="newEmail" placeholder="New Email Address"/>
                          </div>
                          <div >
					        <p id='errMessage' style={{visibility:'hidden',color:'red',paddingTop:'10px'}}>empty</p>
					      </div>
                      <button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
                  </div>
                  </div>
              </form>
          </div>
      </div>
    )
}
export default ChangeUserName;