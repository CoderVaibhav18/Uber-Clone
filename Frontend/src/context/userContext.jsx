// import React from 'react'
import PropTypes from "prop-types";
// import { UserDataContext } from "./UserDataContext";
import { createContext, useState } from "react";

export const UserData = createContext();

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
    <UserData.Provider value={{ user, setUser }}>{children}</UserData.Provider>
  );
};
UserContext.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a valid React node and required
};

export default UserContext;
