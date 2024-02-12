import React from "react";
import Image from "next/image";

export default function Card(props) {
  return (
    <div className=" md:col-span-1 bg-grey-card p-20 rounded-xl md:my-0 my-10 mx-8 md:mx-5 center1">
      <Image  alt ="" src={props.Image} />{" "}
      <p className="text-sm mt-12 font-semibold  mb-8"> {props.title}</p>
      <p className="text-xm"> {props.desc}</p>
    </div>
  );
}
