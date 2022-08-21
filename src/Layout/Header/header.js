import React from "react";
import { Link } from "react-router-dom";
import File from "../../Assets/Icons/File";

const Header = () => {
  return (
    <div className=" flex flex-col md:flex-row   justify-start mt-8 px-4">
      <div className="w-[20rem]"></div>
      <div className="flex flex-col gap-4  md:w-[45rem]">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-center w-full justify-between">
          <h1 className=" font-semibold text-[1.46rem]">Opportunities</h1>
          <button className=" p-[0.6rem] bg-yellow-400 hover:bg-[#F5D780] rounded-full font-medium flex gap-2 px-[1rem]">
            <span>
              <File />
            </span>{" "}
            Create Proposel
          </button>
        </div>
        <nav>
          <div className=" absolute flex gap-3 font-semibold border-[3px] leading-[4rem]  border-transparent rounded-sm border-solid   !border-b-SecondaryWhite w-[45rem]  ">
            <Link
              to="/"
              className=" relative top-[.18rem]  after:block after:w-[3.7rem] after:h-[2.5px] after:bg-yellow-300 "
            >
              Discover
            </Link>
            <Link
              to="/Applied"
              className="cool- relative top-[.18rem] after:block after:w-0 after:h-[2.5px] after:bg-yellow-300 after:transition-width  hover:after:w-[3.7rem] hover:after:duration-300  "
            >
              Applied
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
