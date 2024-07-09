
import React,{useContext,useState,useEffect} from "react";
import { useHistory } from "react-router";
import { CartContext } from "../../cartContext/cartContext";

function CartProducts (props){
  const history = useHistory();
    
   const renderUsers = props.users.map(user => { 
       if(user.orderedProducts.length > 0){
            return   <tr key={user._id}>

                <td style={{paddingTop:'25px',color:'rgb(104, 104, 104)'}} >{user.address.name}</td>
                <td style={{paddingTop:'25px',color:'rgb(104, 104, 104)'}}>{user.address.address}</td>
                <td style={{paddingTop:'25px',color:'rgb(104, 104, 104)'}}>{user.orderedProducts.length}</td>
                <td style={{paddingTop:'25px'}}><button style={{background:'rgb(237, 33, 33)' , border:'1px' , color :' white'}}
                onClick={()=>  history.push({pathname:"/userOrderDetails",state:{user:user}})}
                > Details </button> </td>
                
            </tr>
            }
           })
        

    return( 
        <div style={{marginTop:'70px'}}>  
               
                <div >
                 <table className="table  table-hover" style={{outlineStyle: 'solid',outlineWidth:'thin',outlineColor:'rgb(178, 178, 178)',textAlign:'center'}}>
                     <thead  style={{background:'rgb(56, 188, 255)',color:'white'}}>
                         <tr>
                             <th>Name</th>
                             <th>Address</th>
                             <th>Ordered Items Count</th>
                             <th>Show Details</th>
  
                         </tr>
                     </thead>
                     <tbody  style={{background:'white'}} >
                         {renderUsers}
                     </tbody>
                 </table>
             </div>
             
    </div> 
    )
};
export default CartProducts;