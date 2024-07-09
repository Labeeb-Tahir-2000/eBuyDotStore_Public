
import './ShowMoreCetegories.css';
import '../../line.css';
import { Link } from 'react-router-dom';
function ShowMoreCetegories(){

return(

<div>
     
 <div className='row container-fluid' style={{padding:'auto'}} >
        <div className='col-12 ' style={{ marginTop:'30px' ,display:'flex',justifyContent:'center' }}>
            {/* <h2 style={{display:'inline'  }}>All Cetegories</h2> 
             */}
        </div>
    <hr style={{margin:'50px 0px',fontWeight:'bold',fontSize:'20px', color:'black'}}className="hr-text hr1" data-content="Edible Product Cetegories"/>
   <div className='cetegory row container-fluid' style={{ margin:'0px',marginBottom:'50px',padding:'0px'}} >
    <div className='col-12 col-sm-6 col-lg-6' style={{ marginLeft:'0px',padding:'auto',display:'flex-inline'}}>
            <Link to={{ pathname: "/CetegoryProducts", state:'Chips'}}> 
                <div className=' col-3'style={{ display:'inline-block' }}  >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://newsd.in/wp-content/uploads/2018/07/pepsico-india-lays-and-kurkure-809.jpg' alt='Chips'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Chips</caption> 
                </div> 
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Chocolate'}}> 
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://i5.paktive.com/p9/t/172EC04.jpg' alt='Biscuites'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Chocolates</caption> 
                </div>
                </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Biscuit'}}> 
                <div className='col-3' style={{ display:'inline-block'}}>
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://i5.paktive.com/p9/t/172EC04.jpg' alt='Biscuites'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Biscuits</caption> 
                </div>
                </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Cold Drink'}}> 
                <div className=' col-3'style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://4.imimg.com/data4/JY/CV/MY-4517806/stationary-250x250.jpg' alt='stationary'/> 
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Cold Drinks</caption> 
                </div>
            </Link>   
            
    </div> 
    <div className='col-12 col-sm-6 col-lg-6' style={{marginLeft:'0px',padding:'auto',display:'flex-inline'}}>
            <Link to={{ pathname: "/CetegoryProducts", state:'Juice'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Juices</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Cooking Ghee'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Ghee</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Cooking Oil'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Cooking Oil</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Recipe Masalah'}}>     
                <div className=' col-3' style={{display:'inline-block'}}>
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://www.joysspices.com/image/cache/catalog/AUg%20Cam%20Sprint/Untitled%20design%20(1)-200x200.jpg' alt='Spices'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Recipe Masalah</caption> 
                </div>
            </Link>     
       
    </div>
    <div className='col-12 col-sm-6 col-lg-6' style={{marginLeft:'0px',padding:'auto',display:'flex-inline'}}>
            <Link to={{ pathname: "/CetegoryProducts", state:'Spice'}}>     
                <div className=' col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://www.joysspices.com/image/cache/catalog/AUg%20Cam%20Sprint/Untitled%20design%20(1)-200x200.jpg' alt='Spices'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Spices</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Herb'}}> 
                <div className=' col-3' style={{ display:'inline-block'}}>
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://www.joysspices.com/image/cache/catalog/AUg%20Cam%20Sprint/Untitled%20design%20(1)-200x200.jpg' alt='Spices'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Herb</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Grain'}}> 
                <div className='col-3' style={{ display:'inline-block'}}>
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Grains</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Rice'}}> 
                <div className=' col-3' style={{ display:'inline-block'}}>
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://i5.paktive.com/p9/t/172EC04.jpg' alt='Biscuites'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Rice</caption> 
                </div>
            </Link>
    </div>
    <div className='col-12 col-sm-6 col-lg-6' style={{marginLeft:'0px',padding:'auto',display:'flex-inline'}}>        
            <Link to={{ pathname: "/CetegoryProducts", state:'Kachup'}}> 
                <div className=' col-3' style={{ display:'inline-block'}}>
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://i5.paktive.com/p9/t/172EC04.jpg' alt='Biscuites'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Kachup</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Souce'}}> 
                <div className=' col-3' style={{ display:'inline-block'}}>
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://i5.paktive.com/p9/t/172EC04.jpg' alt='Biscuites'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Souces</caption> 
                </div>
            </Link>
            
    </div> 
    </div>
<hr style={{margin:'50px 0px',fontWeight:'bold',fontSize:'20px', color:'black'}}className="hr-text hr2" data-content="Non Edible Product Cetegories"/>
    <div className='cetegory row container-fluid' style={{ margin:'0px',padding:'0px'}} >
    <div className='col-12 col-sm-6 col-lg-6' style={{marginLeft:'0px',padding:'auto',display:'flex-inline'}}>

            <Link to={{ pathname: "/CetegoryProducts", state:'Stationary'}}> 
                <div className=' col-3'style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://4.imimg.com/data4/JY/CV/MY-4517806/stationary-250x250.jpg' alt='stationary'/> 
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Stationary</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Beuty & Care'}}>      
                <div className='col-3' style={{ display:'inline-block'}}>
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Beuty& Care</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Perfume'}}>      
                <div className='col-3' style={{ display:'inline-block'}}>
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Perfumes</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Soap'}}>   
                <div className=' col-3'style={{display:'inline-block' }} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://c8.alamy.com/comp/JX134J/detergents-and-brush-tools-laundry-and-cleaning-icon-vector-illustration-JX134J.jpg' alt='Chips'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Soap</caption> 
                </div> 
            </Link>
            
    </div> 
    <div className='col-12 col-sm-6 col-lg-6' style={{marginLeft:'0px',padding:'auto',display:'flex-inline'}}> 
            
            <Link to={{ pathname: "/CetegoryProducts", state:'Detergent'}}> 
            <div className=' col-3'style={{display:'inline-block' }} >
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://c8.alamy.com/comp/JX134J/detergents-and-brush-tools-laundry-and-cleaning-icon-vector-illustration-JX134J.jpg' alt='Chips'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Detergents</caption> 
            </div>
            </Link>
            
            <Link to={{ pathname: "/CetegoryProducts", state:'Surface Cleaner'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Surface Cleaner</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Bathroom Cleaner'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Bathroom Cleaner</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Tissue'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Tissue Papers</caption> 
                </div>
            </Link>
    </div>
    <div className='col-12 col-sm-6 col-lg-6' style={{marginLeft:'0px',padding:'auto',display:'flex-inline'}}>  

            <Link to={{ pathname: "/CetegoryProducts", state:'Insect Killer'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Insects Killer</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Cell'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Clock Cell</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Electronic'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Electronic</caption> 
                </div>
            </Link>
            <Link to={{ pathname: "/CetegoryProducts", state:'Face Mask'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Face Mask</caption> 
                </div>
            </Link> 
            
    </div>        
    <div className='col-12 col-sm-6 col-lg-6' style={{marginLeft:'0px',padding:'auto',display:'flex-inline'}}>  
             <Link to={{ pathname: "/CetegoryProducts", state:'Baby Pamper'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Baby Pampers</caption> 
                </div>
            </Link> 
            <Link to={{ pathname: "/CetegoryProducts", state:'Adult Pamper'}}>  
                <div className='col-3' style={{ display:'inline-block'}} >
                    <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                    <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Adult Pampers</caption> 
                </div>
            </Link>   
    </div>
  </div>
</div>
</div>
    ) 
}
export default ShowMoreCetegories;