import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <>
      <li>
        <Link
          to="/home"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-3"
        >
          <span className="ml-3 flex items-center gap-2">
            <AiFillHome />
            Home
          </span>
        </Link>
      </li>
    </>
  );
};

export default MainMenu;
