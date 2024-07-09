
import Axios from 'axios';
import {useCookies} from "react-cookie";

function useEditProductFunc(){

    const [cookie] = useCookies(['jwt']); 
    
    return async function(e)
    {
        e.preventDefault();
        try{
console.log( e.target.pOldPrice.value)
            const res = await Axios.patch('http://localhost:3000/api/v1/products/editProducts',{ // "" !== " "
                //e.target.value of <input/> type text always have "" if nothing inputed in it so we do not send those inputs that are 
                // not changed or are empty so we set them undefined and undefined means no data to send but "" is data to send
                _id: e.target.pID.value,
                pOldPrice: e.target.pOldPrice.value,
                pTitle: e.target.pTitle.value === "" || e.target.pTitle.value === null ? undefined : e.target.pTitle.value,
                pCetegory : e.target.pCetegory.value === "" || e.target.pCetegory.value === null? undefined : e.target.pCetegory.value,
                pPrice: e.target.pPrice.value === "" || e.target.pPrice.value === null ? undefined : e.target.pPrice.value,
                pStock : e.target.pStock.value === "" || e.target.pStock.value === null ? undefined : e.target.pStock.value,
                pOnSale: e.target.pOnSale.value ,// we do not apply condition becauze we want to update it according to either it is " " or "onSale"
                // pEdible: e.target.pEdible.value ,// we do not apply condition becauze we want to update it according to either it is " " or "edible"
                pImagePath: e.target.pURL.value  === " " || e.target.pURL.value  === null ? undefined : e.target.pURL.value,// if we don not put
                //this condition here before sending data it will send imagePath as " " bcz pURL.value have " " string data as we set by URL state
                pDescription: e.target.pDescription.value === "" || e.target.pDescription.value === null? undefined : e.target.pDescription.value,
            },{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.jwt}`        
                }

            });
           console.log(res.data)
           document.getElementById('errMessage').innerHTML = 'Successfuly uploaded edited data';          
           document.getElementById('errMessage').style.visibility = 'visible';
           document.getElementById('errMessage').style.paddingLeft = '45px';
           document.getElementById('errMessage').style.color = 'green';
        }
        catch(err){
            if(err.response){
                document.getElementById('errMessage').innerHTML = err.response.data.message;
                document.getElementById('errMessage').style.visibility = 'visible';
            }else{
                alert(err.message)
            }
            
         
        }
    }
}
export default useEditProductFunc;