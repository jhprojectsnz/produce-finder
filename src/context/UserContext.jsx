import { useState, useContext, createContext } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, isAuth, setIsAuth }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
export default UserProvider;
