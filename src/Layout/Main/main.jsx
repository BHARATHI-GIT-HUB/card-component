import React from "react";
import Card from "../../Components/Cards/index";
import Cardbar from "../../Components/CardBar/cardbar";
import "./main.css";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header/header";

const Main = () => {
  return (
    <>
      <Header />
      <div className=" flex flex-col md:flex-row justify-start mt-8 px-4">
        <div className="w-[20rem]"></div>
        <div className="flex flex-col gap-[5rem] ">
          <div></div>
          <div className="flex flex-col gap-2">
            <Cardbar />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
