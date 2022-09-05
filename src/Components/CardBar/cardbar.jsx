import React, { useState } from "react";
import Bulb from "../../Assets/Icons/Bulb";
import Quit from "../../Assets/Icons/Quit";

export default function Cardbar() {
  const [active, setActive] = useState(false);
  const handleQuit = () => {
    setActive(!active);
  };
  return (
    <div className="">
      {active ? (
        ""
      ) : (
        <div className="flex items-center  justify-between gap-2 rounded-2xl bg-SecondaryWhite px-[6px] py-[8px] capitalize  md:py-[14px] md:px-[12px]">
          <span className="flex items-center justify-center gap-4">
            <Bulb />
            <p className=" text-[1rem] font-normal">
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
