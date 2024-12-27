import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Userlogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          localStorage.removeItem("token");
          console.log('log out'); 
          navigate("/login");
        }
      } catch (error) {
        console.error("Logout failed:", error);
        // Handle error (optional)
      }
    };

    logoutUser();
  }, [navigate]);

  return <div>Log out...</div>;
};

export default Userlogout;
