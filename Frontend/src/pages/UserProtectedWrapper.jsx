import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();

  if (!token) {
    Navigate("/login");
  }

  return <>{children}</>;
};
UserProtectedWrapper.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a valid React node and required
};

export default UserProtectedWrapper;
