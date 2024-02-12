import React from "react";

import safe from "../../assets/safe.svg";
import Image from "next/image";
import cards from "../../assets/stripe-badge-grey.png";
import Link from "next/link";
import { useRouter } from "next/router";
import img12 from "../../assets/tarot-love.png";
import img13 from "../../assets/zodaic-love.png";


export default function Chance() {
  const router = useRouter();
  const { query } = router;
  const handleRedirect = () => {
    window.location.href = "https://api.ybhltd.com/cosmicharm?name="+query.name+"&birthdate="+query.birthdate+"&placeType="+query.placeType+"&personalityTraits="+query.personalityTraits;
  };
  return (
    <>
      <div className="text-center mt-[30px]  mx-[5px] md:mx-0 ">
        
        <p className="text-md1 font-popins">Geben Sie uns eine Chance</p>
        <p className="text-md1 font-bold font-popins">Ihren Seelenverwandten zu finden</p>
       
        
        <div className="rounded-xl border border-borderClr overflow-hidden  mt-10">
          <p className="bg-lightPurple h-15 p-10 "></p>

          <div className="flex justify-between items-center p-15">
            <div className="lefttext">
            <p className="text-[18px] font-bold  font-popins">
            Jetzt für nur
              </p>
            
              <p className="text-[11px] font-popins">
              weniger als  <span className="font-bold">eine Mahlzeit 🍲</span>
              </p>
            </div>
            <div
              data-v-d63a90d2=""
              class="flex flex-row justify-center items-end mb-0 px-15"
            >
              <div data-v-d63a90d2="" class="flex flex-row items-start">
                <span data-v-d63a90d2="" class="text-sm font-popins">
                €
                </span>
                <span data-v-d63a90d2="" class="text-Black1 font-popins text-left font-bold text-[15px] mt-[-5px] mx-2 text-lg font-popins">
                29
                </span>
              </div>
              <p className="text-Black1 center1 text-[13px] text-line">
              €79
                </p>
            </div>
          </div>
        </div>
      </div>
     
      <div className="mt-20 mx-[5px] md:mx-0">
        <button href="/" onClick={handleRedirect} className="rounded-xl p-20 text-white color-greenbg w-full font-popins  font-bold  font-popins ">
       
        <p className="text-[15px] font-popins">
        Klicken Sie hier um einzusteigen
              </p>
        </button>
      </div>
      <div className="border-present mt-[20px] ">
      <p className= "text-[14px] font-bold center1 font-popins ">
      KOSTENLOSE GESCHENKE IM WERT  <span className="free-gifts text-[14px]">VON 50 €</span> 
        </p>

      <div className="flex items-center my-10 ">
        
        <Image src={img12} alt="" width={40}/>
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold"> Liebestarot Insights : </span>
        Entschlüsseln Sie die Geheimnisse Ihrer romantischen Zukunft durch aufschlussreiche Tarot-Lesungen..
        </p>
        <div
              data-v-d63a90d2=""
              class="flex flex-row justify-center items-end mb-0 px-11"
            >
              <div data-v-d63a90d2="" class="flex flex-row items-start">
               
                <span data-v-d63a90d2="" class="text-Black1  font-popins text-left font-bold text-[12px] ml-[7px] mx-2 text-lg font-popins free">
                FREE
                <p className="text-Black1 center1 text-[15px] text-line">
                €29.99
                </p>
                </span>
              </div>
             
            </div>
      </div>

      <div className="flex items-center my-10 present-border-second ">
        
        <Image src={img13} alt="" width={40}/>
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">Sternzeichen Harmonie : </span>
        Entdecken Sie das Sternzeichen, das perfekt mit der Energie Ihres Seelenverwandten übereinstimmt.</p>
        <div
              data-v-d63a90d2=""
              class="flex flex-row justify-center items-end mb-0 px-11"
            >
              <div data-v-d63a90d2="" class="flex flex-row items-start">
               
               <span data-v-d63a90d2="" class="text-Black1  font-popins text-left font-bold text-[12px] ml-[7px] mx-2 text-lg font-popins free">
               FREE
               <p className="text-Black1 center1 text-[15px] text-line">
               €19.99
               </p>
               </span>
             </div>
             
            </div>
      </div>

      </div>
      
      {/* <div className="border-2 border-borderClr rounded-xl  mt-20 px-20 md:px-40 md:mx-0 mx-[20px]">
        <div className="flex justify-between mx-0  md:mx-[25px] p-20 font-semibold  text-[14px] ">
          <Image src={safe} />

          <div>
            <p className="font-popins  font-medium  md:mx-0 ">
              Safe & secure payment
            </p>
          </div>
        </div>
      </div> */}
      
      <div className="w-full mt-20 md:mx-0  mx-[5px]">
       
      <Image src={cards} className="with97"  alt="" />
        
    
      </div>
      <div >
          {/* <Image src={cards} alt="" className="w-full" />          */}
          {/* <p className="text-[12px] lightgrey font-popins">
          For only $14 today, you&apos;ll have a 7-day trial. If you don&apos;t cancel at least 24 hours before the trial ends, you&apos;ll be charged the full $28/month. 
          </p> */}
        </div>
    </>
  );
}
