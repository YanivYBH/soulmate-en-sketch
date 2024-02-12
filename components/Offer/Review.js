import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import comma from "../../assets/comma.svg";
import r1 from "../../assets/r1.webp";
import r2 from "../../assets/r2.webp";
import r3 from "../../assets/r3.webp";
import r4 from "../../assets/r4.webp";
import r5 from "../../assets/TRP.png";


import Image from "next/image";

export default function Review() {
  return (
    <div>
      
    <div className="grid grid-cols-1 md:grid-cols-1  mx-5 md:mx-10  rounded-xl  mt-40  ">
      <div className="center1 mb-[20px]">
      <Image  src={r5} width={190} height={48}/>
      </div>
      
      
      <>
        <div className=" md:col-span-1  p-20 rounded-2xl md:my-0 my-10 md:mx-5  borders-rev">
          <div className="flex items-center justify-between p-20 ">
            <div className="flex items-center">
              <div className="ml-[-20px]">
                <Image src={r3} className="w-40 h-40" />
              </div>

              <div className="mx-20">
                <p className="text-xs text-Black1 font-popins">Olivia.F</p>

                <p className="text-[12px] text-darkgray font-popins">
                  08/13/2023
                </p>
              </div>
            </div>
            <div className="flex bg-bggray items-center px-10 margin-15 py-5 rounded-lg">
              <LiaStarSolid className="text-Gold mr-[4px] " fill="#6758b0"/>
              <p className="font-bold font-popins">5.0</p>
            </div>
          </div>

          <div className="flex justify-start items-start">
            <p className=" mb-5 text-[12px] font-popins">
              It has been a game-changer! I&apos;ve gained a deep understanding of
              men&apos;s psychology and how to emotionally attract the man I desire.
              Thanks to Flirting Techniques I received, I became magnetic to men
            </p>
          </div>
          <div className="flex items-center justify-between p-20 ">
            <div className="flex items-center">
              <div className="ml-[-20px]">
                <Image src={r4} alt="" className="w-40 h-40" />
              </div>

              <div className="mx-20">
                <p className="text-xs text-Black1 font-popins">Mia.L</p>

                <p className="text-[12px] text-darkgray font-popins">
                  10/04/2023
                </p>
              </div>
            </div>

            <div className="flex bg-bggray items-center px-10 margin-15 py-5 rounded-lg">
              <LiaStarSolid className="text-Gold mr-[4px] "  fill="#6758b0" />
              <p className="font-bold font-popins">5.0</p>
            </div>
          </div>

          <div className="flex justify-start items-start">
            <p className=" mb-5 font-popins  text-[12px]">
              I was skeptical at first, but I must confess that the ultimate
              support I received really transformed my love life.
            </p>
          </div>

          <div className="flex items-center justify-between p-20 ">
            <div className="flex items-center">
              <div className="ml-[-20px]">
                <Image src={r1} alt="" className="w-40 h-40" />
              </div>

              <div className="mx-20">
                <p className="text-xs text-Black1 font-popins">Lily.P</p>

                <p className="text-[12px] text-darkgray font-popins">
                  05/19/2023
                </p>
              </div>
            </div>
            <div className="flex bg-bggray items-center px-10 margin-15  py-5 rounded-lg">
              <LiaStarSolid className="text-Gold mr-[4px] " fill="#6758b0" />
              <p className="font-bold font-popins">5.0</p>
            </div>
          </div>
          <div className="flex justify-start items-start">
            <p className=" mb-5  text-[12px] font-popins">
              I can&apos;t be any more thankful for their service
            </p>
          </div>
          
        </div>
        
      </>
      
    </div>
    
    </div>
  );
}
