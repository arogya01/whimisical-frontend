import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider(props) {
//   const initialState = {
//     full_name: "",
//     email: "",
//     token: "",
//   };
  
  const [userAuth, setUserAuth] = useState({});
   
  // const retrieveUser = window.localStorage.getItem("userInfo");
  // const result = retrieveUser.json();

  // setUserAuth(result);
  return (
    <AuthContext.Provider value={[ userAuth, setUserAuth ]}>
      {props.children}
    </AuthContext.Provider>
  );
}
