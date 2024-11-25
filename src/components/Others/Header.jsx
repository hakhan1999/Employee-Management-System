import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-[5rem] py-[1.5rem] bg-[#1b275a] w-full">
      <h1 className="text-2xl font-medium">
        Hello, <span className="text-3xl font-semibold">Hassan 👋</span>
      </h1>
      <button className="text-black bg-[#2ef2ff] border-2 border-transparent rounded-[0.2rem] py-1.5 px-8 transition-all duration-400 ease-out font-medium text-xl hover:border-[#c8ea80] hover:bg-transparent hover:text-white">
        Logout
      </button>
    </div>
  );
};

export default Header;
