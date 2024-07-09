import './filterBar.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

function filterBar(){
    return(
        <div>
      
        <div className='row container-fluid outerCetegoryFilterBar ' style={{padding:'4px',marginBottom:'15px'}} >
                <div className='col-12 filterBarHeading' style={{ padding:'5px 7px',marginTop:'20px' ,display:'flex',justifyContent:'space-between' }}>
                    <h1 style={{display:'inline'  ,marginLeft:'7px',color:'#F57224',marginTop:'0px' }}>Categories</h1> 
                    {/* <Link style={{paddingTop:'4px',textDecoration:'none',color:'red' ,marginRight:'0px',marginTop:'1%'}} to='ShowMore'><h5 >show more
                        <FontAwesomeIcon  style={{color:'rgb(60, 205, 242)',marginLeft:'5px',marginRight:'0px',paddingTop:'3px'}} icon={faAngleDoubleRight}/> </h5></Link> */}
                </div>
                <div className='row container-fluid cetegoryFilterBar'style={{ padding:'0px',margin:'0px' }}>
                <div className='col-12 col-sm-6 col-lg-6 col-xl-6' style={{ padding:'0px',margin:'0px' ,display:'flex-inline'}}>
            
                <Link to={{ pathname: "/CetegoryProducts", state:'LCD,LED'}}>    
                    <div className=' col-2' style={{ marginLeft:'0px',marginRight:'7px',display:'inline-block'}} >
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://imraneshop.com/pub/media/catalog/product/cache/e6f9e486517c53bd25be73cc8d0c8138/e/m/em_55p615_front_global.png' alt='Biscuites'/>
                        <caption style={{fontSize:'12px',paddingLeft:'0px',margin:'0px'}}>#LCD& LED</caption> 
                    </div> 
                </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Heaters'}}> 
                    <div className=' col-2'style={{ marginLeft:'0px',marginRight:'7px',display:'inline-block' }} >
                        <img style={{width:'60px',height:'60px',padding:'0px',borderRadius:'50%'}} src='https://leyjao.pk/blog/wp-content/uploads/2021/12/buy_electric_heater_online_in_pakistan_azia_store_leyjao-pk.jpg' alt='Chips'/>
                        <caption style={{fontSize:'12px',paddingLeft:'7px',margin:'0px'}}>#Heaters</caption> 
                    </div>
                </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Gyser'}}>       
                    <div className=' col-2'style={{ marginLeft:'0px',marginRight:'7px' ,display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://static-01.daraz.pk/p/8d57fae56890d449821ae97675a4a2ab.jpg' alt='stationary'/> 
                        <caption style={{fontSize:'12px',paddingLeft:'1px',margin:'0px'}}>#Instant Geyser</caption> 
                    </div>
                    </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Oven'}}>       
                    <div className=' col-2' style={{ marginLeft:'0px',marginRight:'7px',display:'inline-block'}} >
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://cdnprod.mafretailproxy.com/sys-master-root/h29/h07/9854043193374/223296_main.jpg_480Wx480H' alt='Biscuites'/>
                        <caption style={{fontSize:'12px',paddingLeft:'0px',margin:'0px'}}>#Oven</caption> 
                    </div>
                </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Washing Machine,Dryer'}}>       
                    <div className=' col-2' style={{ marginLeft:'0px',marginRight:'0px' ,display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416174_sd.jpg' alt='Spices'/>
                        <caption style={{fontSize:'12px',paddingLeft:'5px',margin:'0px'}}>#Washing Machine & Dryers</caption> 
                    </div>                    
                </Link> 
              
		
              </div>
              <div className='col-12 col-sm-6 col-lg-6  col-xl-6' style={{ padding:'0px',margin:'0px' ,display:'flex-inline'}}>
            
                <Link to={{ pathname: "/CetegoryProducts", state:'toaster'}}>     
                    <div className='col-2' style={{marginLeft:'0px',marginRight:'7px',display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://cb.scene7.com/is/image/Crate/CuisinartClassicTostrSSF20/$web_pdp_main_carousel_med$/201029182257/cuisinart-classic-2-slice-toaster.jpg' alt='Daal'/>
                        <caption style={{fontSize:'12px',paddingLeft:'1px',margin:'0px'}}>#Toaster</caption> 
                    </div>
                </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Fridge'}}>       
                    <div className=' col-2' style={{ marginLeft:'0px',marginRight:'7px' ,display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://cdn.shopify.com/s/files/1/2459/1583/products/Ice_Hairline_Silveraaa_78b1c9b9-dbf8-4aeb-a751-fabc27a12171_large.jpg?v=1586951664' alt='Spices'/>
                        <caption style={{fontSize:'12px',paddingLeft:'1px',margin:'0px'}}>#Fridge</caption> 
                    </div>
                    </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Air conditioners'}}>       
                    <div className='col-2' style={{ marginLeft:'0px',marginRight:'7px',display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://cdn.pixabay.com/photo/2021/09/08/07/20/air-conditioner-6605973__340.jpg' alt='Daal'/>
                        <caption style={{fontSize:'12px',paddingLeft:'1px',margin:'0px'}}>#Air conditioners</caption> 
                    </div>
                    </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Kettles'}}>   
                    <div className=' col-2'style={{ marginLeft:'0px',marginRight:'7px' ,display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://sunbeam-s3-production.s3.ap-southeast-2.amazonaws.com/large_Perfectly_Pure_Glass_Kettle_6aafe78b2e.jpeg' alt='stationary'/> 
                        <caption style={{fontSize:'12px',paddingLeft:'0px',margin:'0px'}}>#kettles</caption> 
                    </div>
                    </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Juicers'}}>       
                    <div className=' col-2'style={{ marginLeft:'0px',marginRight:'0px',display:'inline-block' }} >
                        <img style={{width:'60px',height:'60px',padding:'0px',borderRadius:'50%'}} src='https://ksassets.timeincuk.net/wp/uploads/sites/56/2021/05/nutribullet-juicer.jpg' alt='Chips'/>
                        <caption style={{fontSize:'12px',paddingLeft:'7px',margin:'0px'}}>#Juicers</caption> 
                    </div> 
                    </Link> 
              
		
	
              </div> 
              </div>
        </div>

      </div>
    )
}
export default filterBar;
