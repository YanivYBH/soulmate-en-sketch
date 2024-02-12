import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import weather from "../assets/weather.png";
import fire from "../assets/fire.png";
import Water from "../assets/water.png";
import Earth from "../assets/garden.png";
import Image from "next/image";
import world from "../assets/elements.png";
import MiddleScreen from "./MiddleScreen";


function Personality({ personality, setPersonality }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  var birthdayCardMode = [
    {
      status: "Fire",
      pic: <Image src={fire} width={120} height={120} alt="Fire Image" />,
    },
    {
      status: "Water",
      pic: <Image src={Water} width={120} height={120} alt="Fire Image" />,
    },
    {
      status: "Earth",
      pic: <Image src={Earth} width={120} height={120} alt="Fire Image" />,
    },
    {
      status: "Air",
      pic: <Image src={weather} width={120} height={120} alt="Fire Image" />,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-10 justify-center items-center my-[15px]">
        {birthdayCardMode.map((val, index) => (
          <div
            key={index}
            className={`py-[5px] flex flex-col justify-between ${
              personality === val.status
                ? "border border-[#B14AD0]  border-width rounded-[10px]"
                : "none"
            }`}
            onClick={() => {
              setPersonality(val.status);
              setOpen(true)
            }}
          >
            <div className="  mx-auto text-[40px]">{val.pic}</div>

            <p className="text-center pt-[10px]  text-[14px]">{val.status}</p>
          </div>
        ))}
      </div>
      

      {open && <MiddleScreen
        heading={personality}
        title={""}
        nextHandler={()=>router.push("/survey/11")}
        picture={world}
      />
}
    </div>
  );
}

export default Personality;
