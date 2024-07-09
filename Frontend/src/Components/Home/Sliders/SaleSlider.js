import  "./../cardProducts.css";
import 'mdb-ui-kit';
import React,{useEffect,useState,useContext} from "react";
import CardProductsJSX from './../cardProductsJSX';
import Axios from "axios";
import {useCookies} from "react-cookie";
import '../line.css';
import  "./saleSlider.css";

function SaleSlider(props){
    const [cookie] = useCookies(['jwt']);
   const [products,setProducts] =useState([])
    useEffect(() => {
        getSaleProducts();
    }, [])
    
    const getSaleProducts= async()=>{
        try{
        const res =  await Axios.post('http://localhost:3000/api/v1/products/getSaleProducts ');
        
        console.log(res.data.product)
      setProducts(res.data.product)
      
    }catch(err){
      console.log(err.responce)
    }}

    const totalProducts = products.length;
    let count =0

    const itemsFirst= products.map(item=>{
        count = count +1;
        if(count < 4 ){// making condition so only first 3 products will be rendered by CardProductsJSX and other will be skipped
            return <div className="col-4 saleCardStyle" style={{marginLeft:'0px',paddingRight:'10%'}}>
             <CardProductsJSX checkLogin={checkLoginfunc} id={item._id} url={item.pImagePath} title={item.pTitle} price={item.pPrice} oldPrice={item.pOldPrice}  description={item.pDescription} />
        </div>
        }else {
            return;
        }   
    });

    const itemsSecond= products.map(item=>{
        if(count  === totalProducts){ //making count 0 bcz so count will start from 0 so products that where rendered by itemsFirst will skipped
            count = 0;
        }
        count = count +1;
        if(count > 3 && count < 7 ){ // making condition so only first 3 will be skipped and next 3 products will be rendered by CardProductsJSX
            return <div className="col-4 saleCardStyle "style={{marginLeft:'0px',paddingRight:'10%'}}>
             <CardProductsJSX   checkLogin={checkLoginfunc} id={item._id} url={item.pImagePath} title={item.pTitle} price={item.pPrice} oldPrice={item.pOldPrice}  description={item.pDescription} />
        </div>
        }else {
            return;
        }});

    let itemsThird;
   if(totalProducts > 6){
    itemsThird= products.map(item=>{
        if(count  === totalProducts){ //making count 0 bcz so count will start from 0 so products that where rendered by itemsFirst will skipped
            count = 0;
        }
        count = count +1;
        if(count > 6 && count < 10 ){ // making condition so only first 3 will be skipped and next 3 products will be rendered by CardProductsJSX
            return <div className="col-4 saleCardStyle " style={{marginLeft:'0px',paddingRight:'10%'}}>
             <CardProductsJSX id={item._id} url={item.pImagePath} title={item.pTitle} price={item.pPrice}  oldPrice={item.pOldPrice} description={item.pDescription} />
        </div>
        }else {
            return;
        }});
   }
   // following code is for buynow and addtocart buttons with check of user login
   function checkLoginfunc(pageName , id){    
    if(pageName == 'addToCart'){
      props.checkLogin("addToCart",id);
    }else if(pageName == 'shippingPage'){
      props.checkLogin("shippingPage",id);
    }
  }


   let itemsForth;
   if(totalProducts > 9){
    itemsForth= products.map(item=>{
        if(count  === totalProducts){ //making count 0 bcz so count will start from 0 so products that where rendered by itemsFirst will skipped
            count = 0;
        }
        count = count +1;
        if(count > 9 && count < 13 ){ // making condition so only first 3 will be skipped and next 3 products will be rendered by CardProductsJSX
            return <div className="col-4 saleCardStyle " style={{marginLeft:'0px',paddingRight:'10%'}}>
             <CardProductsJSX checkLogin={checkLoginfunc} id={item._id} url={item.pImagePath} title={item.pTitle} price={item.pPrice}  oldPrice={item.pOldPrice} description={item.pDescription} />
        </div>
        }else {
            return;
        }});
   }


    

 return(
  <div>
     {products.length === 0?
      null
    :
    <div style={{ background: '#F4F4F4'}}>
    <hr  style={{marginTop:'40px',marginBottom:'0px'}}className="hr-text" data-content="Flash Sale "/>
    <div
    id="carouselSaleSlider"
    className="carousel slide carousel-fade"
    data-mdb-ride="carousel"
    >

      <div className="carousel-inner saleCardStyleOuter" style={{paddingLeft:'8%'}}>
        
            <div className="carousel-item active ">
          
              <div style={{marginTop:'60px' ,paddingRight:'10%',paddingLeft:'10%'}} className="row container-fluid">
                            {itemsFirst}
              </div>
            </div>
            {totalProducts > 3 && <div className="carousel-item ">
            
            <div style={{marginTop:'60px' ,paddingRight:'10%',paddingLeft:'10%'}} className="row container-fluid">
                          {itemsSecond}
            </div>
            </div>
            }

            {
                totalProducts > 6?
                <div className="carousel-item ">
            
            <div style={{marginTop:'60px' ,paddingRight:'10%',paddingLeft:'10%'}} className="row container-fluid">
                          {itemsThird}
            </div>
            </div>
            :
            null
            }
             {totalProducts > 9 && <div className="carousel-item ">
            
            <div style={{marginTop:'60px' ,paddingRight:'10%',paddingLeft:'10%'}} className="row container-fluid">
                          {itemsForth}
            </div>
            </div>
            }

        
      </div>
    
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselSaleSlider"
        data-mdb-slide="prev"
      >
        <span style={{color:"#EFEFEF"}} className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselSaleSlider"
        data-mdb-slide="next"
      >
        <span style={{color:"#EFEFEF" }}  className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    }   
    
  </div>
)
}
export default SaleSlider;