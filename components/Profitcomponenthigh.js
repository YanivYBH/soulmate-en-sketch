import React from "react";
import Image from "next/image";

export default function Profitcomponenthigh(props) {
  return (
    <div className="grid grid-cols-1  bg-bggray rounded-lg my-10">
      <div className="flex items-center p-10">
        <Image src={props.img} alt=""  width="40"/>

        <div className="ml-20">
          <p className=" text-left font-popins text-graylight font-semibold text-sm1 ">
            {props.title}
          </p>
          <p className="text-Black1 font-popins text-left font-bold text-[15px] ">
          Level: <span className="greentext font-popins text-left font-bold text-[15px] ">High (92%)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
