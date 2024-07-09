import React, { useContext } from 'react';
import useLogin from './../../userHooks/useLogin';
import "./../SignIn.css";
import { Link ,useHistory} from 'react-router-dom';
import {useCookies} from 'react-cookie';

function Signin(){
	const history = useHistory();
    const login = useLogin();
	const [cookie] = useCookies(['jwt']);

return(
<>
{cookie.jwt?
history.push({pathname:'/'})
:
<div className="text-center" style={{padding:'50px' }} >
	<div className="logo" style={{color:'#F57224'}}>Login</div>
	<div className="login-form-1" style={{width:'400px'}}>
		<form id="login-form" className="text-left" onSubmit={login}>
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">
					<div className="form-group">
						<input type="email" className="form-control"  name="email" placeholder="Email"  required='true'/>
					</div>
					<div className="form-group">
						<input type="password" className="form-control"  name="password" placeholder="password"  required='true'/>
					</div>
					<div >
					<p id='errMessage' style={{visibility:'hidden',color:'red',paddingTop:'10px'}}>empty</p>
					</div>

				</div>
				<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
			<div className="etc-login-form">
				<p>Forgot your password? <Link style={{color:'red'}} to="/forgetPassword">click here</Link></p>
				<p>New user? <Link style={{color:'red'}} to="/signUp">create new account</Link></p>
			</div>
		</form>
	</div>	
</div>

}
</>

)
};
export default Signin;