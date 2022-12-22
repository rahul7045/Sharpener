import React from "react";
import './SignUp.css'

 const SignUp = () => {
  return(
    <div className="signUpbackground">
      <div>
      <form className="form-main">
        <div>
          <label>E-mail</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input />
        </div>
        <div>
          <label>Confirm Password</label>
          <input />
        </div>
        <button>Submit</button>
      </form>
      </div>
    </div>
  );
};

export default SignUp