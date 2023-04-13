import { useCookies } from "react-cookie";
import axios from "../../axios";
import { useState } from "react";

function User() {
  const [cookies] = useCookies(["token"]);
  const [user, setUser] = useState({});
  const getUserData = async () => {
    try {
      const results = await axios.get("/auth/profile");
      const {
        data: { name, role },
      } = results;
      setUser({
        name: name,
        role: role,
      });
    } catch (error) {}
  };

  const { name, role } = user;
  return (
    <div>
      <button onClick={getUserData}>Get user data</button>
      <h2>Name: {name}</h2>
      <h2>Role: {role}</h2>
    </div>
  );
}

export default User;
