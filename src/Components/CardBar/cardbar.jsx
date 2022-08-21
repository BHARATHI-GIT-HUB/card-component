import React, { useState } from "react";
import Bulb from "../../Assets/Icons/Bulb";
import Quit from "../../Assets/Icons/Quit";

export default function Cardbar() {
  const [active, setActive] = useState(false);
  const handleQuit = () => {
    setActive(!active);
  };
  return (
    <div>
      {active ? (
        <p></p>
      ) : (
        <div className="  bg-SecondaryWhite  md:w-[45rem] gap-2  py-[14px] px-[12px] rounded-2xl capitalize flex justify-between items-center">
          <span className="flex justify-center items-center gap-4">
            <Bulb />
            <p className=" font-normal text-[1rem]">
              Looking to hire?
              <span className="text-[1rem] font-bold leading-3 ">
                Switch to your Client profile.
              </span>
            </p>
          </span>
          <span>
            <button onClick={handleQuit}>
              <Quit />
            </button>
          </span>
        </div>
      )}
    </div>
  );
}
