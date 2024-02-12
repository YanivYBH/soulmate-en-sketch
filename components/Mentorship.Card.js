import React from "react";
import Image from "next/image";

export default function MentorshipCard(props) {
  return (
    <div className="flex bg-bggray opacity-100 p-10 rounded-xl my-20">
      <div className="relative w-[60px] h-[60px] mx-5">
        <Image src={props.img1} alt="" objectFit="contain" layout="fill" />
      </div>
      <div className="mx-5">
        <p className="text-xm font-bold font-popins">{props.title}</p>
        <div className="flex">
          <Image src={props.degree} alt="" />

          <p className=" text-[11px] ml-[2px] font-popins">{props.desc}</p>
        </div>
        <div className="flex ">
          <Image src={props.badge} alt="" />
          <p
            className="text-Black1 font-semibold text-[11px] ml-[2px] font-popins
    "
          >
            {props.cert}
          </p>
        </div>
      </div>
    </div>
  );
}
