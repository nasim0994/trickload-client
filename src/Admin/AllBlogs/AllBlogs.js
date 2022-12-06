import React, { useState } from "react";
import Header from "../../components/Header/Header";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const AllBlogs = () => {
  const LoadedBlogs = useLoaderData();
  const [blogs, setBlogs] = useState(LoadedBlogs);

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="md:flex gap-8 py-6">
        <div className="md:w-1/4">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="md:w-3/4 bg-gray-50 p-5 mt-2">
          <div>
            {blogs.map((blog) => (
              <Blog key={blog._id} blog={blog} setBlogs={setBlogs}></Blog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
