import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserData } from "../context/userContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserData);

  const navigate = useNavigate();

  const handleUserData = async (e) => {
    e.preventDefault();
    const userData = { email: email, password: password };
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/users/login`,
      userData
    );
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token)
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <form onSubmit={(e) => handleUserData(e)}>
          <h3 className="text-lg font-medium mb-2">What&apos;s your email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eee] outline-none w-full px-4 py-2 mb-6 border rounded text-lg placeholder:text-base"
            placeholder="email@example.com"
            required
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none bg-[#eee] w-full px-4 py-2 mb-6 border rounded text-lg placeholder:text-base"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="bg-[#111] text-white font-semibold w-full px-4 py-2 mb-3 rounded text-lg"
          >
            Login
          </button>
          <p className="text-center">
            New here?{" "}
            <Link to="/signup" className="text-blue-600">
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold w-full px-4 py-2 mb-7 rounded text-lg"
        >
          Login in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
