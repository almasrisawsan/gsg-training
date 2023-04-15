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
import Guard, { LoginGuard } from "./pages/Guard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Home page </h2>} />
        <Route
          path="/login"
          element={
            <LoginGuard>
              <Login />
            </LoginGuard>
          }
        />
        <Route
          path="/user"
          element={
            <Guard>
              <User />
            </Guard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
