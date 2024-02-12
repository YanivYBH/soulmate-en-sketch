import React from "react";
import Image from "next/image";
import button from "../assets/btn.svg"
import {GoStarFill} from "react-icons/go"
import { useRouter } from "next/router";

export default function Button(props) {
  const router = useRouter();
  return (
<div className="fixed right-[10px] bottom-[10px] zindex99 ">
    <div className="flex justify-around items-center text-white bg-darkPurple py-10 px-15 rounded-2xl ">
   <button  onClick={() => router.push("/survey/1")} className="text-white text-[14px] mx-[3px]"> ENTDECKEN SIE IHREN SEELENVERWANDTEN ⭐</button>

    </div>
    </div>
  );
}
