import React from "react";
import Image from "next/image";
// import Heroimg from "../../assets/bgimg.webp";
import Back from "../../assets/beforeafter.png";
import { useRouter } from "next/router";

export default function HeroSection() {
  const router = useRouter();
  const { query } = router;
  return (
    <div className="relative mt-20">
      <h3>
      
      </h3>
     
      <div className="text-center  mt-[25px] mb-[25px]">
        <p className="text-md1 font-bold font-popins">It is time,</p>
        <p className="text-md1  leading-6 font-popins">To reveal your soulmate</p>
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="relative">
          {/* Background image */}
          <div className="h-[220px]  relative">
            <Image
              src={Back}
              alt=""
              className="rounded-xl"
              layout="fill"
              objectFit="cover"
            />
            {/* <div className="absolute bottom-[0px] w-full">
              <div className="h-[170px]  relative z-30">
                <Image
                  src={`/assets/images/${query.image}.png`}
                  alt=""
                  className="rounded-xl"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div> */}
          </div>

          {/* Buttons positioned at the top */}
          {/* <div className="absolute top-[20px] md:top-[50px] lg:top-[20px] w-full">
            <div className="flex justify-between px-10 md:px-0">
              <button className="text-Gold2 font-poppins font-semibold bg-white p-3 md:py-[5px] md:px-[5px] rounded-lg w-[60px] text-sm md:text-sm">
                Now
              </button>
              <button className="text-Gold2 font-poppins font-semibold bg-white p-3 md:py-[5px] md:px-[5px] rounded-lg w-[60px] text-sm md:text-sm">
                Goal
              </button>
            </div>
          </div> */}

          {/* Hero image positioned at the bottom */}
          {/* <div className="absolute bottom-[-50px] md:bottom-[0px] lg:bottom-[-88px] w-full">
            <div className="h-[350px] md:h-[400px] relative z-30">
              <Image
                src={Heroimg}
                className="rounded-xl"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
