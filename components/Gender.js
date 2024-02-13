import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import male from "../assets/male.png";
import female from "../assets/female.png";
import LGBTI from "../assets/LGBTI.png";
import X from "../assets/X.png";
import Image from "next/image";


function Gender({ Gender, setGender }) {
  console.log(setGender)
  const router = useRouter();
  var Genders = [
    { status: "Female", icon: female },
    { status: "Male", icon: male },
    { status: "Don't Want to specify", icon: X },
    { status: "LGBTI", icon: LGBTI },
  ];



  return (
    <div>
      <div className="grid grid-cols-2 gap-10   justify-center items-center">
        {Genders.map((val, index) => (
          <div
            key={index}
            className={`bg-[#FBFBFB] h-[100px] py-[10px] flex flex-col justify-between border border-lightgray rounded-[10px]  ${Gender === val.status ? " border-width border border-[#B14AD0]" : "none"}`}
            onClick={() => {
                setGender(val.status)
                router.push("/survey/2")
                } }
          >
            <div className="my-5 h-[25px] text-[34px] font-normal center-img">
            <Image height={50} width={50} alt ="" src={val.icon} />{" "}
            </div>

            <p
              className="text-center text-Black font-popins  text-[14px] font-normal"
              
            >
              {val.status}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Gender;
