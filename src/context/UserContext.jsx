import { useState, useContext, createContext } from "react";
import { stallData } from "../data/data";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  //For now store all stall data in context
  //That way it can be updated and won't be reset unless page is refreshed
  const [stalls, setStalls] = useState(stallData);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isAuth,
        setIsAuth,
        stalls,
        setStalls,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
export default UserProvider;
