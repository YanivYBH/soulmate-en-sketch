import React from "react";
import Image from "next/image";
import { AiOutlineMessage } from "react-icons/ai";
import { TbReportMedical } from "react-icons/tb";

import { AiTwotoneBulb } from "react-icons/ai";

import { BsSuitHeartFill } from "react-icons/bs";
import Card1 from "../Card1";
import { useRouter } from "next/router";

export default function HappyLife({}) {
  const router = useRouter();

  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-2  bg-Gray px-5 md:px-0   md:rounded-xl mx-10 md:mx-60 lg:px-80 px-10  py-25 md:py-40 ">
        <div className="  col-span-2 md:col-span-2 md:ml-0 lg:-ml-40">
          <p className=" text-[22px] md:mt-0 mt-10 md:px-0 px-10 md:text-md1 mb-20 font-semibold">
            Step into a happier life and relationship with millions of others
            already benefiting from Nebula
          </p>
        </div>
        <Card1
          component={
            <AiOutlineMessage className="text-Purple text-lg line-height-21" />
          }
          title="20"
          subtitle="million"
          desc="happy users
        "
        />
        <Card1
          component={
            <TbReportMedical className="text-Purple text-lg line-height-21" />
          }
          title="93%"
          subtitle="accuracy"
          desc="rated by real users

        "
        />

        <Card1
          component={
            <AiTwotoneBulb className="text-Purple text-lg line-height-21" />
          }
          title="4.7/5
        "
          subtitle="Stars"
          desc="satisfaction score
        "
        />

        <Card1
          component={
            <BsSuitHeartFill className="text-Purple text-lg line-height-21" />
          }
          title="300+"
          subtitle="Advisors"
          desc="rigorously tested
        "
        />

        <div className="col-span-2 flex justify-center">
          <button
            onClick={() => router.push("/survey/1")}
            className="gradient-custom my-20  w-[90%] md:w-[333px] text-center text-sm text-white py-10 px-20 rounded-xl "
          >
            Try now
          </button>
        </div>
      </div>
    </div>
  );
}
