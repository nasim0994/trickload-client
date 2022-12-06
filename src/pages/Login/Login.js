import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextapi/UserContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  //Handel login
  const handelform = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        console.log(res.user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setMessage(error.message);
      });
  };

  return (
    <div className="hero mt-8">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Admin Login!</h1>
        </div>

        <div className="card lg:w-96 shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handelform}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <p className="">{message}</p>
              </div>
              <div className="form-control mt-4">
                <button className="btn">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
