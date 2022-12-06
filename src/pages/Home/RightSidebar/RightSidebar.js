import React, { useEffect, useState } from "react";

import TopBlogCard from "./TopBlogCard";

const RightSidebar = () => {
  const [topBlogs, setTopBlogs] = useState([]);
  useEffect(() => {
    fetch("https://trick-load-server-nasim0994.vercel.app/topBlogs")
      .then((res) => res.json())
      .then((data) => setTopBlogs(data));
  }, []);

  return (
    <div className="w-1/4 hidden md:block bg-gray-50 sticky top-20 self-start">
      <h2 className="text-xl mb-4 font-semibold">Top Content</h2>
      {topBlogs.map((blog) => (
        <TopBlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default RightSidebar;
