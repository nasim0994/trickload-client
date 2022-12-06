import React, { useContext } from "react";
import { AuthContext } from "../../../contextapi/UserContext";
import Blogs from "../Blogs/Blogs";
import RightSidebar from "../RightSidebar/RightSidebar";
import LeftSidebar from "./../LeftSidebar/LeftSidebar";

const Home = () => {
  const { searchText } = useContext(AuthContext);

  return (
    <div className="flex  py-6">
      <LeftSidebar></LeftSidebar>
      <Blogs searchText={searchText}></Blogs>
      <RightSidebar></RightSidebar>
    </div>
  );
};

export default Home;
