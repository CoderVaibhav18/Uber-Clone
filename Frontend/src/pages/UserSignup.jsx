import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserData } from "../context/userContext";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setUser } = useContext(UserData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/users/register`,
      newUser
    );
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      navigate("/home");
    }

    setFirstName("");
    setLastName("");
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-lg font-medium mb-2">What&apos;s your name</h3>
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              className="bg-[#eee] outline-none w-1/2 px-4 py-2  border rounded text-lg placeholder:text-base"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              className="bg-[#eee] outline-none w-1/2 px-4 py-2  border rounded text-lg placeholder:text-base"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What&apos;s your email</h3>
          <input
            type="email"
            className="bg-[#eee] mb-6 outline-none w-full px-4 py-2 border rounded text-lg placeholder:text-base"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            className="outline-none bg-[#eee] w-full px-4 py-2 mb-6 border rounded text-lg placeholder:text-base"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#111] text-white font-semibold w-full px-4 py-2 mb-3 rounded text-lg"
          >
            Sign up
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
