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
    <div className=" flex  h-full max-w-[1440px] items-start justify-center gap-2  md:my-[6rem]">
      <div className="hidden  w-full  min-w-[416px] max-w-[514px] flex-col items-center  justify-center gap-4 px-[3rem] tablet:flex">
        <img
          src={currentItem.image}
          alt="logo"
          className=" h-[208px] w-[208px] rounded-full object-cover"
        />
        <h1 className="gradient bg-gradient-to-r from-blue-400 via-violet-400 to-yellow-400 bg-clip-text  text-4xl  font-extrabold  text-transparent ">
          {currentItem.heading}
        </h1>
        <div className=" flex flex-col items-center justify-center gap-4 ">
          <span className=" text-base font-medium  leading-[1.5rem] text-textColor">
            Project budget:
          </span>
          <span className=" text-2xl font-semibold leading-3">
            {currentItem.money}
          </span>
          <p className="text-base  font-medium leading-[1.3rem] text-textColor">
            This is a{" "}
            <span className="font-bold text-textHighlight ">fixed price</span>{" "}
            Opportunity
          </p>
          <button className=" font-base flex  gap-2 rounded-full bg-black px-[48px]  py-[10px] font-semibold text-white ">
            <Star /> Apply To Opportunity
          </button>
          <span className="flex  gap-1 text-base font-medium leading-3 text-textColor">
            <h1 className="font-normal tracking-normal">Timeline:</h1>
            <span className="font-bold tracking-wide text-textHighlight ">
              {currentItem.weeks}
            </span>{" "}
          </span>
          <span
            className="flex  gap-1  text-base 
            font-medium text-textColor"
          >
            {" "}
            <h1 className="font-normal leading-3 tracking-normal">
              Start date:
            </h1>{" "}
            <span className="font-bold leading-3 tracking-normal text-textHighlight ">
              Immediately
            </span>
          </span>
        </div>
      </div>
      {/* <div className="flex flex-col gap-[5rem] justify-center items-center "> */}
      <div className="felx flex-auto flex-col items-center justify-center  ">
        <div className=" relative flex flex-col items-center justify-center  gap-6 rounded-2xl bg-transparent px-[16px] py-[24px] tablet:flex-auto tablet:bg-[#F9F9F9] tablet:px-[54px] tablet:py-[32px] ">
          <div className="flex flex-col items-start  justify-center gap-6 md:py-[54px] ">
            <Link
              to={"/"}
              className="flex  items-center justify-center gap-1 text-[1rem] font-bold leading-3 text-textColor_1"
            >
              <BackArrow />
              Back to Opportunities{" "}
            </Link>
            <p className=" text-bold flex items-center gap-2 rounded-full bg-[#EEEEEE] py-[.3rem]  px-[1rem]  text-sm text-textColor">
              <Calander />
              Posted {currentItem.days} days ago
            </p>
            <h1 className=" text-3xl font-semibold leading-[40px] tracking-[0.25px] sm:text-4xl ">
              3D Design at Icarus
            </h1>
            <span className="flex gap-2">
              <p className=" text-bold flex items-center gap-2 whitespace-nowrap rounded-full  bg-SecondaryWhite py-[6px] px-[10px]   text-xs text-[#2e2e2eef] sm:text-sm">
                {currentItem.roles_1}{" "}
              </p>
              <div>
                {currentItem.roles_2.length > 0 ? (
                  <p className=" flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-[#EEEEEE]   py-[6px] px-[10px]  text-xs text-textDark sm:text-sm ">
                    {currentItem.roles_2}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </span>
            <div className="flex flex-col  items-center justify-center gap-8 sm:flex-row">
              <div className="flex items-center justify-center gap-3">
                <img
                  src={currentItem.image}
                  alt="Logo"
                  className=" h-[48px] w-[48px] rounded-full object-cover md:h-[64px] md:w-[64px]"
                />
                <div>
                  <p className="gradiant text-xl font-semibold   tracking-[-0.15px] ">
                    {currentItem.heading}
                  </p>
                  <p className="  flex gap-2 text-sm    leading-[1.4rem] text-textColor">
                    Company
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={currentItem.image}
                  alt="Logo"
                  className=" h-[48px] w-[48px] rounded-full object-cover md:h-[64px] md:w-[64px]"
                />
                <div>
                  <p className=" text-xl font-semibold   tracking-[-0.15px]">
                    {currentItem.heading}
                  </p>
                  <p className="  text-sm leading-[1.4rem] text-textColor">
                    Company
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  items-center gap-2 tablet:hidden">
              <span className=" flex  items-center gap-1 self-start">
                <Doller />

                <span className=" text-lg font-light">{currentItem.money}</span>

                <p className=" list-disc text-lg  font-light">Fixed</p>
              </span>
              <span className=" flex items-center justify-center gap-1">
                <Clock />

                <span className=" text-lg font-light">Less than one Week</span>

                <p className=" list-disc text-lg  font-light">Imm</p>
              </span>
            </div>
            <div className="mt-3 w-full border-t border-[#E3E3E3]"></div>
            <div className=" py-3">
              <h1 className=" text-md font-semibold leading-[2rem] text-textDark ">
                Project Deliverables
              </h1>

              <ul>
                <li className="text-md list-disc font-semibold leading-[1.5rem] text-textHighlight ">
                  {currentItem.project_deivery_1}{" "}
                </li>
              </ul>
              <p className="text-md font-normal leading-[2.6rem] text-textColor_1">
                {currentItem.project_deivery_2}{" "}
              </p>
            </div>
            <div className="w-full border-t  border-[#E3E3E3]"></div>
            <div className="py-3">
              <h1 className=" text-md font-semibold leading-[1.4rem] text-textDark ">
                Description
              </h1>
              <span className=" flex flex-col gap-1">
                <p className="text-md font-normal leading-[2.6rem] text-textColor_1">
                  {currentItem.discription}
                </p>
              </span>
            </div>
            <div className="w-full border-t  border-[#E3E3E3]"></div>
            <div className=" py-3">
              <h1 className=" text-md font-semibold leading-[1.4rem] text-textDark ">
                Company Description
              </h1>

              <p className="text-md font-normal leading-[2.6rem] text-textColor_1">
                {currentItem.company_discription}
              </p>
            </div>
            <div className="w-full border-t  border-[#E3E3E3]"></div>
          </div>
          <div className=" relative bottom-[-3.25rem]  ">
            <img
              src={currentItem.image}
              alt=""
              className="hidden h-[48px] w-[48px] rounded-full object-cover sm:block"
            />
          </div>
        </div>
        <div className="mt-[3rem] flex flex-col items-center justify-center gap-2">
          <div className=" hidden text-center sm:block">
            <h1 className=" text-xl font-bold text-textDark  ">
              Landon Sanford
            </h1>
            <p className=" text-md font-normal  text-textColor_1">
              we create web3 platforms
            </p>
          </div>
        </div>
        <div className="sticky  bottom-0  flex w-full items-center justify-center bg-SecondaryWhite px-4 pt-2 pb-4 sm:bg-transparent md:static    ">
          <button className=" font-[1rem] my-2  flex w-full items-center justify-center  gap-2 rounded-full  bg-black px-[28px] py-[10px] font-semibold text-white sm:w-max  ">
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
