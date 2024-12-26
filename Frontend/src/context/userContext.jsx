// import React from 'react'
import PropTypes from "prop-types";
import { UserDataContext } from "./UserDataContext";

// export const UserDataContext = createContext();

 const UserContext = ({ children }) => {
  const name = "vaibhav";
  return (
    <UserDataContext.Provider value={name}>{children}</UserDataContext.Provider>
  );
};
UserContext.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a valid React node and required
};


export default UserContext