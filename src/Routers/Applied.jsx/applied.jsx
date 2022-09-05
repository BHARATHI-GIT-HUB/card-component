import React from "react";
import Cardbar from "../../Components/CardBar/cardbar";
import jenny from "../../../src/Assets/Images/jenny.webp";
import Header from "../../Layout/Header/secondaryHeader";
import Filter from "../../Assets/Icons/Filter";
export default function applied() {
  return (
    <div className="flex ">
      <div className="hidden h-[17rem] w-[17rem] items-end justify-center px-[4rem] md:flex"></div>
      <div className=" flex flex-col  px-[20px] md:px-0 ">
        <Header />
        <di className="mt-[1rem]  flex items-center justify-start gap-2 px-2 md:px-0 ">
          <div className=" flex flex-col items-center justify-center gap-2">
            <Cardbar />
            <div className="flex  flex-col items-center justify-center gap-6 rounded-2xl bg-SecondaryWhite  px-[30px] py-[40px] capitalize md:w-[45rem] ">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={jenny}
                  alt=""
                  className=" w-full max-w-[330px] object-cover"
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
        </di>
      </div>
      <div className=" mt-[12rem] hidden  items-start  justify-center pl-[2rem] tablet:block  ">
        <div className=" h-[20rem]  w-[25rem] rounded-xl bg-white  "></div>
      </div>{" "}
    </div>
    //
  );
}
