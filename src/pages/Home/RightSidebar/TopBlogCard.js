import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const TopBlogCard = ({ blog }) => {
  const hanledView = () => {
    const updateView = blog.view + 1;
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
    <Link
      to={`/postDetails/${blog._id}`}
      key={blog._id}
      onClick={() => hanledView(blog)}
    >
      <div className="flex gap-1 bg-base-200 hover:bg-base-300 rounded-md mb-5 h-[70px] overflow-hidden items-center">
        <figure className="w-1/3">
          <img
            src={blog?.image}
            alt="Movie"
            className="h-[60px] w-full rounded-md"
          />
        </figure>
        <div className="w-2/3 pr-1">
          <h2 className="card-title text-sm">{blog?.title?.slice(0, 30)}</h2>
          {/* <small>{blog?.description?.slice(0, 30) + `...`} </small> */}
          <small className="flex items-center gap-1">
            <p>
              <FaEye />
            </p>
            <p>{blog?.view}</p>
          </small>
        </div>
      </div>
    </Link>
  );
};

export default TopBlogCard;
