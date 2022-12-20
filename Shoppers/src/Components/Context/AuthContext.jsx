import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

export const AuthContext = createContext();

const initialState = {
  isAuth: false,
  token: null,
};

function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState(initialState);

  const loginUser = (token) => {
    setAuthState({
      ...authState,
      isAuth: true,
      token: token,
    });
  };

  const logoutUser = () => {
    setAuthState(initialState);
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
