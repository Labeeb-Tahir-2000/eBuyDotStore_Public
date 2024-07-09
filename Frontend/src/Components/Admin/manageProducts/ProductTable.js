import React from 'react'; 
import './productTable.css';
import {useHistory} from 'react-router-dom'

function ProductTable (props){
 const history = useHistory();
 
 const renderItems = props.products.map(product => (
        <tr style={{color:'rgb(107, 107, 107)'}} key={product._id}>
          <td style={{maxWidth:'120px',color:'black', fontWeight:'bold'}}>{product.pTitle}</td>
          <td>{product.pDescription}</td>
          <td >{product.pPrice}</td>
 
          <td className="toNonDisplay">{product.pCetegory}</td>
          <td>{product.pStock}</td>
          <td>{product.pOnSale}</td>
          <td onClick={()=> history.push({pathname:'/EditProducts' , state:{product:product}})} style={{maxWidth:'100px'}}><button className="btn btn-success">Edit</button></td>
        </tr>  
         
      ))
  
    return(
      
        <div className="container-fluid myTable" >
  
  <table className="table  table-hover" style={{outlineStyle: 'solid',outlineWidth:'thin',outlineColor:'rgb(178, 178, 178)',textAlign:'center'}}>
        <thead  style={{background:'rgb(56, 188, 255)',color:'white'}}>
            <tr>
              <th style={{maxWidth:'80px'}}>Title</th>
              <th>Description</th>
              <th >Price</th>
              <th className="toNonDisplay">Cetegory</th>
              <th>Stock</th>
              <th>On Sale</th> 
              <th>Actions</th> 
            </tr>
          </thead>
          <tbody>

           {renderItems}

          </tbody>
        </table>
        </div>
    )
}
export default  ProductTable;
