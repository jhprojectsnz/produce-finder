import { useState, useContext, createContext } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
export default UserProvider;
