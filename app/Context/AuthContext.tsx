import { createContext } from "react";
const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
});
export default AuthContext;
