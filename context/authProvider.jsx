import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  
  const [userAuth, setUserAuth] = useState({});
  return (
    <AuthContext.Provider value={[ userAuth, setUserAuth ]}>
      {props.children}
    </AuthContext.Provider>
  );
}
