import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const AddBlog = () => {
  const { register, handleSubmit } = useForm();
  const IamgeBbApi = process.env.REACT_APP_imageBB_api;

  const handelAddBlog = (data, e) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const imageBBurl = `https://api.imgbb.com/1/upload?key=${IamgeBbApi}`;
    fetch(imageBBurl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const blog = {
            title: data.title,
            image: imageData.data.url,
            description: data.description,
            view: parseInt(0),
            author: data.author,
          };

          // Send Server all data
          fetch("https://trick-load-server-nasim0994.vercel.app/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
          })
            .then((res) => res.json())
            .then((data) => {
              alert("Blog Add Successful");
              e.target.reset();
            })
            .catch((error) => console.error(error));
        }
      });
  };

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="md:flex gap-8 py-6">
        <div className="md:w-1/4">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="md:w-3/4 bg-gray-50 p-5 mt-2">
          <div className="hero">
            <div className="w-full md:px-20">
              <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                <form
                  onSubmit={handleSubmit(handelAddBlog)}
                  className="card-body"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      {...register("title")}
                      placeholder="Blog Title"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="form-control w-1/2">
                      <label className="label">
                        <span className="label-text">Image Link</span>
                      </label>
                      <input
                        type="file"
                        name="image"
                        {...register("image")}
                        placeholder="Blog Image"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control w-1/2">
                      <label className="label">
                        <span className="label-text">Author Name</span>
                      </label>
                      <input
                        type="text"
                        name="author"
                        {...register("author")}
                        placeholder="Type Your Name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered"
                      name="description"
                      {...register("description")}
                      placeholder="Blog Description"
                      required
                    ></textarea>
                  </div>

                  <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
