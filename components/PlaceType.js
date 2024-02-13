import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import weather from "../assets/Travelling.png";
import fire from "../assets/metropolis.png";
import Water from "../assets/seaside.png";
import Earth from "../assets/Isolated.png";
import Image from "next/image";

function PlaceType({ setPlaceType, placeType }) {
  const router = useRouter();

  var PlaceTypeStatus = [
    {
      status: "Metropolis",
      pic: <Image src={fire} width={120} height={120} alt="Fire Image" />,
    },
    {
      status: "Seaside town",
      pic: <Image src={Water} width={120} height={120} alt="Fire Image" />,
    },
    {
      status: "Isolated",
      pic: <Image src={Earth} width={120} height={120} alt="Fire Image" />,
    },
    {
      status: "Travelling all the time",
      pic: <Image src={weather} width={120} height={120} alt="Fire Image" />,
    },
  ];

  

  return (
    <div>
      <div className="grid grid-cols-2 gap-10 justify-center items-start my-[25px]">
        {PlaceTypeStatus.map((val, index) => (
          <div
            key={index}
            className={`py-[5px] flex flex-col my-5 justify-between rounded-[10px] ${
                placeType === val.status
                ? "border border-[#B14AD0] border-width rounded-[10px]"
                : "none"
            }`}
            onClick={() => {
                setPlaceType(val.status);
              router.push("/survey/5")
            }}
          >
            <div className="  mx-auto text-[40px]">{val.pic}</div>

            <p className="text-center pt-[10px]  text-[14px]">{val.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaceType;
