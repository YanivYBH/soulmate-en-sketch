import React from "react";
import { useRouter } from "next/router";

function Challenges({setChallenges, challenges}) {
  const router = useRouter();

  var ChallengesSection = [
    { status: "Finalcial issues" },
    { status: "Carrer" },
    { status: "Love" },
    { status: "Health" },
    { status: "Family life" },
    { status: "Friendships" },
  ];
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 gap-10 justify-center items-center my-[15px]">
        {ChallengesSection.map((val, index) => (
          <div
            key={index}
            className={`py-[20px] flex flex-col justify-between border border-lightgray rounded-[10px]  ${
                challenges === val.status
                ? "border border-[#B14AD0] bg-[#FBF6FD] rounded-[10px] border-width"
                : "none"
            }`}
            onClick={() => {
                setChallenges(val.status);
              router.push("/survey/17");
            }}
          >
            <p className="text-center   text-[14px]">{val.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Challenges;
