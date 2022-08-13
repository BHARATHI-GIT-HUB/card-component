import React from "react";
import Logo from "../Assets/Images/Logo.webp";
import Star from "../Assets/Icons/Star";
import Calander from "../Assets/Icons/Calander";
import BackArrow from "../Assets/Icons/BackArrow";
import { Link, useParams } from "react-router-dom";
import "./CardDetail.css";
// import Data from "../Data";
import Clock from "../Assets/Icons/Clock";
import Doller from "../Assets/Icons/Doller";
const CardDetail = () => {
  // const { ids } = useParams();

  return (
    <div className=" my-[6rem]  flex justify-center items-start gap-2  max-w-[1440px]">
      <div className="hidden  tablet:flex  flex-col items-center justify-center gap-2  min-w-[416px] max-w-[514px] w-full px-[3rem]">
        <img
          src={Logo}
          alt="logo"
          className=" h-[208px] w-[208px] object-cover rounded-full"
        />
        <h1 className="gradient text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-blue-400  via-violet-400  to-yellow-400 ">
          lcarus
        </h1>
        <div className=" flex flex-col justify-center items-center gap-4 ">
          <span className=" text-base font-medium leading-3 text-textColor">
            Project budget:
          </span>
          <span className=" text-2xl font-semibold">$1,000 - $5,000</span>
          <p className="text-base  font-medium leading-3 text-textColor">
            This is a{" "}
            <span className="text-textHighlight font-bold ">Fixed price</span>{" "}
            Opportunity
          </p>
          <button className=" font-semibold text-white  bg-black font-[1rem] px-[48px] py-[10px] my-2 rounded-full flex gap-2 ">
            <Star /> Apply To Opportunity
          </button>
          <span className="text-base  font-medium leading-3 text-textColor">
            Timeline:
            <span className="text-textHighlight font-bold ">
              1-4 Weeks
            </span>{" "}
          </span>
          <span
            className="text-base  font-medium leading-3 text-textColor
            "
          >
            {" "}
            Start date:{" "}
            <span className="text-textHighlight font-bold ">Immediately</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[5rem] justify-center items-center ">
        <div className=" bg-transparent tablet:bg-[#F9F9F9] px-[16px] py-[24px] tablet:px-[54px]  tablet:py-[32px] flex tablet:flex-auto flex-col justify-center items-center gap-6 relative rounded-2xl ">
          <div className="flex flex-col justify-center  items-start gap-6 py-[54px] ">
            <Link
              to={"/"}
              className="text-[1rem]  font-medium leading-3 text-textColor flex gap-1 justify-center items-center"
            >
              <BackArrow />
              Back to Opportunities{" "}
            </Link>
            <p className=" py-[.3rem] px-[1rem] bg-[#EEEEEE] rounded-full text-sm text-textColor  flex   items-center gap-2">
              <Calander />
              Posted 1 days ago
            </p>
            <h1 className=" text-3xl sm:text-4xl font-semibold tracking-[-0.25px] ">
              3D Design at Icarus
            </h1>
            <span className="flex gap-2">
              <p className=" py-[6px] px-[10px] text-xs sm:text-sm bg-SecondaryWhite rounded-full  text-[#2e2e2eef] flex   items-center gap-2 whitespace-nowrap">
                Mobile Design
              </p>
              <p className=" py-[6px] px-[10px] text-xs sm:text-sm bg-SecondaryWhite rounded-full text-[#2e2e2eef] flex   items-center gap-2 truncate">
                3D Design
              </p>
            </span>
            <div className="flex flex-col  sm:flex-row gap-8 justify-center items-center">
              <div className="flex gap-2 justify-center items-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className=" w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-cover rounded-full"
                />
                <div>
                  <p className=" font-semibold text-xl   tracking-[-0.15px]">
                    Icarus
                  </p>
                  <p className="  text-sm text-textColor flex    gap-2">
                    Company
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className=" w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-cover rounded-full"
                />
                <div>
                  <p className=" font-semibold text-xl   tracking-[-0.15px]">
                    Icarus
                  </p>
                  <p className="  text-sm text-textColor flex    gap-2">
                    Company
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  items-center gap-2 tablet:hidden">
              <span className=" flex  self-start items-center gap-1">
                <Doller />
                <p></p>
                <span className=" text-lg font-light">$1,000 - $5,000</span>

                <p className=" text-lg font-light  list-disc">Fixed</p>
              </span>
              <span className=" flex justify-center items-center gap-1">
                <Clock />
                <p></p>
                <span className=" text-lg font-light">Less than one Week</span>

                <p className=" text-lg font-light  list-disc">Imm</p>
              </span>
            </div>
            <div className="border-t border-[#E3E3E3] mt-3 w-full"></div>
            <div className="flex flex-col gap-3 py-8">
              <h1 className=" font-semibold text-md text-textDark ">
                Project Deliverables
              </h1>
              <span className=" flex flex-col gap-1">
                <ul>
                  <li className="font-semibold text-md text-textHighlight list-disc ">
                    3d design help for augmented reality app
                  </li>
                </ul>
                <p className="font-normal text-md text-textDark">
                  We're looking for some 3d design help for an augmented reality
                  app!
                </p>
              </span>
            </div>
            <div className="border-t border-[#E3E3E3]  w-full"></div>
            <div className="flex flex-col gap-3 py-8">
              <h1 className=" font-semibold text-md text-[#2e2e2eef] ">
                Description
              </h1>
              <span className=" flex flex-col gap-1">
                <p className="font-normal text-md text-[#585858de]">
                  We're looking for some 3d design help for an augmented reality
                  app!
                </p>
              </span>
            </div>
            <div className="border-t border-[#E3E3E3]  w-full"></div>
            <div className="flex flex-col gap-3 py-8">
              <h1 className=" font-semibold text-md text-[#2e2e2eef] ">
                Company Description
              </h1>
              <span className=" flex flex-col gap-1">
                <p className="font-normal text-md text-[#585858de]">
                  we create web3 platforms
                </p>
              </span>
            </div>
            <div className="border-t border-[#E3E3E3]  w-full"></div>
          </div>
          <div className=" relative bottom-[-3.25rem]  left-[1%]">
            <img
              src={Logo}
              alt=""
              className="w-[48px] h-[48px] object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className=" text-center">
            <h1 className=" font-bold text-xl text-[#2e2e2eef]  ">
              Landon Sanford
            </h1>
            <p className=" text-md text-[#585858de]  font-normal">
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

export default CardDetail;
