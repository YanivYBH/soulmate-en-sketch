import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
import Image from "next/image";

const data = [
  {
    question: "Wie schnell kann ich meine Skizze und meinen Text erhalten?",

    description:
      "Ihre handgezeichnete Skizze und Beschreibung wird Ihnen innerhalb von 24 Stunden per E-Mail zugestellt. In einigen seltenen Fällen, wenn die Nachfrage hoch ist, kann es bis zu 48 Stunden dauern. ",
  },
  {
    question: "Was ist alles inbegriffen?",

    description:
      "Zusätzlich zu der Skizze Ihres Seelenverwandten erhalten Sie eine vollständige Beschreibung der Eigenschaften und Qualitäten dieser Person, die Ihnen helfen werden, sich zum richtigen Zeitpunkt mit dieser Person zu verbinden.",
  },

  {
    question: "Erkenne ich meinen Seelenverwandten?",

    description:
      "Viele Menschen haben festgestellt, dass ihre Skizze jemandem ähnelt, der ihnen derzeit nahe steht, ihrem derzeitigen Lebensgefährten oder Partner oder jemandem, den sie bewundern oder für den sie Gefühle empfinden",
  },
  {
    question: "Was ist, wenn ich beim Kauf die falsche E-Mail-Adresse verwendet habe?",

    description:
      "Kein Problem, schicken Sie mir einfach eine E-Mail an cosmicharm@ybhltd.com mit Ihrer neuen E-Mail-Adresse und ich sorge dafür, dass Sie sie erhalten.",
  },
  {
    question: "Haben Sie eine Garantie?",

    description:
      "Auf jeden Fall! Wenn Sie mit der Qualität meiner Arbeit oder aus anderen Gründen nicht zufrieden sind, senden Sie mir einfach eine E-Mail.",
  },
];
function Faq() {
  const [isOpen, setIsOpen] = useState("");
  const [arrowRotation, setArrowRotation] = useState(false);
  console.log(arrowRotation, "arr");

  return (
    <>
      <p className="text-[24px] md:text-md1 2xl:text-[16px] font-popins  text-center font-semibold text-red mx-auto mt-50">
      EINIGE DER AM HÄUFIGSTEN GESTELLTEN FRAGEN
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
