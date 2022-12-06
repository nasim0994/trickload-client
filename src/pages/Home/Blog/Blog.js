import React from "react";
// import { FaUserCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { _id, title, description, image, view } = blog;

  const hanledView = () => {
    const updateView = view + 1;
    const newView = { updateView };

    fetch(`https://trick-load-server-nasim0994.vercel.app/blogs/${blog._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newView),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };

  return (
    <div className="mb-3 md:mb-6 border rounded-md p-1 md:p-4 bg-gray-50">
      <div className="flex gap-1 md:gap-4 lg:gap-10 flex-row-reverse items-center">
        <div className="w-[30%] overflow-hidden mb-1 md:mb-0">
          <img
            src={image}
            alt=""
            className="w-full h-20 md:h-[140px] rounded-xl"
          />
        </div>

        <div className="w-[70%]">
          {/* Title */}
          <div className="flex items-center gap-3 text-base md:text-[22px] font-semibold">
            <Link to={`/postDetails/${_id}`} onClick={() => hanledView(blog)}>
              <h2>{title}</h2>
            </Link>
          </div>

          <div className="my-2 text-slate-600 text-justify">
            <p className="text-[15px] text-[#6c6868] hidden md:block">
              {description?.slice(0, 140) + "..."}{" "}
              <Link
                to={`/postDetails/${_id}`}
                className="text-blue-600 font-semibold"
                onClick={() => hanledView(blog)}
              >
                read more
              </Link>
            </p>
          </div>

          <p className="flex items-center gap-1 text-[#6c6868]">
            <FaEye />
            {view}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
