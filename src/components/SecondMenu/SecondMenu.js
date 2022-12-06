import React from "react";
import { GrAndroid } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { MdPrivacyTip } from "react-icons/md";
import { Link } from "react-router-dom";

const SecondMenu = () => {
  return (
    <ul>
      <li>
        <Link
          to="/aboutUs"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FcAbout />
          <span className="ml-3">About us</span>
        </Link>
      </li>
      <li>
        <Link
          to="/privacy"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <MdPrivacyTip />
          <span className="ml-3">Privacy</span>
        </Link>
      </li>
      <li>
        <Link
          to="/termCondition"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <GrAndroid />
          <span className="ml-3">Term and Condition</span>
        </Link>
      </li>
    </ul>
  );
};

export default SecondMenu;
