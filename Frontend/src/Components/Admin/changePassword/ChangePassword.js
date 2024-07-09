import React from 'react';
import useChangePassword from './useChangePassword';
import "../SignIn.css";
import {Link, useHistory, useParams} from 'react-router-dom';
import {useCookies} from 'react-cookie';

function  ChangePassword(){
    const {resetToken} = useParams();
	const history = useHistory();
    const changePassword = useChangePassword(resetToken);
	const [cookie] = useCookies(['jwt']);
    return(

<div className="text-center" style={{padding:'50px'  }}>
  
	<div className="logo" style={{color:'#F57224'}}>Change Password</div>
	 <div className="login-form-1" style={{width:'400px'}} >
		<form id="login-form" className="text-left" onSubmit={changePassword}>
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">	
					<div className="form-group">
						<input type="password" className="form-control"  name="password" placeholder="New Password" style={{fontSize:'20px'}} required='true'/>
					</div>
                    <div className="form-group">
						<input type="password" className="form-control"  name="confirmPassword" placeholder="Confirm new password" style={{fontSize:'20px'}} required='true'/>
					</div>
					<div >
					<p id='errMessage' style={{visibility:'hidden',color:'red',paddingTop:'10px'}}>empty</p>
					</div>
				</div>
				<button type="submit" onSubmit={changePassword} className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
		</form>
	</div>	
</div>
    )

    
}
export default ChangePassword;