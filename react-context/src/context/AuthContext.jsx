import React, { createContext } from "react";
// 1. Create a context
export const AuthContext = createContext(null);

// 2. Create a provider (A simple react component)

const AuthContextProvider = ({ children }) => {
  let userObject = {
    name: "Anik",
    email: "xyz@gmail.com",
    avater:
      "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1768144874~exp=1768148474~hmac=bbf22491a06b3679af14498955e84f37ff16163d4203fcca2696bad2cb3a492b&w=1480",
  };

  const renameUser = (name) => {
    userObject.name = name;
    console.log(userObject);
  };

  return (
    <AuthContext.Provider value={{ userObject, renameUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

/**
 * <Component>
 *
 *  <Component></Component>
 * </Component>
 */
