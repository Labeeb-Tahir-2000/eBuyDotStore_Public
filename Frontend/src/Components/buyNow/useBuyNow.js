import Axios from 'axios';
import {useContext} from 'react';
import {CartContext} from "../cartContext/cartContext";
import { useCookies } from 'react-cookie'; 
import { useHistory } from "react-router-dom";

function useBuyNow(SingleItemID ,previousTotal , subTotal , shippingFee){
  
    const history = useHistory();
    const [cartItem,setCartItem] = useContext(CartContext);
    const [cookie] = useCookies(['jwt']);        
return async function(){

    try{
           let  items =[]
          console.log(SingleItemID ,previousTotal , subTotal , shippingFee)

            if(SingleItemID){
              items[0] = SingleItemID;
            }else{
                items = [...cartItem]
            }
            const res=  await Axios.post('http://localhost:3000/api/v1/users/setUserOrder',{
                products:items,
                previousTotal : previousTotal ,
                subTotal: subTotal ,
                shippingFee:shippingFee},{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.jwt}`        
                }}
            );
            if(res.data.status === 'success'){
                try{
                const res=  await Axios.post('http://localhost:3000/api/v1/products/editProductsCount',{products:items},{
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${cookie.jwt}`        
                    }})
                   
                }catch(err){
                   return  console(err)
                }
                document.getElementById('goToHome').style.display = 'inline';
                document.getElementById('addressCartFooter').style.display = 'none';
                document.getElementById('goToHome').style.opacity = '1';
               
                
            }
           
         
          
        }catch(err){
            
            console.log(err)
            
        }
    }
}
export default useBuyNow;
