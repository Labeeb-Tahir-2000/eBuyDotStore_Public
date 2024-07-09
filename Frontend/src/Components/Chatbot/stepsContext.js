import React,{useState,useContext,createContext} from 'react';
import Post from './Post';


export const StepsContext = createContext();

export const StepsProviderFunc = (props)=>{

    const [steps , setSteps] = useState([
        {
          id:'1', 
          message:'Hey, how can I help You!', 
          trigger:'2',
        },
        {
          id:'2', 
          user:true,
          trigger:'3'
        }
       ,{
                id: '3',
                component: <Post />,
                asMessage: true,
                trigger:'2'
        },
      ]);
 
 return(
     <StepsContext.Provider value={[steps , setSteps]}>
         {props.children}
     </StepsContext.Provider>
 )

}

