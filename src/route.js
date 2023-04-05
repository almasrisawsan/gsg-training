import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import BlogsPage from "./pages/Blogs";
import ContactsPage from "./pages/ContactPage";
import ProfilePage from "./pages/Profile";
import Layout from "./pages/Layout";

function UserProfile() {
  // Get the userId param from the URL.
  //let { userId } = useParams();
  // ...

  let { id } = useParams();
  console.log(id);
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users">
          <Route path=":id" element={<UserProfile />}>
            <Route path=":user" element={<h4>Hellow user</h4>} />
          </Route>
          <Route path="me" element={<>Hello</>} />
          <Route path="hello" element={<>Hello</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
