import React from "react";
import MainMenu from "../../../components/MainMenu/MainMenu";
import SecondMenu from "../../../components/SecondMenu/SecondMenu";

const LeftSidebar = () => {
  return (
    <aside
      className="w-1/4 hidden lg:block sticky top-20 self-start"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto  px-3 bg-gray-50 rounded dark:bg-gray-800">
        {/* <h2 className="pl-2.5 mb-3">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Menu
          </span>
        </h2> */}
        <ul className="space-y-2 mb-8">
          <MainMenu></MainMenu>
        </ul>

        <hr />
        <SecondMenu></SecondMenu>
      </div>
    </aside>
  );
};

export default LeftSidebar;
