import React from "react";
import tick from "../../assets/tick.png";
import Image from "next/image";

export default function Money() {
  return (
    <div className="bg-darkBrown  px-20 relative">
      <div className="border-2 border-lightPurple rounded-2xl p-20 ">
        <p className="text-center text-[#ffffff] font-bold text-[20px]">
          Our Money-Back Guarantee
        </p>
        <p className="text-center text-[#ffffff] text-[14px]">
          We are so confident in our services that we offer a full refund within
          30 days of purchase if you do not achieve results. Learn more about
          all the conditions in our
          <span className="underline"> Subscription term </span>
        </p>
      </div>
      <div>
        <Image
          src={tick}
          alt=""
          className="absolute bottom-[20px] right-[20px] w-[60px] h-[60px]"
        />
      </div>
      <br />

      <br />
    </div>
  );
}
