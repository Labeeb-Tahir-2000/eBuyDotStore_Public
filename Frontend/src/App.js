import React  from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router , Route,Switch } from "react-router-dom";
import ChangePassword from './Components/Admin/changePassword/ChangePassword'
import NavbarAdmin from "./Components/Navbar/NavbarAdmin";
import NavbarUser from "./Components/Navbar/NavbarUser";
import NavbarLogin from "./Components/Navbar/navbarLogin";
import Sale from "./Components/Sale/Sale";
import Home from "./Components/Home/Home";
import About from "./Components/About/about";
import SignUp  from "./Components/Admin/signUp/SignUp";
import Signin  from "./Components/Admin/signIn/SignIn";
import Forget  from "./Components/Admin/forgetPassword/ForgetPassword";
import AddProducts  from "./Components/Admin/addProducts/AddProducts";
import ShowProducts from "./Components/Admin/manageProducts/ShowProducts";
import EditProducts from "./Components/Admin/manageProducts/EditProducts";
import ChangeUserName   from "./Components/Admin/changeUserName/ChangeUserName";
import Cart from "./Components/shoopingCart/Cart";
import ShowMore from './Components/Home/filterBar/utilits/ShowMoreCetegories';
import CetegoryProducts from './Components/Home/filterBar/CetegoryProducts';
import ShippingAddressPage from './Components/shipping/shippingAddress';
import BuyNow from './Components/buyNow/BuyNow';
import {ProviderFunc} from './Components/cartContext/cartContext';
import {UserProviderFunc } from './Components/userContext/UserContext';
import Orders from './Components/Admin/showOrders/ShowOrders';
import UserOrderDetails from './Components/Admin/showOrders/UserOrderDetails';
import PendingOrder from './Components/pendingOrder/PendingOrder.js'
import AllProducts from './Components/allProducts/allProducts';
import MyAccount from './Components/myAccountInfo/MyAccount'
import ChatbotComp from './Components/Chatbot/chatbot';
import {StepsProviderFunc} from './Components/Chatbot/stepsContext';
	
function App() {

  return (
    <div className = "App">
      
<UserProviderFunc>    
<ProviderFunc>  
<StepsProviderFunc>
  
<Router>
     
     <Switch>   
       <div className='outer'>
 
 
     <Route path = "/" exact>
       <NavbarUser/>
         <Home/>
     </Route>
 
     <Route path = "/chatbot" exact>
     <NavbarUser/>
       <ChatbotComp/>
       </Route>
 
     <Route path = "/signIn" exact>
         <NavbarLogin/>
         <Signin/>
       </Route>
       <Route path = "/signUp" exact>
         <NavbarLogin/>
         <SignUp/>
       </Route>
 
    
         <Route path = "/shippingPage" exact>
         <NavbarUser/>
         <ShippingAddressPage/>
         </Route>
         <Route path = "/BuyNow" exact>
         <NavbarUser/>
         <BuyNow/>
         </Route>
           
       <Route path = "/Allproducts" exact>
       <NavbarUser/>
         <AllProducts/>
       </Route>
       <Route path = "/forgetPassword" exact>
         <Forget/>
       </Route>
       <Route path = "/Cart" exact>
       <NavbarUser/>
         <Cart/>
         </Route>
         <Route path = "/PendingOrder" exact>
           <NavbarUser/>
         <PendingOrder/>
         </Route>
         <Route path = "/MyAccount" exact>
           <NavbarUser/>
           <MyAccount/>
         </Route>
       
         <Route path = "/ChangeUserName" exact>
         <NavbarUser/>
         <ChangeUserName/>
       </Route>
       <Route path = "/ShowMore" exact>
       <NavbarUser/>
         <ShowMore/>
       </Route>
       
       <Route path = "/Sale" exact>
       <NavbarUser/>
         <Sale/>
       </Route>
       <Route path = "/about" exact>
       <NavbarUser/>
           <About/>
       </Route> 
       {/* routing component with sending data as props in it from <Link/> */}
       <Route path="/CetegoryProducts"  >
       <NavbarUser/>
       <CetegoryProducts />
       </Route>
 
       </div> 
       </Switch>
 
 
       <Switch>
       <Route path = "/ChangePassword/:resetToken" >
         <ChangePassword/>
       </Route>
         <Route path = "/Orders" exact>
         <NavbarAdmin/>
         <Orders/>
         </Route>
         <Route path = "/userOrderDetails" exact>
         <NavbarAdmin/>
         <UserOrderDetails/>
         </Route>         
       <Route path = "/ShowProducts" exact>
       <NavbarAdmin/>
         <ShowProducts/>
       </Route>
       <Route path = "/EditProducts" exact>
       <NavbarAdmin/>
         <EditProducts/>
       </Route>
       <Route path = "/addProducts" exact>
       <NavbarAdmin/>
           <AddProducts/>
       </Route>
      
 </Switch>
     
 </Router>

</StepsProviderFunc> 
</ProviderFunc>  
</UserProviderFunc> 
    </div>
  );
}

export default App;
