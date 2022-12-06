import React from "react";
import LeftSidebar from "../Home/LeftSidebar/LeftSidebar";

const AboutUs = () => {
  return (
    <div className="flex gap-8 py-6">
      <LeftSidebar></LeftSidebar>

      <div className="w-2/4 mx-auto text-lg">
        <span className="font-semibold">Trickload</span> is one of the best
        useful tips & tricks based website in Bangladesh. People can visit the
        and read topics without registration. Our target Our target is to make
        internet a learning place and we want to give chance to peoples to share
        their knowledge about technology by using our website.
        <span className="font-semibold">Trickload</span> believes that knowledge
        is only for sharing so if any one know something about technology and
        wants to share will be always welcome to{" "}
        <span className="font-semibold">trickload</span> family.. And if any one
        wants to enrich knowledge about technology also always welcome to our
        website.
      </div>
    </div>
  );
};

export default AboutUs;
