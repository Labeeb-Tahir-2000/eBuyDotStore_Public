import React from 'react';
import {useState,useEffect,useContext} from 'react';
import useEditProductFunc from './EditProductFunc';
import { app }  from './../../firebase/firebaseConfig';
import "./../SignIn.css";
import {useLocation,useHistory} from 'react-router-dom';
import { UserContext } from '../../userContext/UserContext';

function EditProducts(){
	const history = useHistory();
	const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
	const Location = useLocation();
    const [image, setImage]= useState(null);
	const [sale, setSale]= useState(' ');
	// const [edible, setEdible]= useState(' ');//its initial value is ' ' empty string not '' which null value not string so '' will be set to undefined in EditProducFun.js
	const [URL, setURL] = useState(' ');
	const [cetegoryValue, setCetegoryValue] = useState(" ")
	const [ID, setID] = useState('');
	const [Title, setTitle] = useState('')
	const [Description, setDescription] = useState('')
	const [Price, setPrice] = useState();
	const [oldPriceDisable, setOldPriceDisable] = useState(true);
	const [oldPrice, setOldPrice] = useState(' ')
	useEffect(() => {
	if(Location.state){
		setID(Location.state.product._id)
		setTitle(Location.state.product.pTitle)
		setDescription(Location.state.product.pDescription)
		setCetegoryValue(Location.state.product.pCetegory)
		setPrice(Location.state.product.pPrice);
		// setEdible(Location.state.product.pEdible);
		setSale(Location.state.product.pOnSale);
		setOldPrice(Location.state.product.pOldPrice)
		// if(Location.state.product.pEdible === 'edible'){
		// 	document.getElementById('Edible').checked ='true'
		// }
		if(Location.state.product.pOnSale === 'onSale'){
			document.getElementById('Sale').checked ='true'
		}
		
	}
	}, [])
	const nonEdibleCetegories = [
		{ key: 1, value: "Heaters" },
		{ key: 2, value: "Juicers" },
		{ key: 3, value: "kettles" },
		{ key: 4, value: "Air conditioners" },
		{ key: 5, value: "Fridge" },
		{ key: 6, value: "Toaster" },
		{ key: 7, value: "Washing Machine" },
		{ key: 8, value: "Dryers" },
		{ key: 9, value: "Oven" },
		{ key: 10, value: "Instant Gyser" },
		{ key: 11, value: "LCD" },
		{ key: 12, value: "LED" },
		 
	
	]
	
	const useEditProductFuncCall = useEditProductFunc();

	const IDChangeHandler =(event)=>{
		setID(event.currentTarget.value)
	}
	const titleChangeHandler =(event)=>{
		setTitle(event.currentTarget.value)
	}
	const descriptionChangeHandler =(event)=>{
		setTitle(event.currentTarget.value)
	}
	const onCetegoryChange = (event) => {
        setCetegoryValue(event.currentTarget.value)
    }
	const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }
    const oldPriceChangeHandler =(event)=>{
		setOldPrice(event.currentTarget.value)
	}

	const saleChangeLisner =()=>{
	if(sale === ' '){
		setSale('onSale');
		setOldPriceDisable(false)
	}else{
		setSale(' ');
		setOldPriceDisable(true)
	}

	}
	// const edibleChangeLisner =()=>{
	// if(edible === ' '){
	// 	setEdible('edible');
	// }else{
	// 	setEdible(' ');
	// }
// }
	const handleChange = (e) => {

		 if (e.target.files[0]) {
		 const newImage = e.target.files[0];
		  setImage(newImage)
		  console.log(newImage);
		}else{
			console.log('no image');
		}
	  }

	 const  handleUpload = async () => {
	
		const storageRef = app.storage().ref('/images');
		const fileRef = storageRef.child(image.name);
		await fileRef.put(image);
		setURL(await fileRef.getDownloadURL());

		
	 }
    return(
		<>
     
        {userLoggedIn.length !== 0 ?
				<>
				{userLoggedIn.role === 'admin'?
			<div className="text-center" style={{padding:'50px' }}>
			<div className="logo" style={{color:'#F57224'}}>Edit Products</div>
				<div className="login-form-1">
				<form id="register-form" className="text-left"  onSubmit={useEditProductFuncCall}>
					<div className="login-form-main-message"></div>
					<div className="main-login-form">
						<div className="login-group">
						<div className="form-group">
								<input type="text" className="form-control"  name="pID" placeholder="Prodcut ID" onChange={IDChangeHandler}required='true' value={ID}/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control"  name="pTitle" onChange={titleChangeHandler} placeholder="Prodcut Name" value={Title}/>
							</div>

							<div className="form-group">
								<div className=" row" style={{display:'flex',paddingLeft:'13px', paddingRight:'10px'}}	>
									<input style={{width:'50%',display:'inline'}} type="number" className="form-control col-6"  onChange={priceChangeHandler} value={Price} name="pPrice" placeholder="Price" />
									<input style={{width:'50%',display:'inline'}} disabled={oldPriceDisable} value={oldPrice} onChange={oldPriceChangeHandler}type="number" className="form-control col-6"  name="pOldPrice" placeholder="Old Price" />
								</div>
								
							</div>

							<div className="form-group">
								<input type="text" className="form-control"  name="pDescription" onChange={descriptionChangeHandler} value={Description} placeholder="Product Decription"/>
							</div>
							
							<div className="form-group">
								<input type="text" className="form-control" id="pCount" name="pStock" placeholder="Number of Products"/>
							</div>

							<div className="form-group-select" >
							
								<select className="form-select form-select-sm  " style={{color:'#6e6e6e ',fontWeight: 'bold',
								fontSize: '20px',padding: 'none ',marginBottom:'3px !important',marginTop:'7px !important',overflow:'scroll'}}
								name="pCetegory" onChange={onCetegoryChange} value={cetegoryValue}>
								
								{
									nonEdibleCetegories.map(item => (
										<option style={{overflow:'scroll !important'}}key={item.key} value={item.value}>{item.value} </option>
									))
								}

								</select>
							</div>

							<div style={{paddingTop:'9px',paddingBottom:'0px'}}className="form-group login-group-checkbox "  >                 
							
							
								<input  type="checkbox" className="" name="pOnSale" onChange={saleChangeLisner} id="Sale"  value={sale}/>
								<label for="Sale">On Sale</label>
						
							</div>
							
							<div className=" rounded form-group  ">
							<input  style={{marginBottom:'8px'}} onChange={handleChange} className="pic" type="file" accept = "image/*" />
							</div>
							
						
							<div  className="form-group" >
							<input style={{marginTop:'8px',padding:'2px', width:'110%'}} type="button" className="btn btn-outline-primary btn-lg"  onClick={handleUpload}  value='Click here to upload the image'/>
							<input style={{display:'none'}} role='button'   name="pURL" value={URL} />
							</div>
						

							<div >
								<p id='errMessage' style={{visibility:'hidden',color:'red',paddingTop:'10px'}}>empty</p>
							</div>
							
						</div>
						<button type="submit" onSubmit={useEditProductFuncCall} className="login-button"><i className="fa fa-chevron-right"></i></button>
					</div>
					
				</form>
			</div>
			<div style={{marginTop:'10px' , width:'100%', maxHeight:'240px'}}>
			<img style={{marginTop:'10px' , maxWidth:'250px', maxHeight:'240px' ,borderRadius:'50%'}}src={URL}/>
			</div>
			</div>
		:
			history.push({pathname:'/'})
				}
			</>
		:
		<div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
		<h2>Loading.....</h2>
	</div> 
				}
			</>
    )
}
export default EditProducts;
