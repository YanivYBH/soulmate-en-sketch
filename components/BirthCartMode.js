import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import MiddleScreen from "./MiddleScreen";
import world from "../assets/birthchart-img.png";

function BirthCartMode({ setbirthdayCardMode, birthdayCard }) {
  const router = useRouter();
  const [open, setOpen] = useState(false)

  var birthdayCardMode = [
    { status: "Yes, I have", icon: <FaCheck style={{ color: "#65D283" }} /> },
    {
      status: "NO, i haven't",
      icon: <MdCancel style={{ color: "#FF7C75" }} />,
    },
  ];

  //   useEffect(() => {
  //     if (birthdayCard) {
  //       router.push("/survey/9");
  //     }
  //   }, [birthdayCard]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-10   justify-center items-center my-[15px]">
        {birthdayCardMode.map((val, index) => (
          <div
            key={index}
            className={`bg-[#FBFBFB] h-[120px] py-[20px] flex flex-col justify-between  rounded-[10px] ${
              birthdayCard === val.status
                ? "border border-[#B14AD0] rounded-[10px] border-width"
                : "none"
            }`}
            onClick={() => {
              setbirthdayCardMode(val.status);
              setOpen(true)
              // router.push("/survey/9");
            }}
          >
            <div className="my-5  mx-auto text-[40px]">{val.icon}</div>

            <p className="text-center   text-[14px]">{val.status}</p>
          </div>
        ))}
      </div>

     

      {open && <MiddleScreen
        heading={"Unlock Mysteries with Your Birth Chart!"}
        title={
          "Dive into a thrilling journey of self-discovery! Let our expert astrologers reveal secrets about your life's purpose, hidden talents, and exciting future possibilities. Get ready for transformative insights!"
        }
        nextHandler={()=>router.push("/survey/9")}
        picture={world}
      />
}
    </div>
  );
}

export default BirthCartMode;
