import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
import Image from "next/image";

const data = [
  {
    question: "How Will I Receive My Soulmate Sketch & Reading?",

    description:
      "I will send you an email with attached your personal soulmamte sketch and reading in PDF format with the subject: “Your Reading is Ready”",
  },
  {
    question: "When Will I Receive My Soulmate Sketch & Reading?",

    description:
      "The portrait & reading will be delivered to you within 48 hours from the purchase. I accept a limited number of readings each day to make sure all my efforts are put in each client situation.",
  },

  {
    question: "Can I Purchase The Soulmate Sketch & Reading On Behalf Of Someone Else?",

    description:
      "Yes, just fill the form with all the relevant details of the person.",
  },
  {
    question: "What If I Still Have Question After My Reading?",

    description:
      "I’m here for you. If you need additional advice & guidance after my reading feel free to reply to my email with any question you have! E-Mail an cosmicharm@ybhltd.com",
  },
  {
    question: "Are Your Readings Accurate And Detailed?",

    description:
      "Yes, I give all myself in all readings and I am as clear as possible. Expect the reading to be around 20-30 paragraphs long.",
  },
];
function Faq() {
  const [isOpen, setIsOpen] = useState("");
  const [arrowRotation, setArrowRotation] = useState(false);
  console.log(arrowRotation, "arr");

  return (
    <>
      <p className="text-[24px] md:text-md1 2xl:text-[16px] font-popins  text-center font-semibold text-red mx-auto mt-50">
     FAQ
      </p>

      <div className="relative w-full   md:mx-0 ">
        <div className="relative w-full max-w-[800px]  mx-auto flex flex-col gap-[10px] text-Black1">
          {data.map((x, i) => (
            <div
              key={i}
              className=" mt-10 rounded-xl p-20 cursor-pointer bg-bggray md:mx-0 mx-5 "
              onClick={() => {
                if (isOpen == i) {
                  setIsOpen(null);
                } else {
                  setIsOpen(i);
                }
              }}
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold w-full text-[14px] max-w-[290px] font-popins">
                  {x.question}
                </p>
                <button
                  onClick={() => {
                    setArrowRotation(isOpen === i ? false : true);
                    setIsOpen(isOpen === i ? null : i);
                  }}
                  className="w-20 h-20 relative"
                >
                  <Image
                    src={arrow}
                    alt=""
                    layout="fill"
                    className={`transition-transform ${
                      isOpen === i && arrowRotation ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={` ${
                  isOpen == i ? "h-auto" : "h-[0px]"
                } overflow-hidden  transition-all duration-500`}
              >
                <div className="clickblock pr-5 py-5 rounded-lg text-Black1 w-full text-xs0  md:text-[14px] 2xl:text-xs">
                  <p className="font-popins text-Black1">{x.description}</p>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </>
  );
}

export default Faq;
