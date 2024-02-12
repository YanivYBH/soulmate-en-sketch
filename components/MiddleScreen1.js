import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

function MiddleScreen({ title, heading, picture, nextHandler }) {
  const router = useRouter();

  if (heading=="Financial issues"){
    heading ="Master Your Finances"
    title="Gain clarity on financial decisions. Your numbers can reveal hidden strengths and guide you in achieving financial stability and growth."
  }
  if (heading=="Career"){
    heading ="Chart Your Professional Destiny"
    title="Uncover your career potential. Use insights from your birth numbers to navigate towards a fulfilling and successful professional path."
  }
  if (heading=="Love"){
    heading ="Understand Relationships Better"
    title="Enhance your love life. Discover how your unique traits, as reflected in your numbers, can contribute to harmonious and fulfilling relationships."
  }
  if (heading=="Health"){
    heading ="Balance Your Well-being"
    title="Align with a healthier lifestyle. Your numerological profile can offer guidance on maintaining physical and mental balance."
  }
  if (heading=="Family Life"){
    heading ="Nurture Family Harmony"
    title="Strengthen family bonds. Understand the dynamics at play and how your unique traits can contribute to a harmonious home life."
  }
  if (heading=="Friendships"){
    heading ="Enrich Your Social Circle"
    title="Revitalize your friendships. Learn how your personality, influenced by your numerological aspects, can foster deeper and more meaningful connections."
  }
  

  return (
    <Fade>
      
    <div className="fixed h-screen w-screen top-[0px] left-[0px] z-[2000] bg-white middle-page">
      <div className="flex flex-col justify-center items-center h-full padding-10">
        <div className="flex justify-center">
          <Image
            src={picture}
            alt="Description of the image"
            width={180}
            height={50}
            objectFit="contain"
          />
        </div>
        <div className="flex  py-[20px] flex-col items-center">
          <h6 className="text-[22px] center text-center">{heading} </h6>
          <p className="text-[16px] font-normal text-center py-[20px] my-[15px] "> {title} </p>
        </div>

        <button
          type="submit"
          onClick={nextHandler}
          className=" font-weigh font-size-20 w-[80%] md:w-[80%] top-[87%] text-white font-semibold flex mx-auto bg-brown disabled:bg-white disabled:text-brown mt-20 py-[10px] px-[10px] justify-center border-Border hover:border-brown rounded-2xl border-2"
        >
          Continue
        </button>
      </div>
    </div>

    </Fade>
  );
}

export default MiddleScreen;
