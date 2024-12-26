// import React from 'react'
import PropTypes from "prop-types";
import { UserDataContext } from "./UserDataContext";
import { useState } from "react";

// export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });

  return (
    <UserDataContext.Provider value={{user,setUser}}>{children}</UserDataContext.Provider>
  );
};
UserContext.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a valid React node and required
};

export default UserContext;
