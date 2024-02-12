import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

function MiddleScreen({ title, heading, picture, nextHandler }) {
  const router = useRouter();

  if (heading=="Air"){
    heading ="Unleash Your Intellectual Brilliance"
    title="As an Air personality, your mind soars high with ideas and curiosity. You excel in articulate conversations and innovative thinking, bringing a breath of fresh, creative air to every challenge and discussion."
  }
  if (heading=="Water"){
    heading ="Discover Your Deep Emotional Essence"
    title="You are a deep sea of emotions and intuition! Like Water, you possess an extraordinary empathy and a soulful understanding of the world, effortlessly connecting with others on a deeply emotional level."
  }
  if (heading=="Earth"){
    heading ="Ground Yourself in Your Strength"
    title="Solid as Earth, you are the epitome of reliability and practical wisdom. Your grounded nature and steadfast approach make you a dependable anchor in any storm, providing a strong foundation for yourself and those around you."
  }
  if (heading=="Fire"){
    heading ="Embrace Your Bold, Fiery Spirit"
    title="You are the embodiment of Fire's vibrant energy! With a heart full of passion and a spirit that blazes trails, your dynamic presence lights up any room, inspiring others with your fearless zest for life."
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
