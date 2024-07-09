import React, { useEffect, useState ,useContext } from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import {Table} from 'antd';
import ProductTableJSX from './ProductTable';
import './productTable.css';
import { UserContext } from '../../userContext/UserContext';
import {useHistory} from 'react-router-dom'

function ManageProducts (){
    const history = useHistory();
	const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
  const [cookie] = useCookies(['jwt']);  
  const [table,setTable] = useState();
  const [resProducts,setResProducts] = useState([]);
//   const [Edible,setEdible] = useState(" ");
//   const [nonEdible,setNonEdible] = useState(" ");
  const [cetegoryValue, setCetegoryValue] = useState(1);
//   const [nonEdibleCetegoryValue, setNonEdibleCetegoryValue] = useState(1);
  const [allProducts,setAllProducts] = useState(" ");

  useEffect(async() => {
    Submit();
  }, []);

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


//    const  onEdibleChange=()=>{
//        if(Edible === " "){
//         setEdible("edible")
//        }else if(Edible === "edible"){
//         setEdible(" ")
//        }
       
//      }
    //  const  onNonEdibleChange=()=>{
    //     if(nonEdible === " "){
    //      setNonEdible("nonEdible")
    //     }else if(nonEdible === "nonEdible"){
    //      setNonEdible(" ")
    //     }
        
    //   }
    const onAllProductChange=()=>{
         if(allProducts === " "){
            setAllProducts("allProducts")
           }else if(allProducts === "allProducts"){
            setAllProducts(" ")
           }
    }
    // const onCetegoryChange = (event) => {
    //     setCetegoryValue(event.currentTarget.value)
    // }
    // const onNonEdibleCetegoryChange = (event) => {
    //     setNonEdibleCetegoryValue(event.currentTarget.value)
    // }
    
    const Submit= async ()=>{
        
            // e.preventDefault(); 
            let data = {};
            // if(e.target.allProducts.value === "allProducts"){
            //     data={}
            // }
            // else if(e.target.pEdible.value === "edible"){
            //     data={
            //     pEdible :e.target.pEdible.value, 
            //     pCetegory :e.target.pCetegory.value 
            //     }
            // }else if(e.target.pNonEdible.value === "nonEdible"){
            //     data={
            //     pEdible : " ",
            //     pCetegory :e.target.pNonEdibleCetegory.value
            //     }
            // }
            console.log(data);
           try{
            const res = await Axios.post('http://localhost:3000/api/v1/products/showProducts', data,
            {
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.jwt}`        
                }
            }
            ); 
            console.log(res.data);     
           setResProducts(res.data.product)
        } 
        catch(err){ 
            console.log(err); 
            console.log(err.message); 
        }
    };


    return(
    <>
     
    {userLoggedIn.length !== 0 ?
        <>
		{userLoggedIn.role === 'admin'?  
        <div  style={{marginTop:'70px'}}>
 
         <div style={{paddingTop:'10px'}}>
         <ProductTableJSX products={resProducts}/>
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

    );
}

export default ManageProducts;