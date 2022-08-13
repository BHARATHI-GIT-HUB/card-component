import React from "react";
import File from "../../Assets/Icons/File";
import Card from "../../Components/Cards/index";

const Main = () => {
  return (
    <div className=" flex flex-col md:flex-row   justify-start mt-8 px-4">
      <div className="w-[20rem]"></div>
      <div className=" ">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-2 sm;gap-0 items-center w-full justify-between">
            <h1 className=" font-semibold text-[1.3rem]">Opportunities</h1>
            <button className=" p-[0.6rem] bg-yellow-400 hover:bg-[#F5D780] rounded-full font-medium flex gap-2 px-[1rem]">
              <span>
                <File />
              </span>{" "}
              Create Proposel
            </button>
          </div>
          <nav>
            <ul className="flex gap-3 font-semibold border-[3px] border-transparent  !border-b-SecondaryWhite">
              <li className=" pb-2 border-[3px] border-transparent border-b-yellow-300">
                Discover
              </li>
              <li className=" pb-2 border-[3px] border-transparent border-b-primaryWhite hover:border-b-yellow-300 ">
                Applied
              </li>
            </ul>
          </nav>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Main;
