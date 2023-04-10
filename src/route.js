import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Outlet,
  Link,
} from "react-router-dom";
import BlogsPage from "./pages/Blogs";
import ContactsPage from "./pages/ContactPage";
import ProfilePage from "./pages/Profile";
import Layout from "./pages/Layout";
import { useCookies } from "react-cookie";

function UserProfile() {
  // Get the userId param from the URL.
  let { productId } = useParams();
  const [cookies, setCookie] = useCookies(["name"]);
  // ...

  console.log(productId);

  function onChange(event) {
    setCookie("name", event.target.value, { path: "/" });
  }

  return (
    <>
      <div>
        <input name={cookies.name} onChange={onChange} />
        {cookies.name && <h1>Hello {cookies.name}!</h1>}
      </div>
    </>
  );
}

function CategoryPage() {
  return <>This is category page</>;
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserProfile />}>
          <Route path="/user" element={<Outlet />}>
            <Route
              path=":productId"
              element={<h3>This is user profile</h3>}
            ></Route>
          </Route>
        </Route>
        <Route path="category" element={<CategoryPage />}></Route>
        <Route path="*" element={<>404 not found</>}></Route>
        {/* <Route path="users">
          <Route path=":id" element={<UserProfile />}>
            <Route path=":user" element={<h4>Hellow user</h4>} />
          </Route>
          <Route path="me" element={<>Hello</>} />
          <Route path="hello" element={<>Hello</>} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
