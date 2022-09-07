import React from "react";
import Calander from "../../Assets/Icons/Calander";
import Clock from "../../Assets/Icons/Clock";
import loadCurrentItem from "../../reudx/card/cardAction";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Index = ({ itemData, loadCurrentItem }) => {
  return (
    <div className=" flex flex-col gap-4 ">
      <div className="flex  w-full flex-col gap-3 rounded-2xl  bg-SecondaryWhite p-[16px] capitalize md:px-[32px] md:pt-[32px] md:pb-[22px] ">
        <span className=" flex items-center gap-2 self-end rounded-full bg-[#EEEEEE] py-[.3rem]  px-[1rem] text-sm text-textColor_1">
          <span>
            <Calander />
          </span>
          Posted {itemData.days} days ago
        </span>
        <div className="flex items-center gap-3 ">
          <div className="flex gap-4">
            <img
              src={itemData.image}
              alt="Logo"
              className=" h-[48px] w-[48px] rounded-full object-cover md:h-[64px] md:w-[64px]"
            />
            <div className="mt-[13px]">
              <p className=" text-xs font-normal tracking-[0.15px]  text-textColor_1  sm:text-[1rem]">
                {itemData.heading}
              </p>
              <h1 className="  text-[1.185rem] font-semibold leading-10 tracking-[0.2px] sm:text-[1.4375rem]  ">
                {itemData.subHeading}
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-1 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div className="flex flex-col items-start justify-start gap-2 sm:flex-row">
            <p className=" flex items-center gap-2 whitespace-nowrap rounded-full bg-[#EEEEEE]  py-[6px] px-[10px]   text-xs  text-textToDark sm:text-sm">
              {itemData.roles_1}
            </p>
            <div>
              {itemData.roles_2.length > 0 ? (
                <p className="  flex items-center gap-2 truncate rounded-full  bg-[#EEEEEE]  py-[6px] px-[10px]  text-xs text-textToDark sm:text-sm ">
                  {itemData.roles_2}
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div className="flex gap-2 text-[0.875rem] text-textColor_1">
            <p className=" flex max-w-[10rem] items-center  gap-2 overflow-hidden truncate text-sm  text-textColor_1 ">
              <Clock />
              {itemData.weeks}
            </p>
            <p className="rounded-md bg-[#DFEAF9] p-1 ">{itemData.money}</p>
          </div>
        </div>
        <div className="mt-3 border-t border-[#E3E3E3]"></div>
        <div className="mt-1 flex items-center justify-between">
          <div className="flex gap-2">
            <button className="flex items-center  gap-2 self-end rounded-full bg-[#eeeeeea1] py-[6px] px-[10px] text-[1rem]  font-semibold text-[#222222] delay-75  hover:bg-[#EEEEEE] sm:py-[10px] sm:px-[24px] ">
              Not Intrested
            </button>
          </div>
          <div></div>
          <div className="  rounded-full bg-gradient-to-r from-[#FE8116] to-[#FFCF07] p-[2px]  text-[#222222] ">
            <Link
              to={`/Card-detail/${itemData.id}`}
              onClick={() => loadCurrentItem(itemData)}
              className=" flex items-center  gap-2 self-end rounded-full bg-SecondaryWhite py-[6px] px-[10px] text-[1rem] font-semibold delay-75  hover:bg-[#EEEEEE] sm:py-[10px] sm:px-[24px]"
            >
              Go To Listing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchtoProps = (dispatch) => {
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};
export default connect(null, mapDispatchtoProps)(Index);
