import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CaptainData = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const captainUpdate = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    setCaptain,
    loading,
    setLoading,
    error,
    setError,
    captainUpdate,
  };
  return <CaptainData.Provider value={value}>{children}</CaptainData.Provider>;
};
CaptainContext.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a valid React node and required
};

export default CaptainContext;
