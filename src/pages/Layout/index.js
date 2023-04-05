import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>This is the page header</header>
      <Outlet />
      <footer>This is the page footer</footer>
    </div>
  );
}

export default Layout;
