import React from "react";
import Cards from "../../Components/Cards/cards";
import Cardbar from "../../Components/CardBar/cardbar";
import "./main.css";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header/secondaryHeader";

const Main = () => {
  return (
    <>
      <Header />
      <div className=" mt-8 flex flex-col justify-start px-4 md:flex-row">
        <div className="w-[20rem]"></div>
        <div className="flex flex-col gap-[5rem] ">
          <div></div>
          <div className="flex flex-col gap-2">
            <Cardbar />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
