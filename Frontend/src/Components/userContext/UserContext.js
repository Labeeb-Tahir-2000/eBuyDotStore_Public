import React,{useState,useContext,createContext} from 'react';

export const UserContext = createContext();

export const UserProviderFunc = (props)=>{
    const [userLoggedIn , setUserLoggedIn] = useState([])
 return(
     <UserContext.Provider value={[userLoggedIn , setUserLoggedIn] }>
         {props.children}
     </UserContext.Provider>
 )

}

