import React from "react";
import Cards from "../../Components/Cards/cards";
import Cardbar from "../../Components/CardBar/cardbar";
import "./main.css";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header/secondaryHeader";
import Filter from "../../Assets/Icons/Filter";

const Main = () => {
  return (
    <div className=" flex ">
      <div className="hidden h-[17rem] w-[15rem] items-end justify-center px-[4rem] md:flex">
        <Filter />
      </div>
      <div className=" mt-8 flex flex-col items-start justify-center gap-6 px-4 ">
        <Header />
        <div className="flex flex-col gap-[5rem] ">
          <div></div>
          <div className="flex flex-col gap-2">
            <Cardbar />
            <Cards />
          </div>
        </div>
      </div>
      {/* <div className="md: hidden h-[36rem] w-[25rem] items-end justify-center">
        <span className=" mx-[2rem] h-[20rem] w-full rounded-xl  bg-SecondaryWhite ">
          h
        </span>
      </div> */}
    </div>
  );
};

export default Main;
