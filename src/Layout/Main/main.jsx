import React from "react";
import Cards from "../../Components/Cards/cards";
import Cardbar from "../../Components/CardBar/cardbar";
import "./main.css";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header/secondaryHeader";
import Filter from "../../Assets/Icons/Filter";

const Main = () => {
  return (
    <div className="flex ">
      <div className="hidden h-[17rem] w-[20rem] items-end justify-center px-[4rem] md:flex">
        <Filter />
      </div>
      <div className=" flex flex-col px-[20px] md:px-0 ">
        <Header />
        <div className=" mt-[5rem] flex flex-col gap-3">
          <Cardbar />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Main;
