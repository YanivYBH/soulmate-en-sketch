import React from "react";

export default function Stepcard(props) {
  return (
    <div className=" bg-bggray opacity-100  mx-5 md:mx-0	 overflow-hidden  p-20 rounded-lg my-5 relative ">
      <p className="text-xm00 font-bold font-popins">{props.title}</p>
      <p className="text-[13px] font-popins">
      {props.desc}
      </p>
      <div className="absolute top-[5px] right-[-5px] ">
        <span className="bg-lightPurple text-white font-bold p-10  rounded-lg font-popins">{props.num}</span>
        </div>

     
    </div>
  );
}
