import React from "react";
import Cardbar from "../../Components/CardBar/cardbar";
import jenny from "../../../src/Assets/Images/jenny.webp";
import Header from "../../Layout/Header/secondaryHeader";
export default function applied() {
  return (
    <div>
      <Header />
      <div className="mt-[6rem]  flex items-center justify-start gap-2 px-2 md:px-0 ">
        <div className="md:w-[20rem]"></div>
        <div className=" flex flex-col items-center justify-center gap-2">
          <Cardbar />
          <div className="flex  flex-col items-center justify-center gap-6 rounded-2xl bg-SecondaryWhite  px-[30px] py-[40px] capitalize md:w-[45rem] ">
            <div className="flex flex-col items-center justify-center">
              <img
                src={jenny}
                alt=""
                className=" w̃-full max-w-[330px] object-cover"
              />
              <p className="text-center text-[1.1rem] font-medium  ">
                You haven’t applied to any opportunity
              </p>
              <p className=" text-[1.2rem] font-light leading-[3rem] ">
                Once you apply to your first opportunity it will show up here!{" "}
              </p>
            </div>
            <div className="">
              <button className=" flex gap-2 rounded-full bg-yellow-400 p-[0.6rem] px-[1rem] font-medium hover:bg-[#F5D780]">
                Discovery opportunity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
