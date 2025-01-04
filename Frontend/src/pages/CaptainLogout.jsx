import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    
    if (!token) {
      // localStorage.removeItem('token')
      navigate("/captain-login");
      return;
    }
    axios
      .get(`${import.meta.env.VITE_API_URL}/captain/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      });
  }, [navigate]);

  return <div>CaptainLogout</div>;
};

export default CaptainLogout;
