import React from "react";

import {Carousel} from '3d-react-carousal';


const ImageSlider =()=>{
    let slides = [
        <img  src="https://firebasestorage.googleapis.com/v0/b/meharsuperstore-2021.appspot.com/o/images%2Fonline-shopping-web-shop-e-shopping-concept.jpg?alt=media&token=4573a704-38a1-4edc-8e6f-646733c2fd58" alt="1" />,
        <img  src="https://firebasestorage.googleapis.com/v0/b/meharsuperstore-2021.appspot.com/o/images%2FOnline_Shoping_13.jpg?alt=media&token=5e03cffe-4bcb-46de-ad0f-df5752e1d29e" alt="2" />,
        <img  src="https://firebasestorage.googleapis.com/v0/b/meharsuperstore-2021.appspot.com/o/images%2Fshop-online-e-commerce-marketing-business-concept.jpg?alt=media&token=49a78d78-5bfb-42cc-af1b-31aa50adecd8" alt="3" />  ,
        
          ];
    const style={
        backgroundColor:"#2A2F3F",
        padding:"20px",
        
    }
    return(
        <div style={style}  className="container-fluid">
 <Carousel  slides={slides} autoplay={true} interval={2000}/>
        </div>
 
    );

}
export default ImageSlider;