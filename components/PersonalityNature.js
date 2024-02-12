import React from 'react'
import { useRouter } from "next/router";


function PersonalityNature({setPersonalityTraits, personalityTraits}) {
    const router = useRouter();

    const Traits = [
        { trait: "Emotional" },
        { trait: "Logisch" },
        { trait: "Dominant"},
        { trait: "Loyal" },
        { trait: "Vertrauenswürdig"},
        { trait: "Ehrlich"},
        { trait: "Aufgeschlossen" },
        { trait: "Kindisch"},
        { trait: "Positiv" },
        { trait: "Pessimistisch" },
      ];

      const handleSelect = (value) => {
        // Check if the value is already in the array
        if (personalityTraits.find((x) => x.trait === value.trait)) {
          // If it is, remove it
          setPersonalityTraits(personalityTraits.filter((item) => item.trait !== value.trait));
        } else {
          // If it's not, add it to the array
          setPersonalityTraits([...personalityTraits, value]);
        }
      };


      console.log(personalityTraits, "personalityTraits")
  return (
    <div >
        <div className="grid grid-cols-2 gap-10  justify-center items-center mt-[30px]">
        {Traits.map((val, index) => (
          <div
            key={index}
            className={`bg-[#FBFBFB]  py-[18px] flex flex-col justify-between border border-lightgray  rounded-[10px] ${personalityTraits.find((x) => x.trait === val.trait) ? "border-width border border-[#B14AD0] rounded-[10px] border-width  bg-[#FBF6FD]" : "none"  }`}
            onClick={() => handleSelect(val)}
          >
           

            <p
              className="text-center text-Black font-popins  text-[14px]"
              
            >
              {val.trait}
            </p>
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default PersonalityNature