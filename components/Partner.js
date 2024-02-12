import React from "react";
import { useRouter } from "next/router";

function Partner({partner, setPartner}) {
  const router = useRouter();

  var MisunderstoodSection = [
    { status: "Physical intimacy" },
    { status: "Approval statements" },
    { status: "Buying a gift" },
    { status: "Quality time" },
    { status: "Affectional behaviours" },
  ];
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 gap-10 justify-center items-center my-[15px]">
        {MisunderstoodSection.map((val, index) => (
          <div
            key={index}
            className={`py-[20px] flex flex-col justify-between border border-lightgray rounded-[10px]  ${
                partner === val.status
                ? "border border-[#B14AD0] border-width bg-[#FBF6FD] rounded-[10px]"
                : "none"
            }`}
            onClick={() => {
                setPartner(val.status);
              router.push("/survey/15");
            }}
          >
            <p className="text-center   text-[14px]">{val.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partner;
