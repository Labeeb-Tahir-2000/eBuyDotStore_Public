import  React from "react";
import "./../SignIn.css";
import forgetFunc from "./Forgetfunc";
function Forget(){
     const style={
        padding:"50px",
    }
    const forget = forgetFunc();
    return(
        <div className = "text-center" style = {style}>
          <div className = "logo" style={{color:'#F57224'}}>forgot password</div>
            
            <div className="login-form-1">
                <form  id="forgot-password-form" className="text-left" onSubmit={forget}>
                    <div className="login-form-main-message"></div>
                    <div className="main-login-form">
                        <div className="login-group">
                            <div className="form-group">
                                <label for="fp_email" className="sr-only">Email address</label>
                                <input type="text" className="form-control" id="fp_email" name="email" placeholder="email address"/>
                            </div>
                        </div>
                        <button type="submit" onSubmit={forget} className="login-button"><i className="fa fa-chevron-right"></i></button>
                        <div >
					<p id='errMessage' style={{visibility:'hidden',color:'red',paddingTop:'10px'}}>empty</p>
					</div>
                    </div>   
                    <div id='instruction' style={{color:'red',paddingTop:'10px'}}>
                        <p>When you submit your registered email address, you will be sent instructions on how to reset your password on your given Email Address.</p>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default Forget;
