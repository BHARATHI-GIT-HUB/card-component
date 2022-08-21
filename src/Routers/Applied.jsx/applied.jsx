import React from "react";
import Cardbar from "../../Components/CardBar/cardbar";
import jenny from "../../../src/Assets/Images/jenny.webp";
import Header from "../../Layout/Header/header";
export default function applied() {
  return (
    <div>
      <Header />
      <div className="flex  justify-start items-center gap-2 mt-[6rem] ">
        <div className="w-[20rem]"></div>
        <div className=" flex flex-col justify-center items-center gap-2">
          <Cardbar />
          <div className="bg-SecondaryWhite  md:w-[45rem] flex flex-col justify-center items-center gap-6  px-[30px] py-[40px] rounded-2xl capitalize ">
            <div className="flex flex-col justify-center items-center">
              <img src={jenny} alt="" className=" max-w-[330px] object-cover" />
              <p className="text-[1.1rem] font-medium text-center  ">
                You haven’t applied to any opportunity
              </p>
              <p className=" text-[1.2rem] font-light leading-[3rem] ">
                Once you apply to your first opportunity it will show up here!{" "}
              </p>
            </div>
            <div className="">
              <button className=" p-[0.6rem] bg-yellow-400 hover:bg-[#F5D780] rounded-full font-medium flex gap-2 px-[1rem]">
                Discovery opportunity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
