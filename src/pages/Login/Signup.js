import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextapi/UserContext";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  //   Handel Signup user
  const handelform = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signup(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/login");
        form.reset();
      })
      .catch((error) => {
        setMessage(error.message);
        console.error(error);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Signup now!</h1>
        </div>

        <div className="card w-96 shadow-2xl bg-base-100">
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
              </div>
              <small>
                Already have no account? {""}
                <Link to="/login" className="underline">
                  LogIn
                </Link>
              </small>
              <br />
              <small className="text-red-500">{message}</small>

              <div className="form-control mt-4">
                <button className="btn">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
