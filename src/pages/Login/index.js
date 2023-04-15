import { useState } from "react";
import axios from "../../axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const userData = {
      ...user,
      [name]: value,
    };
    setUser(userData);
  };

  const handleSubmit = async () => {
    try {
      const results = await axios.post("/auth/login", user);
      const {
        data: { access_token },
      } = results;

      localStorage.setItem("token", access_token);
      navigate("/user");
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 401) setError("User unauthorized");
    }
  };

  const { email, password } = user;
  return (
    <div>
      <label>Name</label>
      <input name="email" value={email} onChange={handleUserData} />
      <label>Password</label>
      <input name="password" value={password} onChange={handleUserData} />
      <button onClick={handleSubmit}>Login</button>
      <h2>{error}</h2>
    </div>
  );
};

export default Login;
