import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainData } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { captain, setCaptain } = useContext(CaptainData);

  useEffect(() => {
    if (!token) {
      Navigate("/captain-login");
    }

    axios
      .get(`${import.meta.env.VITE_API_URL}/captain/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        Navigate("/captain-login");
      });
  }, [token, Navigate, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
CaptainProtectWrapper.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a valid React node and required
};

export default CaptainProtectWrapper;
