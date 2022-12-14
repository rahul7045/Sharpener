import React from "react";

const AuthContext= React.createContext({
    isLoggedIn : false,
    isLoggedOut : true
})

export default AuthContext