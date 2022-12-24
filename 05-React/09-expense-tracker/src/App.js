import { Fragment, useState } from "react";
import { Route , Routes } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import SignUp  from "./pages/SignUp";
import Home from "./pages/Home";
import { UpdateProfile } from "./components/UpdateProfile";
import { ForgotPassword } from "./components/ForgotPassword";
import Expenses from "./pages/Expenses";

function App() {



  
  return (
    <Fragment>
      <MainNavigation   />
       <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/expenses" element={<Expenses/>} />

        <Route path="/login" element={<SignUp />} />
        <Route path="/update" element={<UpdateProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />


        
      </Routes> 
    </Fragment>
    
  );
}

export default App;
