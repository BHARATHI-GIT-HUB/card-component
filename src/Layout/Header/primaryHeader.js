import React from "react";
import { Link } from "react-router-dom";
import Wallet from "../../Assets/Icons/Wallet";
import Message from "../../Assets/Icons/Message";
import Bell from "../../Assets/Icons/Bell";
import Logo from "../../Assets/Icons/Logo";
import HandBug from "../../Assets/Icons/HandBug";
import Name from "../../Assets/Icons/Name";
import profile from "../../Assets/Images/profile.webp";
import DownArrow from "../../Assets/Icons/DownArrow";
export default function primaryHeader() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white bg-opacity-75 px-[32px] py-[16px] backdrop-blur-xl !backdrop-filter md:px-[32px] md:py-[16px]">
      <div className="flex items-center  ">
        <span className="   flex items-center justify-center">
          <Logo />
          <div className="hidden md:flex">
            <Name />
          </div>
          <p className=" hidden text-[.999rem] font-semibold leading-[1.42] text-textColor_1 sm:block md:hidden">
            for Independence
          </p>

          <Link
            to=""
            className=" text-md easy-in-out md:  ml-[32px] hidden font-semibold leading-[1.5] text-textColor_1 transition duration-200 hover:text-black md:flex  "
          >
            Discover{" "}
            <span className="ml-1  rounded-full  bg-gradient-to-l  from-[#FE9D22] to-[#FE5E5A] px-[8px] py-[6px] text-xs font-semibold  leading-[13px] tracking-[0.3px]  text-primaryWhite">
              BETA
            </span>
          </Link>
          <Link
            to=""
            className=" text-md easy-in-out ml-[32px]  hidden font-semibold leading-[1.5] text-textColor_1 transition duration-200 hover:text-black md:block"
          >
            Projects{" "}
          </Link>
          <Link
            to=""
            className=" text-md easy-in-out ml-[32px]  hidden font-semibold leading-[1.5] text-textColor_1 transition duration-200 hover:text-black md:block"
          >
            Opportuities{" "}
          </Link>
        </span>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link
          to=""
          className="  bottom-1 hidden items-center   justify-center gap-2 rounded-full border border-gray-300 px-[20px] py-[10px] md:flex  "
        >
          <Wallet />
          <p className=" font-md font-bold leading-[1.5] text-[#A0A0A0]">
            {" "}
            $0.00
          </p>
        </Link>
        <div className=" hidden w-[30px] items-center justify-center md:flex">
          <div className=" relative">
            <Message />
            <div className=" absolute top-[-.7rem] right-[-.2rem]">
              <span className="h-3 w-3 rounded-full bg-gradient-to-b from-[#f0a893] to-[#fa6365] px-[.39rem] py-[.08rem] text-xs font-semibold  text-primaryWhite">
                1
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[30px] items-center justify-center">
          <div className=" relative">
            <Bell />
            <div className=" absolute top-[-.7rem] right-[-.2rem]">
              <span className="h-3 w-3 rounded-full bg-gradient-to-b from-[#f0a893] to-[#fa6365] px-[.39rem] py-[.08rem] text-xs font-semibold  text-primaryWhite">
                1
              </span>
            </div>
          </div>
        </div>
        <div className="  hidden items-center justify-center gap-1 rounded-lg border-[2px] border-[#EEEEEE] p-[10px] md:flex">
          <div className="relative w-10">
            <img
              src={profile}
              alt=""
              className=" h-[32px] w-[32px] rounded-full object-contain"
            />
            <div className=" absolute top-[-.49rem] right-[7px]">
              {/* <span className="h-3 w-3 rounded-full bg-orange-300 !px-[7.3px] py-[0.2px]  text-xs"></span> */}
              <span className="e h-3 w-3 rounded-full bg-gradient-to-b from-[#f0a893] to-[#fa6365] !px-[7.3px]  py-[0.2px] text-xs"></span>
            </div>
          </div>
          <p className=" text-[.999rem] font-semibold leading-[1.42] text-textColor_1">
            Independence
          </p>
          <DownArrow />
        </div>
        <div className=" md:hidden">
          <HandBug />
        </div>
      </div>
    </nav>
  );
}
