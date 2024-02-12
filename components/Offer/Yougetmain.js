import React from "react";
import Image from "next/image";
import rev from "../../assets/proven2.png";
import { LiaStarSolid } from "react-icons/lia";


import { useRouter } from "next/router";

export default function Youget() {
  const router = useRouter();
  const { query } = router;
  var desc1= "Get 1:1 chats with professional mentors for tailored guidance.";
  var desc2= "Unveil life's purpose and destiny through numerology insights.";
  var desc3= "Illuminate current life situations and gain weekly guidance.";
  var desc4= "Weekly personalized horoscopes for navigating life's twists and turns.";
  var desc5= "Access comprehensive traits, love, career, skills, and cosmic identity insights.";

  if(query.goaldes == "Love") { 
    desc1= "Get 1:1 chats with professional mentors for tailored guidance.";
    desc2= "Unveil life's purpose and destiny through numerology insights.";
    desc3= "Illuminate current life situations and gain weekly guidance.";
    desc4= "Weekly personalized horoscopes for navigating life's twists and turns.";
    desc5= "Access comprehensive traits, love, career, skills, and cosmic identity insights.";

  }
  else if(query.goaldes == "Carrer"){
    desc1= "Master the art of career success and financial abundance.";
    desc2= "A strategic blueprint for rapid career advancement.";
    desc3= "Personalized career strategies to unleash your full potential.";
    desc4= "Cultivate unparalleled leadership skills and command your career.";
    desc5= "Propel yourself to the top of your field and live your professional dream!";

  }
  else if(query.goaldes == "Healthy"){
    desc1= "Dive into the world of holistic health and boundless energy.";
    desc2= "A wellness journey that renews your body, mind, and spirit.";
    desc3= "Personalized wellness solutions that invigorate your life.";
    desc4= "Stress melts away as you embrace a healthier, happier you.";
    desc5= "Reclaim vitality and savor every vibrant moment of your life!";}

  return (
    <div className="mx-[5px] md:mx-0 relative ">
     
     
     {/* <p className="text-md1 mt-[40px] text-black font-popins font-bold text-center mt-[20px] ">Why Klips?
     </p>
     <p className="text-md1  text-black font-popins text-center mb-[20px]">Here is a few reassons</p>
     
      <div className="flex items-center   justify my-10 ">
        <Image src={buysell} alt="" width={40} />
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">Free Signals & Tailored Education </span>
        </p>
      </div>
      <div className="flex items-center my-10 ">
        <Image src={demo} alt="" width={40}/>
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">Demo Trading for smooth start</span>
        
        </p>
      </div>

      

      <div className="flex items-center my-10 ">
        <Image src={min} alt="" width={40}/>
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">Low Minimum Deposit - 200$ minimum</span>
        
          </p>
      </div> */}

      
      <div className="startccenter mt-[35px] mb-[10px]">
      <LiaStarSolid className="text-Gold mr-[4px] "  fill="#4fa667" />
      <LiaStarSolid className="text-Gold mr-[4px] "  fill="#4fa667" />
      <LiaStarSolid className="text-Gold mr-[4px] "  fill="#4fa667" />
      <LiaStarSolid className="text-Gold mr-[4px] "  fill="#4fa667" />
      <LiaStarSolid className="text-Gold mr-[4px] "  fill="#4fa667" />
      </div>
      <p className="justify-center text-center  text-[14px] center1 font-popins ">
     
     
          <span className="font-bold">4.7</span> Rating from <span className="font-bold">60k+ </span>reviews
        </p>
  
      <div className="flex justify-center">
        
          <div className="relative w-[220px] h-[100px] md:w-[220px] md:h-[100px]">
            
            <Image alt="" src={rev} layout="fill" objectFit="contain" />
          </div>
        </div>
    </div>
  );
}
