import PropTypes from "prop-types";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const CaptainProtectWrapper = ({children}) => {
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      Navigate("/captain-login");
    }
  }, [token, Navigate]);
  
  return (
    <>
      {children}
    </>
  )
}
CaptainProtectWrapper.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a valid React node and required
};

export default CaptainProtectWrapper
