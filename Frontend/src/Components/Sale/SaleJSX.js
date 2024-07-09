import React from "react";
import  "./sale.css";

function SaleJSX (props){
    return(
      
      
            <div >
                <div className="card product_item">
                    <div className="body">
                        <div className="cp_img">
                            <img src={props.url} alt="Product" className="img-fluid"/>
                            <div className="hover">
                                <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus"></i></a>
                                <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart"></i></a>
                            </div>
                        </div>
                        <div className="product_details">
                            <h5><a href="ec-product-detail.html">{props.title}</a></h5>
                            <ul className="product_price list-unstyled">
                                <li className="new_price">{props.price}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            
            
        </div>
  
    )
};
export default SaleJSX;