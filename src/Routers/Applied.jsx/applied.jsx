import React from "react";
import Cardbar from "../../Components/CardBar/cardbar";
import jenny from "../../../src/Assets/Images/jenny.webp";
import Header from "../../Layout/Header/secondaryHeader";
export default function applied() {
  return (
    <div className=" flex ">
      <div className="container hidden items-end justify-center px-[4rem] md:flex"></div>
      <div className="flex flex-col  px-[20px] md:px-0 ">
        <Header />
        <div className="mt-[1rem]  flex items-center justify-start gap-2 px-2 md:px-0 ">
          <div className=" flex w-full flex-col items-center justify-center gap-2">
            <Cardbar />
            <div className="flex  flex-col items-center justify-center gap-6 rounded-2xl bg-SecondaryWhite  px-[30px] py-[40px] capitalize md:w-[45rem] ">
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src={jenny}
                  alt=""
                  className=" w-full max-w-[330px] object-cover"
                />
                <p className="text-center text-[19px] font-medium leading-[1.7] sm:leading-[2]  ">
                  You haven’t applied to any opportunity
                </p>
                <p className=" text-[1rem] font-normal leading-[1.5] ">
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
      <div className=" mt-[12rem] hidden  items-start  justify-center pl-[2rem] tablet:block  ">
        <div className=" h-[20rem]  w-[25rem] rounded-xl bg-white  "></div>
      </div>
    </div>
  );
}
