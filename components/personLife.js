import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MiddleScreen from "./MiddleScreen1";
import world from "../assets/card.png";


function PersonalLife({ setPersonLife, personLife }) {
    const router = useRouter();
  const [open, setOpen] = useState(false)

  var personalLife = [
    { status: "Financial issues", icon: "💵" },
    { status: "Career", icon: "💼" },
    { status: "Love", icon: "❤️" },
    { status: "Health", icon: "🌿" },
    { status: "Family Life", icon: "👪" },
    { status: "Friendships", icon: "💔" },
  ];

//   useEffect(() => {
//     if(personLife){
//         router.push("/survey/10")
//     }

//   },[personLife])



  return (
    <div>
      <div className="grid grid-cols-2 gap-10  justify-center items-center mt-[30px]">
        {personalLife.map((val, index) => (
          <div
            key={index}
            className={`bg-[#FBFBFB] h-[120px] py-[20px] flex flex-col justify-between border border-lightgray rounded-[10px] ${personLife === val.status  ? "border border-[#B14AD0] rounded-[10px]"
            : "none" }`}
            onClick={() => {setPersonLife(val.status);
                setOpen(true)}}
          >
            <div className="my-5 text-[34px] text-center">
              <i className="font-normal"> {val.icon} </i>
            </div>

            <p
              className="text-center  font-weigh text-[14px]"    
            >
              {val.status}
            </p>
          </div>
        ))}
      </div>


      {open && <MiddleScreen
        heading={personLife}
        title={
          "It is an aid for us to interpret astrology scientifically. It can only be created and interpreted by experienced and certified people."
        }
        nextHandler={()=>router.push("/survey/10")}
        picture={world}
      />
}
    </div>
  );
}

export default PersonalLife;
