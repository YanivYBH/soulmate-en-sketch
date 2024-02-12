import React, { useEffect, useState, useRef } from "react";
import { LiaStarSolid } from "react-icons/lia";

import { useRouter } from "next/router";
import comma from "../assets/comma.svg";

import Image from "next/image";
import world from "../assets/astrology-8.png";
import { BsFillPersonVcardFill } from "react-icons/bs";

import MiddleScreen from "./MiddleScreen";


function Personality({ personality, setPersonality }) {
  const [open, setOpen] = useState(false)
  const [months, setInput1] = useState('');
  const [days, setInput2] = useState('');
  const [years, setInput3] = useState('');
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const handleInput1Change = (e) => {
    const value = e.target.value;
    setInput1(value);
    if (value.length === 2) {
        input2Ref.current.focus();
    }
};

const handleInput2Change = (e) => {
  const value = e.target.value;
  setInput2(value);
  if (value.length === 2) {
      input3Ref.current.focus();
  }
};
const handleInput3Change = (e) => {
  setInput3(e.target.value);
  // Add similar logic if there's a next input to focus
};
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center mt-15 px-15 py-25 justify-start border-Border  hover:border-brown rounded-2xl border-2 w-full">
              <div className="flex items-center">
                <BsFillPersonVcardFill className="text-brown" size={24} />

                <p className="mx-10 text-sm0 "></p>
              </div>

              <input
                type="number"
                pattern="[0-9]*"
                className="border focus:outline-none border-none font-medium w-full"
                placeholder="Month"
                maxLength={3}
                required                
                onChange={handleInput1Change}
                value={months}
              />
               <input
                type="number"
                pattern="[0-9]*"
                className="border focus:outline-none border-none font-medium w-full"
                placeholder="Day"
                maxLength={3}
                required
                ref={input2Ref}
                onChange={handleInput2Change}
                value={days}
              />
               <input
                type="number"
                pattern="[0-9]*"
                className="border focus:outline-none border-none font-medium w-full"
                placeholder="Year"
                required
                ref={input3Ref}
                maxLength={5}
                onChange={handleInput3Change}
                value={years}
              />
            </div>
            

            <button
            
              disabled={
                years == "" || months == "" || days == "" || years.length >= 5 || years.length <= 3 || months.length >= 3 || days.length >= 3 
              }
              type="submit"
              className=" w-[100%] md:w-[100%] top-[87%] text-white font-semibold bg-brown disabled:bg-white disabled:text-brown mt-20 py-25 px-20 justify-between border-Border hover:border-brown rounded-2xl border-2"
              onClick={() => {
                setOpen(true)
                } }
            >
              Next
            </button>
            <div className="border-2 md:mx-[0px] border-grayborder bg-white rounded-2xl px-10 md:mt-0 mt-30 py-5 paddings-c">
              <div className="flex items-center justify-between p-20 ">
                <div className="flex items-center">
                  <div className="ml-[-20px]">
                    <span className="border-2 rounded-full p-5 h-5 bg-lGray">
                      RC
                    </span>
                  </div>

                  <div className="mx-20">
                    <p className="text-xs text-brown">Roy.C</p>

                    <p className="text-[12px]">10/28/2021</p>
                  </div>
                </div>

                <div className="flex margin-15px">
                  <LiaStarSolid className="text-Gold" />
                  <LiaStarSolid className="text-Gold" />
                  <LiaStarSolid className="text-Gold" />
                  <LiaStarSolid className="text-Gold" />
                  <LiaStarSolid className="text-Gold" />
                </div>
              </div>

              <div className="flex justify-start items-start">
                <Image alt="" src={comma} />

                <p className="ml-10 mb-5 italic font-size16">
                  Money has always been a stressor for me, but after getting my
                  personal guidance, I have made smarter decisions and seen a
                  significant improvement in my finances. This is a
                  game-changer!
                </p>
              </div>
            </div>


      {open && <MiddleScreen
        heading={"Birth chart is not fortune telling."}
        title={
          "It is an aid for us to interpret astrology scientifically. It can only be created and interpreted by experienced and certified people."
        }
        nextHandler={()=>router.push("/survey/11")}
        picture={world}
      />
}
    </div>
  );
}

export default Personality;
