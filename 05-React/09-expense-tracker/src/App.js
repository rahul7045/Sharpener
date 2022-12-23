import { Fragment } from "react";
import { Route , Routes } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import SignUp  from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <MainNavigation />
       <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<SignUp/>} />

      </Routes> 
    </Fragment>
    
  );
}

export default App;
