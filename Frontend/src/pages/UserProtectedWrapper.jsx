import PropTypes from "prop-types";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
  }, [token, Navigate]);

  return <>{children}</>;
};
UserProtectedWrapper.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a valid React node and required
};

export default UserProtectedWrapper;
