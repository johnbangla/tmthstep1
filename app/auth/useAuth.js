import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const change = authToken.replace(/['"]+/g, "")
    const user = jwtDecode( change);
    setUser(user);
    authStorage.storeToken(authToken);
   // alert( 'Allah' + user)
   alert( "Success")
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
