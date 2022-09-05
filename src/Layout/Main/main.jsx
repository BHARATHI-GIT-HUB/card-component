import { React, useState } from "react";
import Cards from "../../Components/Cards/cards";
import Cardbar from "../../Components/CardBar/cardbar";
import "./main.css";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header/secondaryHeader";
import FilterIcn from "../../Assets/Icons/Filter";
import Filter from "../../Components/Filter/filter";
const Main = () => {
  const [filter, setFilter] = useState(false);
  const [filtermd, setFiltermd] = useState(false);
  const handleClick = () => {
    setFilter(!filter);
  };
  const handleClickFilter = () => {
    setFiltermd(!filtermd);
  };
  return (
    <div className=" container flex">
      <div className=" mt-[12rem] flex  items-start  justify-center md:mr-[2rem]  ">
        <div className=" sticky top-[100px]   hidden  filterStarting:hidden filterEnding:block ">
          <Filter />
        </div>
        <span
          className="hidden filterStarting:flex filterEnding:hidden  "
          onClick={handleClick}
        >
          <div
            onClick={handleClickFilter}
            className="  rounded-full bg-SecondaryWhite px-[7px] py-[7px]"
          >
            <FilterIcn />
          </div>
        </span>
      </div>
      <div className=" flex flex-col gap-4 px-[20px] md:px-0 ">
        <Header />

        <div className=" flex flex-col gap-3   ">
          <div
            onClick={handleClickFilter}
            className="
          flex items-center self-end rounded-full bg-SecondaryWhite px-[8px] py-[4px] filterStarting:hidden"
          >
            <FilterIcn />
            <p className="mr-[3px] hidden sm:block">Filter</p>
          </div>
          <div
            className={` absolute top-[4.35rem] hidden h-screen  w-[20rem] overflow-y-scroll rounded-xl  bg-white shadow-lg ring-1 ring-black ring-opacity-5 duration-700 ease-in-out sm:block  ${
              filtermd ? "left-[0]" : "left-[-100%] overflow-y-scroll  "
            }`}
          >
            <Filter />
          </div>
          <Cardbar />
          <Cards />
        </div>
      </div>
      <div className=" mt-[12rem] hidden w-[35rem]  items-start  justify-center pl-[2rem] tablet:block  ">
        <div className=" h-[20rem]  rounded-xl bg-white  "></div>
      </div>
    </div>
  );
};

export default Main;
