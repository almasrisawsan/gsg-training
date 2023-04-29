// import { useCookies } from "react-cookie";
// import axios from "../../axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function User() {
//   const [cookies] = useCookies(["token"]);
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   const getUserData = async () => {
//     try {
//       const results = await axios.get("/auth/profile");
//       const {
//         data: { name, role },
//       } = results;
//       setUser({
//         name: name,
//         role: role,
//       });
//     } catch (error) {}
//   };

//   const userLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const { name, role } = user;
//   return (
//     <div className={styles.mainWrapper}>
//       <div className={styles.mainContainer}>
//         <button className={styles.btn1} onClick={getUserData}>
//           Get user data
//         </button>
//         <h2 className={styles.name}>Name: {name}</h2>
//         <h2 className={styles.role}>Role: {role}</h2>
//         <h2>Hello</h2>
//         <button onClick={userLogout}>Logout</button>
//       </div>
//       <button className={styles.btn2} onClick={getUserData}>
//         Get user data
//       </button>
//     </div>
//   );
// }

// export default User;
