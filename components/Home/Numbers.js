import React from "react";
import Image from "next/image";
import card1 from "../../assets/1-numbers.png";
import card2 from "../../assets/2-numbers.png";
import card3 from "../../assets/3-numbers.png";
import card4 from "../../assets/4-numbers.png";
import card5 from "../../assets/5-numbers.png";
import card6 from "../../assets/6-numbers.png";
import card7 from "../../assets/7-numbers.png";
import card8 from "../../assets/8-numbers.png";
import card9 from "../../assets/9-numbers.png";
import card10 from "../../assets/10-numbers.png";
import card11 from "../../assets/11-numbers.png";
import card12 from "../../assets/13-numbers.png";
import card13 from "../../assets/moon-logo.png";
import { useRouter } from "next/router";



export default function Numbers() {
  const router = useRouter()
  return (
    <div className=" pt-10 px-10 md:pt-40 md:pb-20 md:px-90  ">
      <p className="text-[22px] md:text-md1 mb-10 md:text-center  text-left text-center font-semibold  px-10 md:px-60 py-10 ">
      Secrets of Numerology 💫
      </p>
    <div class="container-apps  center1">
      <div class=" container-apps max-w-[450px]">
      <div class="avatar">
          <Image alt="" aria-hidden src={card1} class="background" />
          <Image alt="Avatar" src={card1} width="100" height="100" />
        </div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card2} class="background" />
          <Image alt="Avatar" src={card2} width="100" height="100" /></div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card3} class="background" />
          <Image alt="Avatar" src={card3} width="100" height="100" /></div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card4} class="background" />
          <Image alt="Avatar" src={card4} width="100" height="100" /></div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card5} class="background" />
          <Image alt="Avatar" src={card5} width="100" height="100" /></div>
          <div class="avatar">
          <Image alt="" aria-hidden src={card6} class="background" />
          <Image alt="Avatar" src={card6} width="100" height="100" />
        </div>
        
      </div>
      <div class=" hide-mobile container-apps max-w-[450px]">
        <div class="avatar">
        <Image alt="" aria-hidden src={card7} class="background" />
          <Image alt="Avatar" src={card7} width="100" height="100" /></div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card8} class="background" />
          <Image alt="Avatar" src={card8} width="100" height="100" /></div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card9} class="background" />
          <Image alt="Avatar" src={card9} width="100" height="100" /></div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card10} class="background" />
          <Image alt="Avatar" src={card10} width="100" height="100" /></div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card11} class="background" />
          <Image alt="Avatar" src={card11} width="100" height="100" /></div>
          <div class="avatar">
        <Image alt="" aria-hidden src={card12} class="background" />
          <Image alt="Avatar" src={card12} width="100" height="100" /></div>
      </div>
    </div>
    <p className=" text-[15px] center1 md:text-sm mt-16 font-normal text-left">
    Ever wonder if numbers could change your life? Well, they can, and we are here to show you how – for free! Our numerology session is like <span class="font-bold">unlocking a secret code to your future.</span> Its about finding out what the numbers say about you – from your <span class="font-bold">love life to your dream job.</span>      </p>

      <p className=" text-[15px] center1 md:text-sm mt-16 font-normal text-left">
      Think about it: your birthday, your name... they are all numbers with a story to tell. And guess what? They might just<span class="font-bold"> lead you to your soulmate</span>  or help you hit it big in your career. This is not just some dry stats session – it’s a fun, eye-opening ride into your future.      </p>
      <p className=" text-[15px] center1 md:text-sm mt-16 font-normal text-left">
      So why wait? Dive in now,<span class="font-bold"> it is free!</span> Lets crack your number code and get you on the track to awesome stuff – love, success, you name it. Start your numerology adventure with us today – <span class="font-bold">its gonna be epic!</span></p>
      
      <div className="  font-bold  text-center mt-32 mb-52">
        <button
          className="gradient-custom  w-full md:w-[330px] text-center trext-sm text-white py-15 px-20 rounded-xl "
          onClick={() => router.push("/survey/1")}
        >
          Start Your Free Reading Now 
        </button>
        <div className="flex justify-center">
        <div className="relative mt-30 w-[220px] h-[100px] md:w-[250px] md:h-[150px]">
          <Image alt="" src={card13} layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
    </div>
  );
}
