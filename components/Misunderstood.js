import React from "react";
import { useRouter } from "next/router";

function Misunderstood({misunderstood, setMisunderstood}) {
  const router = useRouter();

  var MisunderstoodSection = [
    { status: "Very often" },
    { status: "Sometimes" },
    { status: "Rarely" },
    { status: "Never" },
  ];
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 gap-10  justify-center items-center my-[15px]">
        {MisunderstoodSection.map((val, index) => (
          <div
            key={index}
            className={`py-[20px] flex flex-col justify-between border border-lightgray rounded-[10px]  ${
                misunderstood === val.status
                ? "border border-[#B14AD0] border-width bg-[#FBF6FD] rounded-[10px]"
                : "none"
            }`}
            onClick={() => {
                setMisunderstood(val.status);
              router.push("/survey/14");
            }}
          >
            <p className="text-center   text-[14px]">{val.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Misunderstood;
