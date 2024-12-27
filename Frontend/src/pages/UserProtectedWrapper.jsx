import axios from "axios";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { UserData } from "../context/userContext";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();
  const { user, setUser } = useContext(UserData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }

    axios
      .get(`${import.meta.env.VITE_API_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        Navigate("/login");
      });
  }, [token, Navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
UserProtectedWrapper.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a valid React node and required
};

export default UserProtectedWrapper;
