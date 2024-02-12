import React from "react";
import Image from "next/image";

import card1 from "../assets/1-zodiac.png";
import card2 from "../assets/2-zodiac.png";
import card3 from "../assets/3-zodiac.png";
import card4 from "../assets/4-zodiac.png";
import card5 from "../assets/5-zodiac.png";
import card6 from "../assets/6-zodiac.png";
import card7 from "../assets/7-zodiac.png";
import card8 from "../assets/8-zodiac.png";
import card9 from "../assets/9-zodiac.png";
import card10 from "../assets/10-zodiac.png";
import card11 from "../assets/11-zodiac.png";
import card12 from "../assets/12-zodiac.png";


function StarSign({ setZodiacSigns, zodiacSignsValue }) {
  const zodiacSigns = [
    { sign: "Capricorn", icon: card11 },
    { sign: "Aquarius", icon: card1 },
    { sign: "Pisces", icon: card4 },
    { sign: "Aries", icon: card5 },
    { sign: "Taurus", icon: card10 },
    { sign: "Gemini", icon: card9 },
    { sign: "Cancer", icon: card2 },
    { sign: "Leo", icon: card7 },
    { sign: "Virgo", icon: card8 },
    { sign: "Libra", icon: card3 },
    { sign: "Scorpio", icon: card12 },
    { sign: "Sagittarius", icon: card6 },
  ];

  const handleSelect = (value) => {
    // Check if the value is already in the array
    if (zodiacSignsValue.find((x) => x.sign === value.sign)) {
      // If it is, remove it
      setZodiacSigns(
        zodiacSignsValue.filter((item) => item.sign !== value.sign)
      );
    } else {
      // If it's not, add it to the array
      if (zodiacSignsValue.length < 3) {
        setZodiacSigns([...zodiacSignsValue, value] );
      }


    }
  };
  return (
    <div className="grid grid-cols-3 gap-10  justify-center items-center mt-[30px]">
      {zodiacSigns.map((val, index) => (
        <div
          key={index}
          className={`bg-[#FBFBFB] h-[100px] py-[20px] flex flex-col justify-between border border-lightgray rounded-[10px] ${
            zodiacSignsValue.find((x) => x.sign === val.sign)
              ? "border border-[#B14AD0] border-width rounded-[10px] bg-[#FBF6FD]"
              : "none"
          }`}
          onClick={() => handleSelect(val)}
        >
          <div className="my-5 text-center center-img">
             <Image alt="Avatar" src={val.icon} width="40" height="40" />
              </div>

          <p className="text-center text-Black font-popins  text-[14px]">
            {val.sign}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StarSign;
