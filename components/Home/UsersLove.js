import React from "react";
import { IoStarSharp } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";
import comma from "../../assets/comma.svg";
import Image from "next/image";
import card1 from "../../assets/re1.png";
import card2 from "../../assets/re2.png";
import card3 from "../../assets/re4.png";
import card4 from "../../assets/re5.png";

export default function UsersLove() {
  
  return (
    <div>
      <p className=" text-[22px] md:text-md1 mb-10 md:text-center  text-left text-center font-semibold  px-10 md:px-60 py-10   mt-40 ">
      Life-Changing Experiences
        </p>
    <div className="grid grid-cols-1 md:grid-cols-2 mx-10  rounded-xl   ">
      <>
        
        <div className=" md:col-span-1 bg-grey-card p-20 rounded-xl md:my-0 my-10 mx-8 md:mx-5  borders-rev">
          <div className="flex items-center justify-between p-20 ">
            <div className="flex items-center">
              <div className="ml-[-20px]">
                <span className="">
                <Image alt="Avatar" className="rounded-full" src={card1} width="110" height="110" />
                </span>
              </div>

              <div className="mx-20">
                <p className="text-xs text-Purple">Sophia.R</p>

                <p className="text-[12px]">08/13/2023</p>
              </div>
            </div>

            <div className="flex">
              <LiaStarSolid className="text-Gold" />
              <LiaStarSolid className="text-Gold" />
              <LiaStarSolid className="text-Gold" />
              <LiaStarSolid className="text-Gold" />
              <LiaStarSolid className="text-Gold" />
            </div>
          </div>

          <div className="flex justify-start items-start">
            <Image alt="" src={comma} />

            <p className="ml-10 mb-5 italic">
            I was genuinely surprised by the sketch of my soulmate – it felt deeply personal and resonated with me. The tarot reading session was insightful, and learning about my ideal zodiac match was a fun bonus! A truly unique experience that combined art, spirituality, and astrology in a beautiful way.</p>
          </div>
        </div>
      </>

      <div className=" md:col-span-1 bg-grey-card p-20 rounded-xl md:my-0 my-10 mx-8 md:mx-5  borders-rev">
        <div className="flex items-center justify-between p-20 ">
          <div className="flex items-center">
            <div className="ml-[-20px]">
              <span className="">                <Image alt="Avatar" className="rounded-full" src={card2} width="110" height="110" />
</span>
            </div>

            <div className="mx-20">
              <p className="text-xs text-Purple">Lily.P</p>

              <p className="text-[12px]">09/23/2023</p>

            </div>
          </div>

          <div className="flex">
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
          </div>
        </div>

        <div className="flex justify-start items-start">
          <Image alt="" src={comma} />

          <p className="ml-10 mb-5 italic">
          As a skeptic of numerology and tarot, I tried this service out of curiosity. I must admit, the drawing had an uncanny resemblance to my thoughts and the tarot session was much more enlightening than I expected. It's an interesting way to explore one's self and the mysteries of connection..</p>
        </div>
      </div>
      <div className=" md:col-span-1 bg-grey-card p-20 rounded-xl md:my-0 my-10 mx-8 md:mx-5  borders-rev">
        <div className="flex items-center justify-between p-20 ">
          <div className="flex items-center">
            <div className="ml-[-20px]">
              <span className="">                <Image alt="Avatar" className="rounded-full" src={card3} width="110" height="110" />
</span>
            </div>

            <div className="mx-20">
              <p className="text-xs text-Purple">Mia.L</p>

              <p className="text-[12px]">09/29/2023</p>
            </div>
          </div>

          <div className="flex">
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
          </div>
        </div>

        <div className="flex justify-start items-start">
          <Image alt="" src={comma} />

          <p className="ml-10 mb-5 italic">
          Fascinating and heartwarming! The artist skillfully translated my tarot reading and numerology into a sketch that felt personalized. The free tarot session provided additional insights into my love life, and the zodiac information was a fun aspect to consider. Great service for those seeking spiritual guidance in love.</p>
        </div>
      </div>

      <div className=" md:col-span-1 bg-grey-card p-20 rounded-xl md:my-0 my-10 mx-8 md:mx-5  borders-rev">
        <div className="flex flex-wrap items-center justify-between p-20 ">
          <div className="flex  items-center">
            <div className="ml-[-20px]">
              <span className="">                <Image alt="Avatar" className="rounded-full" src={card4} width="110" height="110" />
</span>
            </div>

            <div className="mx-20">
              <p className="text-xs text-Purple">Olivia.F</p>

              <p className="text-[12px]">10/02/2023</p>

            </div>
          </div>

          <div className="flex">
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
          </div>
        </div>

        <div className="flex justify-start items-start">
          <Image alt="" src={comma} />

          <p className="ml-10 mb-5 italic">
          A delightful and mystical journey! The sketch of my soulmate was beautifully drawn and surprisingly in sync with my intuition. The tarot session was a great addition, providing clarity and guidance. The ideal soulmate zodiac advice was an interesting angle that added to the overall experience.</p>
        </div>
      </div>
    </div>
    </div>
  );
}
