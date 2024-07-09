
import React, { Component,useEffect ,useState, useContext} from 'react';
import axios from 'axios';
import { StepsContext } from './stepsContext';


function post(props) {
  
  // const[steps,setSteps] = useContext(StepsContext);
  const[response,setResponse]= useState("");
 
  let length;
  useEffect(()=>{
   
    postMsg(props.previousStep.value);
  })
  // constructor(props) {
  //   super(props);
  //   const { steps } = this.props;
  //   const { submit, firstname, lastname, email } = steps;

  //   this.state =  { submit, firstname, lastname, email }; 
  // }
// componentDidMount() {
//     const userObject = {
//       submit:this.state.submit.value,
//       first_name:this.state.firstname.value,
//       last_name:this.state.lastname.value,
//       email:this.state.email.value,
//     };
 const postMsg=async(chat)=>{
   console.log(chat);
   try{
    const res= await axios.post('http://localhost:3000/api/v1/chatbot/chatbotResponse', {chat})
    if(res.data.msg){
      setResponse(res.data.msg);
      // console.log(res.status)
      // console.log(res.data.msg)
    }
   }catch(err){
      console.log(err);
   }
  };
    return (
      <div>{response}</div>
      );
    
 
}

  export default post;