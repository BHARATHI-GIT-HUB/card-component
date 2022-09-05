import React from "react";
import { Link } from "react-router-dom";
import File from "../../Assets/Icons/File";
import Filter from "../../Assets/Icons/Filter";
const Header = () => {
  return (
    <div className=" mt-8 flex min-w-full grow  flex-col  justify-start  ">
      <div className=" flex flex-col gap-4   md:px-0">
        <div className=" flex flex-col items-center justify-between gap-2  sm:flex-row sm:gap-0">
          <h1 className=" text-[1.46rem] font-semibold">Opportunities</h1>
          <button className=" flex gap-2 rounded-full bg-yellow-400 p-[0.6rem] px-[1rem] font-medium hover:bg-[#F5D780]">
            <span>
              <File />
            </span>{" "}
            Create Proposel
          </button>
        </div>
        <nav>
          <div className=" relative flex w-full gap-3 rounded-sm border-[3px] border-solid border-transparent  !border-b-SecondaryWhite pb-[4rem] font-semibold leading-[4rem]   ">
            <Link
              to="/"
              className="absolute   after:block after:h-[2.5px] after:w-[3.7rem] after:bg-yellow-300 "
            >
              Discover
            </Link>
            <Link
              to="/Applied"
              className="absolute left-[6rem] after:block after:h-[2.5px] after:w-0 after:bg-yellow-300 after:transition-width  hover:after:w-[3.7rem] hover:after:duration-300  "
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
