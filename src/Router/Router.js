import { createBrowserRouter } from "react-router-dom";
import AddBlog from "../Admin/AddBlog/AddBlog";
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";
import AllBlogs from "../Admin/AllBlogs/AllBlogs";
import AboutUs from "../pages/AboutUs/AboutUs";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import Privacy from "../pages/Privacy/Privacy";
import TermCondition from "../pages/TermCondition/TermCondition";
import PrivateRoute from "../privateRoute/privateRoute";
import Layout from "./../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/tricksignup",
    element: (
      <PrivateRoute>
        <AdminDashboard></AdminDashboard>
      </PrivateRoute>
    ),
  },
  {
    path: "/addblog",
    element: (
      <PrivateRoute>
        <AddBlog></AddBlog>
      </PrivateRoute>
    ),
  },
  {
    path: "/allBlogs",
    element: (
      <PrivateRoute>
        <AllBlogs></AllBlogs>
      </PrivateRoute>
    ),
    loader: () => fetch("https://trick-load-server-nasim0994.vercel.app/blogs"),
  },
  {
    path: "/admin/addblog",
  },

  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/termCondition",
        element: <TermCondition></TermCondition>,
      },
    ],
  },
  {
    path: "/postDetails/:id",
    element: <BlogDetails></BlogDetails>,
    loader: ({ params }) =>
      fetch(
        `https://trick-load-server-nasim0994.vercel.app/blogs/${params.id}`
      ),
  },
]);
