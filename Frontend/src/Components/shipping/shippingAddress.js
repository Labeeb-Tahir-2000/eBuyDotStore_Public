import React, { useEffect, useState } from 'react';
import "./shipping.css";
import useSubmitAddress from './useSubmitAdrdress';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import { useCookies } from 'react-cookie';
import { useLocation } from "react-router-dom"

function AddrressForm(){
	const location = useLocation();
	const [cookie, setCookie] = useCookies(['jwt']);  
	const history = useHistory();
	const  [cityName, setCity] = useState('');
	const  [showAddressForm, setShowAddressForm] = useState(false)
	const  [provinceName , setProvince] = useState(' ');
	const [ID, setID] = useState(' ')

    const submitAddress = useSubmitAddress(ID);
	
	useEffect(async() => {
		
	const res= await  Axios.post('http://localhost:3000/api/v1/users/getUser',{},{
		headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${cookie.jwt}`        
	}});
		console.log(res)
		if(res.data  && res.data.status === "success" && res.data.user.address ){
			if(location.state){
				console.log(location.state)
				return history.push({pathname:"/BuyNow",state:`${location.state}`})
			}
			return history.push("/BuyNow")
		}else{
			setShowAddressForm(true)
			if(location.state){
			setID(location.state)
			}
		}
	}, []);
		
	const cities=[
		{ key: 0, value: "" ,},
			{ key: 1, value: "Chiniot" ,disabled:'true'  },
			{ key: 2, value: "Sargodha", disabled:""},
			{ key: 3, value: "Ahmad Nagar" , disabled:'true'},
	]
	const provinces=[
		{ key: 0, value: "",},
		{ key: 1, value: "Punjab",  disabled:''},
		{ key: 2, value: "Sindh" ,disabled:'true'},
		{ key: 4, value: "Kpk" ,disabled:'true' },
		{ key: 5, value: "Kashmir" ,disabled:'true'},
		{ key: 6, value: "Balochistan" ,disabled:'true'},
	]

	const cityChangeHandler= (event)=>{
			setCity(event.target.value);

		}
		
	const provinceChangeHandler= (event)=>{
		setProvince(event.target.value)
	}

return(
<>	
{cookie.jwt ?
<div className="my-text-center" style={{padding:'50px' }} >
		{showAddressForm?
		<form onSubmit={submitAddress}>
		<div className="logo" style={{display:'flex', justifyContent:'center '}}>User Address</div>
			<div className="my-main-login-form">
				<div className="login-group row">
				    <div className='row'>
						<div className="form-group col-12 col-sm-6">
							<input type="text" pattern="^[A-Za-z \s*]+$" title ="Alphabets Only" className="form-control"  name="name" placeholder="Full Name" style={{fontSize:'18px'}} required='true'/>
						</div>
						<div className="form-group col-12 col-sm-6">
							<input type="number" className="form-control"  name="number" placeholder="Contact Number" style={{fontSize:'18x'}} required='true'/>
						</div>
					</div>
					<div className='  row'>
						<div className="col-12 form-group" ><textarea style={{width:'100%' , fontSize:'16x'}} className="form-control"type='text'name="address" placeholder="Shipping Address"  required='true' /> </div>
					</div>	
					<div className='  row'>
						<div className="col-sm-6 col-12 form-group" >
							<label className='label'style={{marginRight:'15px',fontWeight:'bold'  ,color:'black'}} for='cityName'>Select City</label>
								<select className="select" id='cityName'  style={{ border:'10px solid red'}} onChange={cityChangeHandler} value={cityName} required='true'>
								{cities.map(city=>(
									<option name='option' key={city.key}  disabled={city.disabled}  value={city.value} selected>{city.value} </option>
								)) }	
								</select>
						
						</div>
						<div className="col-12 col-sm-6 form-group" style={{marginRight:'0px',paddingRight:'0px'}}>
						<label className='label'style={{marginRight:'15px',fontWeight:'bold' ,color:'black'}} for='provinceName'>Select Province</label>
							<select className="select" style={{margin:'0px'}}name='provinceName' onChange={provinceChangeHandler} value={provinceName} required='true'>
							{provinces.map(province=>(
								<option name='option' key={province.key} disabled={province.disabled} value={province.value} selected>{province.value}</option>
							)) }	
							</select>
						</div>
					</div>	
					<div >
					<p id='errMessage' style={{visibility:'hidden',color:'red',paddingTop:'10px'}}>empty</p>
					</div>

				</div>
				<button type="submit" onSubmit={submitAddress} className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
			
		</form>
		:
		<div className="container" style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
		 <h1 style={{display:'flex'}}> Loading.......</h1>
		</div>
		}
		
</div>
:
history.push({pathname:'/'})
	}
</>
)
};
export default AddrressForm;
