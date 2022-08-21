import React from "react";
import Star from "../../Assets/Icons/Star";
import Calander from "../../Assets/Icons/Calander";
import BackArrow from "../../Assets/Icons/BackArrow";
import { Link } from "react-router-dom";
import Clock from "../../Assets/Icons/Clock";
import Doller from "../../Assets/Icons/Doller";
import { connect } from "react-redux";
const CardDetail = ({ currentItem }) => {
  return (
    <div className=" my-[6rem]  flex justify-center items-start gap-2  max-w-[1440px]">
      <div className="hidden  tablet:flex  flex-col items-center justify-center gap-4  min-w-[416px] max-w-[514px] w-full px-[3rem]">
        <img
          src={currentItem.image}
          alt="logo"
          className=" h-[208px] w-[208px] object-cover rounded-full"
        />
        <h1 className="gradient text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-blue-400  via-violet-400  to-yellow-400 ">
          {currentItem.heading}
        </h1>
        <div className=" flex flex-col justify-center items-center gap-4 ">
          <span className=" text-base font-medium  text-textColor leading-[1.5rem]">
            Project budget:
          </span>
          <span className=" text-2xl font-semibold leading-3">
            {currentItem.money}
          </span>
          <p className="text-base  font-medium leading-[1.3rem] text-textColor">
            This is a{" "}
            <span className="text-textHighlight font-bold ">fixed price</span>{" "}
            Opportunity
          </p>
          <button className=" font-semibold text-white  bg-black font-base px-[48px] py-[10px]  rounded-full flex gap-2 ">
            <Star /> Apply To Opportunity
          </button>
          <span className="text-base  font-medium leading-3 text-textColor flex gap-1">
            <h1 className="font-normal tracking-normal">Timeline:</h1>
            <span className="text-textHighlight font-bold tracking-wide ">
              {currentItem.weeks}
            </span>{" "}
          </span>
          <span
            className="text-base  font-medium  text-textColor 
            flex gap-1"
          >
            {" "}
            <h1 className="font-normal tracking-normal leading-3">
              Start date:
            </h1>{" "}
            <span className="text-textHighlight font-bold tracking-normal leading-3 ">
              Immediately
            </span>
          </span>
        </div>
      </div>
      {/* <div className="flex flex-col gap-[5rem] justify-center items-center "> */}
      <div className="felx flex-col flex-auto justify-center items-center  ">
        <div className=" bg-transparent tablet:bg-[#F9F9F9] px-[16px] py-[24px] tablet:px-[54px]  tablet:py-[32px] flex tablet:flex-auto flex-col justify-center items-center gap-6 relative rounded-2xl ">
          <div className="flex flex-col justify-center  items-start gap-6 py-[54px] ">
            <Link
              to={"/"}
              className="text-[1rem]  font-bold leading-3 text-textColor_1 flex gap-1 justify-center items-center"
            >
              <BackArrow />
              Back to Opportunities{" "}
            </Link>
            <p className=" py-[.3rem] px-[1rem] bg-[#EEEEEE] rounded-full text-sm text-bold text-textColor  flex  items-center gap-2">
              <Calander />
              Posted {currentItem.days} days ago
            </p>
            <h1 className=" text-3xl sm:text-4xl font-semibold tracking-[0.25px] leading-[40px] ">
              3D Design at Icarus
            </h1>
            <span className="flex gap-2">
              <p className=" py-[6px] px-[10px] text-xs sm:text-sm bg-SecondaryWhite rounded-full  text-[#2e2e2eef] text-bold flex   items-center gap-2 whitespace-nowrap">
                {currentItem.roles_1}{" "}
              </p>
              <div>
                {currentItem.roles_2.length > 0 ? (
                  <p className=" py-[6px] px-[10px] text-xs sm:text-sm bg-[#EEEEEE] rounded-full text-textDark flex   items-center gap-2  overflow-hidden whitespace-nowrap text-ellipsis ">
                    {currentItem.roles_2}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </span>
            <div className="flex flex-col  sm:flex-row gap-8 justify-center items-center">
              <div className="flex gap-3 justify-center items-center">
                <img
                  src={currentItem.image}
                  alt="Logo"
                  className=" w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-cover rounded-full"
                />
                <div>
                  <p className="gradiant font-semibold text-xl   tracking-[-0.15px] ">
                    {currentItem.heading}
                  </p>
                  <p className="  text-sm text-textColor flex    gap-2 leading-[1.4rem]">
                    Company
                  </p>
                </div>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <img
                  src={currentItem.image}
                  alt="Logo"
                  className=" w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-cover rounded-full"
                />
                <div>
                  <p className=" font-semibold text-xl   tracking-[-0.15px]">
                    {currentItem.heading}
                  </p>
                  <p className="  text-sm text-textColor leading-[1.4rem]">
                    Company
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  items-center gap-2 tablet:hidden">
              <span className=" flex  self-start items-center gap-1">
                <Doller />

                <span className=" text-lg font-light">{currentItem.money}</span>

                <p className=" text-lg font-light  list-disc">Fixed</p>
              </span>
              <span className=" flex justify-center items-center gap-1">
                <Clock />

                <span className=" text-lg font-light">Less than one Week</span>

                <p className=" text-lg font-light  list-disc">Imm</p>
              </span>
            </div>
            <div className="border-t border-[#E3E3E3] mt-3 w-full"></div>
            <div className=" py-3">
              <h1 className=" font-semibold text-md text-textDark leading-[2rem] ">
                Project Deliverables
              </h1>

              <ul>
                <li className="font-semibold text-md text-textHighlight list-disc leading-[1.5rem] ">
                  {currentItem.project_deivery_1}{" "}
                </li>
              </ul>
              <p className="font-normal text-md text-textColor_1 leading-[2.6rem]">
                {currentItem.project_deivery_2}{" "}
              </p>
            </div>
            <div className="border-t border-[#E3E3E3]  w-full"></div>
            <div className="py-3">
              <h1 className=" font-semibold text-md text-textDark leading-[1.4rem] ">
                Description
              </h1>
              <span className=" flex flex-col gap-1">
                <p className="font-normal text-md text-textColor_1 leading-[2.6rem]">
                  {currentItem.discription}
                </p>
              </span>
            </div>
            <div className="border-t border-[#E3E3E3]  w-full"></div>
            <div className=" py-3">
              <h1 className=" font-semibold text-md text-textDark leading-[1.4rem] ">
                Company Description
              </h1>

              <p className="font-normal text-md text-textColor_1 leading-[2.6rem]">
                {currentItem.company_discription}
              </p>
            </div>
            <div className="border-t border-[#E3E3E3]  w-full"></div>
          </div>
          <div className=" relative bottom-[-3.25rem]  ">
            <img
              src={currentItem.image}
              alt=""
              className="w-[48px] h-[48px] object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-[3rem]">
          <div className=" text-center">
            <h1 className=" font-bold text-xl text-textDark  ">
              Landon Sanford
            </h1>
            <p className=" text-md text-textColor_1  font-normal">
              we create web3 platforms
            </p>
          </div>
          <button className=" font-semibold text-white  bg-black font-[1rem] px-[28px] py-[10px] my-2 rounded-full flex gap-2 ">
            <Star /> Apply
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentItem: state.card.currentItem,
  };
};

export default connect(mapStateToProps)(CardDetail);
