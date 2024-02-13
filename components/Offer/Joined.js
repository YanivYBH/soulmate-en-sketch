import React from "react";
import Image from "next/image";
import women from "../../assets/reveal.png";

import { Inter } from "next/font/google";

export default function Joined() {
  const birthday = new Date();
  var day1 = birthday.getDay() +1 * 117;

  return (
    <div>
    <div className="p-20 border-2 border-lightPurple rounded-2xl h-[100px] relative mt-[35px]">
      <p className="text-[18px] font-bold  font-popins">
Reveal your 
        <span className="font-bold text-lightPurple font-popins mr-[2px] ">
          <br></br>  soulmate 
        </span>
       <br className=" hidden md:block" /> 
      </p>

      <div className="absolute top-[-20px] right-[0px]">
        <Image src={women} alt="" width={130} />
      </div>
      
    </div>
    
    
    </div>
  );
}
