import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import File from "../../Assets/Icons/File";

const Header = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className=" mt-8 flex min-w-full grow  flex-col  justify-start  ">
      <div className=" flex flex-col md:px-0">
        <div className=" flex flex-col items-center justify-between gap-2  sm:flex-row sm:gap-0">
          <h1 className=" text-[1.4575rem] font-semibold leading-[1.4] tracking-[-0.25px]">
            Opportunities
          </h1>
          <button className=" flex gap-2 rounded-full  bg-[#F0C94D] p-[0.6rem] px-[1rem] font-medium transition-all duration-200 hover:bg-[#F5D780]">
            <span>
              <File />
            </span>{" "}
            <p className="text-[1rem] font-semibold leading-[1.5]">
              Create Proposel
            </p>
          </button>
        </div>
        <nav>
          <div className="relative flex w-full rounded-sm border-[3px] border-solid  border-transparent !border-b-SecondaryWhite font-semibold leading-[4rem]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "Descover DescoverActive"
                  : " Descover text-textColor_1 "
              }
              // absolute left-0 after:block after:h-[2.5px] after:w-[3.7rem] after:bg-yellow-300 "
            >
              Discover
            </NavLink>
            <NavLink
              to="/Applied"
              className={({ isActive }) =>
                isActive
                  ? "Link Active text-textDark "
                  : "Link   text-textColor_1  "
              }
            >
              Applied
            </NavLink>
            <div className=" h-[4rem]"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
