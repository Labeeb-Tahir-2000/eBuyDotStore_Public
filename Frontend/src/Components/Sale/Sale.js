import React, { Component } from "react";
import SaleJSX from "./SaleJSX"
import "./icon.css"
import axios from "axios";
class sale extends Component{
    state={
        product:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          this.setState({product:response.data});
          
        });
     }
    render(){
        console.log(this.state.product)
const items= this.state.product.map(item=>{
    return  <SaleJSX key={item.id}id={item.id} url={item.url} title={item.title} />
});
        return(   
           items
              );
    } 
}
    

export default sale;