import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import RightSidebar from "../Home/RightSidebar/RightSidebar";
import { FaEye } from "react-icons/fa";

const BlogDetails = () => {
  const { description, title, image, view } = useLoaderData();
  return (
    <div className="container mx-auto">
      {/* Header */}
      <Header></Header>

      <div className="md:flex gap-5 py-4">
        <div className="md:w-3/4 pt-4">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10">
              <img
                src={image}
                alt="Shoes"
                className="rounded-xl w-full h-[200px] lg:h-[400px]"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-2 items-center justify-between">
                <h2 className="card-title text-2xl">{title}</h2>
                <span className="flex gap-2 items-center">
                  <p>
                    <FaEye />
                  </p>
                  <p className="p-0">{view}</p>
                </span>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default BlogDetails;
