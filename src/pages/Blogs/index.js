import React from "react";
import { Outlet } from "react-router-dom";
import ProductList from "../../components/ProductList";
const BlogsPage = () => {
  return (
    <div>
      Welcome in BlogsPage
      <ProductList />
      <hr />
      <Outlet />
    </div>
  );
};

export default BlogsPage;
