import React from "react";

export default function Card1(props) {
  return (
    <div className=" col-span-1 md:col-span-1 bg-white md:px-10 md:py-10 p-5 rounded-md md:rounded-lg md:my-10  my-8 mx-8 md:mx-8">
      <div className="flex items-center flex-wrap  ">
        <p className="  text-[24px] md:text-md mt-12 font-extrabold leading-[33px] text-darkp mr-5">
          {" "}
          {props.title}{" "}
        </p>
        <p className=" text-[14px] text-xs md:text-xm mt-12 font-medium    text-darkp">
          {props.subtitle}
        </p>
      </div>
      <p className="text-xm leading-150  md:text-left  "> {props.desc}</p>
    </div>
  );
}
