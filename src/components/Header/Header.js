import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainMenu from "../MainMenu/MainMenu";
import logo from "../../logo.jpeg";
import SecondMenu from "../SecondMenu/SecondMenu";
import { AuthContext } from "../../contextapi/UserContext";

const Header = () => {
  const { setSearchText } = useContext(AuthContext);
  const handelSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value;
    setSearchText(searchText);
  };

  const handelSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="navbar bg-base-200 sticky top-0 z-50">
      <div className="navbar-start w-1/4">
        <Link
          to="/home"
          className="btn btn-ghost normal-case text-2xl gap-2 text-blue-600 font-bold pl-0"
        >
          <img
            src={logo}
            alt=""
            className="w-8 h-8 md:w-10 md:h-10 rounded-full hidden lg:block"
          />
          Trickload
        </Link>
      </div>

      {/* Search  */}
      <div className="navbar-end w-3/4">
        <div className="lg:block w-full">
          <form onSubmit={handelSearch} className="flex justify-end">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-[70%] lg:w-[40%]">
              <div className="hidden lg:flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                onChange={handelSearchChange}
                type="text"
                name="searchText"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="সার্চ করুন"
                required=""
              />
            </div>
            <button
              type="submit"
              className="flex items-center p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5 lg:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
              <p className="hidden lg:block">Search</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
