import React from "react";
import Calander from "../../Assets/Icons/Calander";
import Clock from "../../Assets/Icons/Clock";
import loadCurrentItem from "../../reudx/card/cardAction";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Index = ({ itemData, loadCurrentItem }) => {
  return (
    <div className=" flex flex-col gap-4 ">
      <div className="bg-SecondaryWhite  md:w-[45rem] flex flex-col gap-2  p-[16px] rounded-2xl capitalize ">
        <span className=" py-[.3rem] px-[1rem] bg-[#EEEEEE] rounded-full text-sm text-textColor_1 flex  self-end items-center gap-2">
          <span>
            <Calander />
          </span>
          Posted {itemData.days} days ago
        </span>
        <div className="flex items-center gap-3 ">
          <img
            src={itemData.image}
            alt="Logo"
            className=" w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-cover rounded-full"
          />
          <div>
            <p className=" font-semibold text-xs sm:text-[1rem]  text-textColor_1  tracking-[0.15px]">
              {itemData.heading}
            </p>
            <h1 className="  text-[1.185rem] sm:text-[1.4375rem] font-semibold tracking-[0.2px] leading-10  ">
              {itemData.subHeading}
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center mt-1 gap-3">
          <div className="flex flex-col sm:flex-row justify-start items-start gap-2">
            <p className=" py-[6px] px-[10px] text-xs sm:text-sm bg-[#EEEEEE] rounded-full  text-textDark flex   items-center gap-2 whitespace-nowrap">
              {itemData.roles_1}
            </p>
            <div>
              {itemData.roles_2.length > 0 ? (
                <p className=" py-[6px] px-[10px] text-xs sm:text-sm bg-[#EEEEEE] rounded-full text-textDark flex   items-center gap-2  overflow-hidden whitespace-nowrap text-ellipsis ">
                  {itemData.roles_2}
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div className="text-[0.875rem] text-textColor_1 flex gap-2">
            <p className=" flex gap-2 items-center  text-sm text-textColor_1 overflow-hidden truncate  max-w-[10rem] ">
              <Clock />
              {itemData.weeks}
            </p>
            <p className="p-1 bg-[#DFEAF9] rounded-md ">{itemData.money}</p>
          </div>
        </div>
        <div className="border-t border-[#E3E3E3] mt-3"></div>
        <div className="flex justify-between items-center mt-1">
          <div className="flex gap-2">
            <button className="py-[6px] px-[10px]  sm:py-[10px] sm:px-[24px] text-[1rem] font-semibold bg-[#eeeeeea1] hover:bg-[#EEEEEE] rounded-full  text-[#222222] delay-75 flex  self-end items-center gap-2 ">
              Not Intrested
            </button>
          </div>
          <div></div>
          <div className="  bg-gradient-to-r p-[2px] from-[#FE8116] to-[#FFCF07] rounded-full  text-[#222222] ">
            <Link
              to={`/Card-detail/${itemData.id}`}
              onClick={() => loadCurrentItem(itemData)}
              className=" py-[6px] px-[10px]  sm:py-[10px] sm:px-[24px] text-[1rem] font-semibold bg-SecondaryWhite hover:bg-[#EEEEEE] rounded-full delay-75 flex  self-end items-center gap-2"
            >
              Go To Listing
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <div className=" flex flex-col gap-4 ">
    //   {Data.map(
    //     ({
    //       id,
    //       days,
    //       image,
    //       heading,
    //       subHeading,
    //       roles_1,
    //       roles_2,
    //       weeks,
    //       money,
    //     }) => {
    //       return (
    //         <div
    //           key={id}
    //           className="bg-SecondaryWhite  md:w-[45rem] flex flex-col gap-2  p-[16px] rounded-2xl capitalize "
    //         >
    //           <span className=" py-[.3rem] px-[1rem] bg-[#EEEEEE] rounded-full text-sm text-textColor_1 flex  self-end items-center gap-2">
    //             <span>
    //               <Calander />
    //             </span>
    //             Posted {days} days ago
    //           </span>
    //           <div className="flex items-center gap-3 ">
    //             <img
    //               src={image}
    //               alt="Logo"
    //               className=" w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-cover rounded-full"
    //             />
    //             <div>
    //               <p className=" font-semibold text-xs sm:text-[1rem]  text-textColor_1  tracking-[0.15px]">
    //                 {heading}
    //               </p>
    //               <h1 className="  text-[1.185rem] sm:text-[1.4375rem] font-semibold tracking-[0.2px] leading-10  ">
    //                 {subHeading}
    //               </h1>
    //             </div>
    //           </div>
    //           <div className="flex flex-col md:flex-row justify-between md:items-center mt-1 gap-3">
    //             <div className="flex flex-col sm:flex-row justify-start items-start gap-2">
    //               <p className=" py-[6px] px-[10px] text-xs sm:text-sm bg-[#EEEEEE] rounded-full  text-textDark flex   items-center gap-2 whitespace-nowrap">
    //                 {roles_1}
    //               </p>
    //               <div>
    //                 {roles_2.length > 0 ? (
    //                   <p className=" py-[6px] px-[10px] text-xs sm:text-sm bg-[#EEEEEE] rounded-full text-textDark flex   items-center gap-2  overflow-hidden whitespace-nowrap text-ellipsis ">
    //                     {roles_2}
    //                   </p>
    //                 ) : (
    //                   <p></p>
    //                 )}
    //               </div>
    //             </div>
    //             <div className="text-[0.875rem] text-textColor_1 flex gap-2">
    //               <p className=" flex gap-2 items-center  text-sm text-textColor_1 overflow-hidden truncate  max-w-[10rem] ">
    //                 <Clock />
    //                 {weeks}
    //               </p>
    //               <p className="p-1 bg-[#DFEAF9] rounded-md ">{money}</p>
    //             </div>
    //           </div>
    //           <div className="border-t border-[#E3E3E3] mt-3"></div>
    //           <div className="flex justify-between items-center mt-1">
    //             <div className="flex gap-2">
    //               <button className="py-[6px] px-[10px]  sm:py-[10px] sm:px-[24px] text-[1rem] font-semibold bg-[#eeeeeea1] hover:bg-[#EEEEEE] rounded-full  text-[#222222] delay-75 flex  self-end items-center gap-2 ">
    //                 Not Intrested
    //               </button>
    //             </div>
    //             <div></div>
    //             <div className="  bg-gradient-to-r p-[2px] from-[#FE8116] to-[#FFCF07] rounded-full  text-[#222222] ">
    //               <Link
    //                 to={`/Card-detail/${id}`}
    //                 className=" py-[6px] px-[10px]  sm:py-[10px] sm:px-[24px] text-[1rem] font-semibold bg-SecondaryWhite hover:bg-[#EEEEEE] rounded-full delay-75 flex  self-end items-center gap-2"
    //               >
    //                 Go To Listing
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     }
    //   )}
    // </div>
  );
};
const mapDispatchtoProps = (dispatch) => {
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};
export default connect(null, mapDispatchtoProps)(Index);
