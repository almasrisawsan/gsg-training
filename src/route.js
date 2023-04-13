import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Outlet,
  Link,
} from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Home page </h2>} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
