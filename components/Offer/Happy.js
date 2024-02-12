import React from "react";

import safe from "../../assets/safe.svg";
import Image from "next/image";
import cards from "../../assets/stripe-badge-grey.png";
import GoalProfit from "./GoalAndProfit";
import Link from "next/link";
import tick from "../../assets/tick.png";
import { useRouter } from "next/router";


export default function Happy() {
  const router = useRouter();
  const { query } = router;
    const handleRedirect = () => {
      window.location.href = "https://api.ybhltd.com/cosmicharm?name="+query.name+"&birthdate="+query.birthdate+"&placeType="+query.placeType+"&personalityTraits="+query.personalityTraits;
    };
  return (
    <>
      <div className="text-center mt-[50px] bg-darkBrown rounded-t-lg py-20 ">
        <p className="text-md1 text-[#FFFFFF] font-popins">Geben Sie uns eine Chance</p>
        <p className="text-md1 font-bold text-[#FFFFFF] font-popins">
        Ihren Seelenverwandten zu finden


        </p>
        {/* <p className="my-10 text-[14px] text-[#FFFFFF] font-popins ">
          Invest in your future self
        </p> */}

        <div className="mx-15 mt-[10px] ">
          <GoalProfit />
        </div>

        <div className="rounded-xl  overflow-hidden  mx-15 mt-[18px]">
          <p className=" h-15 p-10 bg-lightPurple "></p>

          <div className="flex justify-between items-center   p-15 bg-[#FFFFFF]">
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
        <div className=" mt-10 mx-[15px] mt-[18px]">
          <button className="rounded-xl p-20 text-white color-greenbg w-full font-popins  font-bold  font-popins " onClick={handleRedirect}
        >
            <p className="text-[13px] font-popins">
            ENTDECKEN SIE IHREN SEELENVERWANDTEN
              </p>
          </button>
        </div>
        {/* <div className="border-2 border-lightPurple rounded-xl  mt-[18px] px-20 mx-15 md:px-20">
          <div className="flex justify-around  mx-[0px] md:px-30 py-20 font-semibold  text-[14px] ">
            <Image src={safe} alt="" />

            <div>
              <p className="text-[#ffffff] font-popins">
                Safe & secure payment
              </p>
            </div>
          </div>
        </div> */}
        <div className="bg-darkBrown  mt-20 px-20 relative">
      <div className="border-2 border-lightPurple rounded-2xl p-20 ">
        <p className="text-center text-[#ffffff] font-bold text-[20px]">
        Unsere Geld-zurück-Garantie 
        </p>
        <p className="text-center text-[#ffffff] text-[14px]">
        Unsere Geld-zurück-Garantie Wir sind von unserem Service so überzeugt, dass wir Ihnen innerhalb von 30 Tagen nach dem Kauf den vollen Betrag zurückerstatten, wenn Sie keine Ergebnisse verzeichnen können. Erfahren Sie mehr über alle Bedingungen in unserer

          {/* <span className="underline"> Subscription term </span> */}
        </p>
      </div>
      <div>
        <Image
          src={tick}
          alt=""
          className="absolute bottom-[20px] right-[20px] w-[60px] h-[60px]"
        />
      </div>
      <br />

      <br />
    </div>
        <div className="w-full my-15 p-15">
          {/* <Image src={cards} alt="" className="w-full" />          */}
          {/* <p className="text-[12px] mt-10 text-[#FFFFFF80] font-popins">
          For only $0 today, you&apos;ll have a 7-day trial. If you don&apos;t cancel at least 24 hours before the trial ends, you&apos;ll be charged the full $28/month. To cancel, contact our support team or use the support chat. Payments are charged to your specified card. By continuing, you agree to our{" "}
            <span className="underline font-popins"> Terms anc conditions </span>
            <span className="underline font-popins"> Privacy Policy </span>
            <span className="underline font-popins"> Money Back </span>and
            <span className="underline font-popins"> Subscription term </span>
          </p> */}
        </div>
        
      </div>
    </>
  );
}
