import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Blog = ({ blog, setBlogs }) => {
  // Delete Blog
  const handelBlogDelete = (blog) => {
    const confirm = window.confirm("Are you sure delete?");
    if (confirm) {
      fetch(
        `https://trick-load-server-nasim0994.vercel.app/blogs/${blog._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`${blog.title} Delete successuly`);
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        <tbody>
          <tr className="flex">
            <td className="w-3/5">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={blog.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{blog.title}</div>
                  <div className="text-sm opacity-50">{blog.author}</div>
                </div>
              </div>
            </td>

            <th className="w-1/5">
              <button className="btn btn-ghost btn-xs text-[16px] bg-gray-100 font-seibold">
                <AiFillEdit /> Edite
              </button>
            </th>

            <th className="w-1/5">
              <button
                onClick={() => handelBlogDelete(blog)}
                className="text-red-500 text-3xl"
              >
                <AiFillDelete />
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Blog;
