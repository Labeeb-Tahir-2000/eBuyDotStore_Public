import React from 'react';
import useSignUp from '../../userHooks/useSignUp';
import "./../SignIn.css";
import {Link, useHistory} from 'react-router-dom';
import {useCookies} from 'react-cookie';

function  SignUp(){
	const history = useHistory();
    const signUp = useSignUp();
	const [cookie] = useCookies(['jwt']);
    return(
<>
{cookie.jwt?
history.push({pathname:'/'})
:
<div className="text-center" style={{padding:'50px'  }}>
	<div className="logo" style={{color:'#F57224'}}>Sign Up</div>
	 <div className="login-form-1" style={{width:'400px'}} >
		<form id="login-form" className="text-left" onSubmit={signUp}>
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">
					<div className="form-group">
						<input type="text" className="form-control"  name="name" placeholder="name" style={{fontSize:'20px'}} required='true'/>
					</div>
                    <div className="form-group">
						<input type="email" className="form-control"  name="email" placeholder="username"style={{fontSize:'20px'}} required='true'/>
					</div>
					<div className="form-group">
						<input type="password" className="form-control"  name="password" placeholder="password" style={{fontSize:'20px'}} required='true'/>
					</div>
                    <div className="form-group">
						<input type="password" className="form-control"  name="confirmPassword" placeholder="confirm password" style={{fontSize:'20px'}} required='true'/>
					</div>
					<div >
					<p id='errMessage' style={{visibility:'hidden',color:'red',paddingTop:'10px'}}>empty</p>
					</div>
				</div>
				<button type="submit" onSubmit={signUp} className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
			<div className="etc-login-form">
				<p>Already have a account? <Link  style={{color:'red'}} to="/signIn">Log In</Link></p>
			</div>
		</form>
	</div>	
</div>
}
</>
    )
}
export default SignUp;