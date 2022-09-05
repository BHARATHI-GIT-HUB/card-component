import React from "react";

export default function Filter({ name }) {
  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        role="img"
        className=" h-[45px] w-[45px] rounded-full  p-2"
      >
        <path
          d="M22 6H2V4.5h20V6zM19 12.75H5v-1.5h14v1.5zM8 19.5h8V18H8v1.5z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
}
