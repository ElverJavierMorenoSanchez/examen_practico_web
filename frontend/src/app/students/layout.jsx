import MainContent from "@/components/MainContent";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const CoursesLayout = ({ children }) => {
  return (
    <div
      id="page-container"
      className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] text-gray-100 bg-gray-900"
    >
      <Navbar />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default CoursesLayout;
