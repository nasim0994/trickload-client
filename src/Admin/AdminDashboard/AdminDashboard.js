import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { ImBlog } from "react-icons/im";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://trick-load-server-nasim0994.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="md:flex gap-8 py-6">
        <div className="md:w-1/4 md:h-96">
          <AdminSidebar></AdminSidebar>
        </div>

        <section className="w-3/4 bg-gray-50 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-10 bg-yellow-400 rounded-lg flex items-center justify-between text-xl font-semibold">
              <p>Total Blog</p>
              <p className="flex items-center gap-1">
                <ImBlog /> {blogs.length}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
