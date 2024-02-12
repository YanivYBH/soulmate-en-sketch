import React, { useEffect } from "react";
import { useRouter } from "next/router";

function RelationshipStatus({ RelationShip, setRelationShip }) {
  console.log(setRelationShip)
    const router = useRouter();
  var relationshipStatuses = [
    { status: "Married", icon: "💍" },
    { status: "Engaged", icon: "💑" },
    { status: "In a relationship", icon: "❤️" },
    { status: "Complicated", icon: "🔄" },
    { status: "Single", icon: "🙍" },
    { status: "Divorced", icon: "💔" },
  ];

//   useEffect(() => {
//     if(RelationShip){
//         router.push("/survey/8")
//     }

//   },[RelationShip])



  return (
    <div>
      <div className="grid grid-cols-2 gap-10   justify-center items-center">
        {relationshipStatuses.map((val, index) => (
          <div
            key={index}
            className={`bg-[#FBFBFB] h-[100px] py-[10px] flex flex-col justify-between border border-lightgray rounded-[10px]  ${RelationShip === val.status ? " border-width border border-[#B14AD0]" : "none"}`}
            onClick={() => {setRelationShip(val.status)
                router.push("/survey/8")} }
          >
            <div className="my-5 text-[24px] font-normal text-center">
              <i className="font-normal"> {val.icon} </i>
            </div>

            <p
              className="text-center text-Black font-popins  text-[14px] font-normal"
              
            >
              {val.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelationshipStatus;
