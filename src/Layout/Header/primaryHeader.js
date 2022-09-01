import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wallet from "../../Assets/Icons/Wallet";
import Message from "../../Assets/Icons/Message";
import Bell from "../../Assets/Icons/Bell";
import Logo from "../../Assets/Icons/Logo";
import HandBug from "../../Assets/Icons/HandBug";
import Name from "../../Assets/Icons/Name";
import profile from "../../Assets/Images/profile.webp";
import DownArrow from "../../Assets/Icons/DownArrow";
import Star_1 from "../../Assets/Icons/Star_1";
import Setting from "../../Assets/Icons/Setting";
import Preference from "../../Assets/Icons/Preference";
import Logout from "../../Assets/Icons/Logout";
import Mail from "../../Assets/Icons/Mail";
import Help from "../../Assets/Icons/Help";
import Discovery from "../../Assets/Icons/Discovery";
import Project from "../../Assets/Icons/Project";
import Coin from "../../Assets/Icons/Coin";

export default function PrimaryHeader() {
  const [toggle, setToggle] = useState(true);
  const [visible, setaVisible] = useState(false);
  const handleClick = () => {
    setaVisible(!visible);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="sticky top-0 z-50 flex min-w-max items-center justify-between   bg-white bg-opacity-75 px-[32px] py-[16px] backdrop-blur-xl !backdrop-filter md:px-[32px] md:py-[16px]">
      <div className="flex items-center  ">
        <span className="   flex items-center justify-center">
          <Logo />
          <div className="hidden md:flex">
            <Name />
          </div>
          <p className="  text-[.999rem] font-semibold leading-[1.42] text-textColor_1  md:hidden">
            for Independence
          </p>

          <Link
            to=""
            className=" text-md easy-in-out hidden font-semibold leading-[1.5] text-textColor_1 transition duration-200 hover:text-black md:ml-[32px] md:flex  "
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
          className="  bottom-1 hidden items-center   justify-center gap-2 rounded-full border border-gray-300 px-[20px] py-[10px] text-[#A0A0A0] transition-colors duration-100 ease-in hover:bg-[#EEEEEE] hover:text-gray-500  md:flex  "
        >
          <Wallet />
          <p className=" font-md font-bold leading-[1.5]  "> $0.00</p>
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
        <div className="flex w-[30px] items-center justify-center gap-5">
          <div className=" relative">
            <Bell />
            <div className=" absolute top-[-.7rem] right-[-.2rem]">
              <span className="h-3 w-3 rounded-full bg-gradient-to-b from-[#f0a893] to-[#fa6365] px-[.39rem] py-[.08rem] text-xs font-semibold  text-primaryWhite">
                1
              </span>
            </div>
          </div>
          <div
            onClick={handleClick}
            className=" absolute right-10 top-[43.7%] md:hidden"
          >
            <Link
              to=""
              className={`hamburger ${visible ? "active" : ""}`}
              href="#"
            >
              <span></span>
            </Link>
          </div>
        </div>
        <div className="  hidden items-center justify-center gap-1 rounded-lg border-[2px] border-[#EEEEEE] p-[8px] md:flex">
          <div className="relative w-10">
            <img
              src={profile}
              alt=""
              className=" h-[32px] w-[32px] rounded-full object-contain"
            />
            <div className=" absolute top-[-.49rem] right-[7px]">
              <span className="e h-3 w-3 rounded-full bg-gradient-to-b from-[#f0a893] to-[#fa6365] !px-[7.3px]  py-[0.2px] text-xs"></span>
            </div>
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                // aria-expanded="true"
                className="flex"
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <p className=" text-[0.875rem] font-semibold leading-[1.42] text-textColor_1 transition-transform duration-75 ease-in-out">
                  Independence
                </p>
                <span>
                  {toggle ? (
                    <div
                      style={{
                        transition: "transform .3s ease",
                        transform: "rotate(180deg)",
                      }}
                    >
                      <DownArrow />
                    </div>
                  ) : (
                    <div
                      style={{
                        transform: "rotate(0deg)",
                        transition: "transform .2s ease",
                      }}
                    >
                      <DownArrow />
                    </div>
                  )}
                </span>
              </button>
            </div>

            <div
              className={` absolute  right-[0] mt-[2rem]  rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 ease-in  ${
                toggle
                  ? " top-[-10000%]   duration-500 "
                  : "top-[100%]   duration-300"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="divide-y divide-gray-100 ">
                <div className="" role="none">
                  <Link
                    to=""
                    className="block p-[16px]  text-gray-700 transition-colors duration-100 ease-in hover:bg-[#EEEEEE] "
                    role="menuitem"
                    id="menu-item-0"
                  >
                    <span className="">
                      <div className=" text-sm font-semibold capitalize leading-[1.42]">
                        username
                      </div>
                      <p className=" text-xs font-normal leading-[1.333] tracking-[0.15px] text-textColor">
                        sbharathi261@gmail.com{" "}
                      </p>
                    </span>
                  </Link>
                </div>
                <div
                  className="divide-y  divide-gray-100 px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  "
                  role="none"
                >
                  <Link
                    to=""
                    className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                    role="menuitem"
                  >
                    <Star_1 />
                    <p className="  flex items-center gap-2 text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                      switch to hiring
                      <span className=" rounded-full  bg-gradient-to-l  from-[#FE9D22] to-[#FE5E5A] px-[8px] py-[6px] text-xs font-semibold  leading-[13px] tracking-[0.3px]  text-primaryWhite">
                        New
                      </span>
                    </p>
                  </Link>
                </div>
                <div></div>
              </div>
              <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                <Link
                  to=""
                  className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                  role="menuitem"
                >
                  <Setting />{" "}
                  <p className="   text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                    switch to hiring
                  </p>
                </Link>
              </div>
              <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                <Link
                  to=""
                  className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                  role="menuitem"
                >
                  <Preference />{" "}
                  <div className="flex items-center gap-4">
                    <p className="   whitespace-nowrap text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                      Work Preferences
                    </p>
                    <span className=" rounded-full  bg-gradient-to-l  from-[#FE9D22] to-[#FE5E5A] px-[8px] py-[6px] text-xs font-semibold  leading-[13px] tracking-[0.3px]  text-primaryWhite">
                      BETA
                    </span>
                  </div>
                </Link>
              </div>
              <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                <Link
                  to=""
                  className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                  role="menuitem"
                >
                  <Mail />{" "}
                  <p className="   text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                    Email Preferences
                  </p>
                </Link>
              </div>
              <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                <Link
                  to=""
                  className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                  role="menuitem"
                >
                  <Help />{" "}
                  <p className="   text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                    Help
                  </p>
                </Link>
              </div>
              <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                <Link
                  to=""
                  className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                  role="menuitem"
                >
                  <Logout />{" "}
                  <p className="text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                    Log Out
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div
            className={` absolute top-[4.35rem]  h-screen w-full overflow-y-scroll  rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 duration-700 ease-in-out  ${
              visible ? "left-[0]" : "left-[-100%] overflow-y-scroll  "
            }`}
          >
            <div>
              <div className="divide-y divide-gray-100 ">
                <div className="">
                  <Link
                    to=""
                    className=" flex items-center justify-between p-[16px]  text-gray-700 transition-colors duration-100 ease-in hover:bg-[#EEEEEE] "
                    role="menuitem"
                    id="menu-item-0"
                  >
                    <span className="flex items-center gap-2">
                      <img
                        src={profile}
                        alt=""
                        className=" h-[32px] w-[32px] rounded-full object-contain"
                      />
                      <div>
                        <div className=" text-sm font-semibold capitalize leading-[1.42]">
                          username
                        </div>
                        <p className=" text-xs font-normal leading-[1.333] tracking-[0.15px] text-textColor">
                          sbharathi261@gmail.com{" "}
                        </p>
                      </div>
                    </span>

                    <Link
                      to=""
                      className="  bottom-1  flex   items-center justify-center gap-2 rounded-full border border-gray-300 px-[20px] py-[10px] text-[#A0A0A0] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  hover:text-gray-500  "
                    >
                      <Wallet />
                      <p className=" font-md font-bold leading-[1.5]  ">
                        {" "}
                        $0.00
                      </p>
                    </Link>
                  </Link>
                </div>

                <div
                  className="divide-y  divide-gray-100 px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  "
                  role="none"
                >
                  <Link
                    to=""
                    className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                    role="menuitem"
                  >
                    <Star_1 />
                    <p className="  flex items-center gap-2 text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                      switch to hiring
                      <span className=" rounded-full  bg-gradient-to-l  from-[#FE9D22] to-[#FE5E5A] px-[8px] py-[6px] text-xs font-semibold  leading-[13px] tracking-[0.3px]  text-primaryWhite">
                        New
                      </span>
                    </p>
                  </Link>
                </div>
                <div></div>
              </div>
              <div className=" white divide-y-2  divide-gray-100">
                <div className=" ">
                  <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                    <Link
                      to=""
                      className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                      role="menuitem"
                    >
                      <Discovery />{" "}
                      <p className="   text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                        Discovery Independents{" "}
                      </p>
                    </Link>
                  </div>{" "}
                  <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                    <Link
                      to=""
                      className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                      role="menuitem"
                    >
                      <Project />{" "}
                      <p className="   text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                        Projects{" "}
                      </p>
                    </Link>
                  </div>{" "}
                  <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                    <Link
                      to=""
                      className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                      role="menuitem"
                    >
                      <Coin />{" "}
                      <p className="   text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                        Opportuities{" "}
                      </p>
                    </Link>
                  </div>
                  <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                    <Link
                      to=""
                      className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                      role="menuitem"
                    >
                      <div className="  w-[20px] items-center justify-center md:flex">
                        <div className=" relative">
                          <Message />
                          <div className=" absolute top-[-.7rem] right-[-.5rem]">
                            <span className="h-3 w-3 rounded-full bg-gradient-to-b from-[#f0a893] to-[#fa6365] px-[.39rem] py-[.08rem] text-xs font-semibold  text-primaryWhite">
                              1
                            </span>
                          </div>
                        </div>
                      </div>{" "}
                      <p className="   text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                        Messages{" "}
                      </p>
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                <Link
                  to=""
                  className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                  role="menuitem"
                >
                  <Preference />{" "}
                  <div className="flex items-center gap-4">
                    <p className="   whitespace-nowrap text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                      Work Preferences
                    </p>
                    <span className=" rounded-full  bg-gradient-to-l  from-[#FE9D22] to-[#FE5E5A] px-[8px] py-[6px] text-xs font-semibold  leading-[13px] tracking-[0.3px]  text-primaryWhite">
                      BETA
                    </span>
                  </div>
                </Link>
              </div>
              <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                <Link
                  to=""
                  className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                  role="menuitem"
                >
                  <Mail />{" "}
                  <p className="   text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                    Email Preferences
                  </p>
                </Link>
              </div>
              <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                <Link
                  to=""
                  className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                  role="menuitem"
                >
                  <Mail />{" "}
                  <p className="   text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                    Contra Badge
                  </p>
                </Link>
              </div>
              <div className=" px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                <Link
                  to=""
                  className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                  role="menuitem"
                >
                  <Help />{" "}
                  <p className="   text-[1rem] font-normal capitalize leading-[16px] tracking-[0.025rem] text-black">
                    Help
                  </p>
                </Link>
              </div>
              <div className=" mb-[3rem] px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#EEEEEE]  ">
                <Link
                  to=""
                  className=" flex items-center gap-3 px-4 py-2 text-gray-700 "
                  role="menuitem"
                >
                  <Logout />{" "}
                  <p className="  text-[1rem] font-normal  capitalize leading-[16px] tracking-[0.025rem] text-black">
                    Log Out
                  </p>
                </Link>
              </div>
            </div>
            <ul>
              <li className=" mt-[5rem]"></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
