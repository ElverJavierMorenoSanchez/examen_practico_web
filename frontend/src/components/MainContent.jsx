import React from "react";

const MainContent = ({ children }) => {
  return (
    <main id="page-content" className="flex flex-auto flex-col max-w-full">
      <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <div className="flex items-center justify-center rounded-xl text-gray-400 py-4">
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
