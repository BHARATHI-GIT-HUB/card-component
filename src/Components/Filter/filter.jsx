import { React, useState } from "react";
import { Link } from "react-router-dom";
import DownArrow from "../../Assets/Icons/DownArrow";
export default function Filter() {
  const [Role, setRole] = useState(false);
  const [Type, setType] = useState(false);
  const handleClickRole = ({ Filter }) => {
    setRole(!Role);
  };
  const handleClickType = () => {
    setType(!Type);
  };
  return (
    <div className=" flex max-h-min w-[16.3rem]  flex-col items-start justify-center gap-6 rounded-lg bg-transparent bg-white p-3 px-4 transition-all duration-150 ">
      <div className=" flex w-full items-center justify-between">
        <h1 className=" font-semibold">Filter(0)</h1>
        <div className="  !border-b-transprent flex rounded-sm border-[3px] border-solid  border-transparent text-[1rem] font-semibold leading-[1.5] text-gray-400   ">
          <Link
            to="/"
            className=" top-[.18rem] after:block after:h-[2.5px] after:w-0 after:bg-yellow-300 after:transition-width  hover:after:w-[5.8rem] hover:after:duration-300  "
          >
            Clear Filters
          </Link>
        </div>
      </div>
      <div
        onClick={handleClickRole}
        className="  flex w-full items-center justify-between"
      >
        <h1 className=" font-semibold">Role</h1>
        <span>
          {Role ? (
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
      </div>

      {Role ? (
        <div className="flex flex-col items-start justify-start gap-4">
          <div className=" flex gap-2">
            <input type="checkbox" />
            <p className="text-[1rem] font-normal leading-[1.5] tracking-[0.4px]">
              Design
            </p>
          </div>
          <div className=" flex gap-2">
            <input type="checkbox" />
            <p className=" text-[1rem] font-normal leading-[1.5] tracking-[0.4px]">
              Engineering
            </p>
          </div>
          <div className=" flex gap-2">
            <input type="checkbox" />
            <p className=" text-[1rem] font-normal leading-[1.5] tracking-[0.4px]">
              Social Media / Marketing
            </p>
          </div>
          <div className=" flex gap-2">
            <input type="checkbox" />
            <p className=" text-[1rem] font-normal leading-[1.5] tracking-[0.4px]">
              Video & Animation
            </p>
          </div>
          <div className=" flex gap-2">
            <input type="checkbox" />
            <p className=" text-[1rem] font-normal leading-[1.5] tracking-[0.4px]">
              Web 3
            </p>
          </div>
          <div className=" flex gap-2">
            <input type="checkbox" />
            <p className=" text-[1rem] font-normal leading-[1.5] tracking-[0.4px]">
              Writing
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className=" flex w-full items-center justify-between">
        <h1 className=" font-semibold">Type</h1>
        <span onClick={handleClickType}>
          {Type ? (
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
      </div>
      {Type ? (
        <div className="flex flex-col items-start justify-start gap-4">
          <div className=" flex gap-2">
            <input type="checkbox" />
            <p className=" text-[1rem] font-normal leading-[1.5] tracking-[0.4px]">
              Matched Opportunity
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
