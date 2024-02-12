import React from "react";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function StepOne({ data, goal, handleTroubleSelect }) {
  return (
    <Fade>
      {data.map((x, i) => (
        <div
          key={i}
          className={`flex items-center mt-15 px-15 py-25 justify-between border-Border ${
            goal == x.value ? "border-brown" : ""
          } hover:border-brown rounded-2xl border-2`}
          onClick={() => handleTroubleSelect(x.value)}
        >
          <div className="flex items-center">
            <div className="relative w-[24px] h-[24px]">
              <Image
                src={x.img}
                layout="fill"
                objectFit="contain"
                alt=""
                className=""
              />
            </div>
            <p className="mx-10 text-xs grid-display ">{x.label}<span class="text-xs fn-10">{x.describe}</span></p>
          </div>
          <div
            className={`rounded-full border-2 w-25 h-25 ${
              goal === x.value ? "bg-brown" : ""
            }`}
          >
            {/* <input
              type="checkbox"
              onChange={() => handleCheckboxChange(x.value, i)}
              className="form-checkbox border-transparent focus:ring-0 w-full h-full text-blue-600"
            /> */}
          </div>
        </div>
      ))}
    </Fade>
  );
}

export default StepOne;
