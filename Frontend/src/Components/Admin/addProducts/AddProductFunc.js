import React from 'react';
import Axios from 'axios';
import {useCookies} from "react-cookie";

function useAddProductFunc(){

    const [cookie] = useCookies(['jwt']); 
    
    return async function(e)
    {
        e.preventDefault();
        try{

           if(e.target.pURL.value === " "){
               alert('please upload image')
               return;
           }
            const res = await Axios.post('http://localhost:3000/api/v1/products/addProduct',{ 
                pTitle: e.target.pTitle.value,
                pCetegory : e.target.pCetegory.value,
                pPrice: e.target.pPrice.value,
                pStock : e.target.pStock.value,
                pOnSale: e.target.pOnSale.value,
                // pEdible: e.target.pEdible.value,
                pImagePath:e.target.pURL.value,
                pDescription:e.target.pDescription.value,
                pOldPrice:e.target.pOldPrice.value
            },{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.jwt}`        
                }

            });
            if(res.data.status === 'success'){
                document.getElementById('errMessage').innerHTML = 'Successfully uploaded data';
                document.getElementById('errMessage').style.visibility = 'visible';
                document.getElementById('errMessage').style.paddingLeft = '45px';
            document.getElementById('errMessage').style.color = 'green';
            }else{
                document.getElementById('errMessage').innerHTML = 'Error in uploading data';
                document.getElementById('errMessage').style.visibility = 'visible';
            }
        }
        catch(err){
            document.getElementById('errMessage').innerHTML = err.response.data.message;
            document.getElementById('errMessage').style.visibility = 'visible';
        }
    }
}
export default useAddProductFunc;