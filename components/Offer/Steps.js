import React from "react";
import Stepcard from "../Stepcard";
import { useRouter } from "next/router";

export default function Steps() {
  const router = useRouter();
  const { query } = router;
  var titleCard = "";
  var descCard = "";
  if(query.goaldes == "Love") { 
    titleCard= "Find lasting love.";
    descCard= "Attract deep love and discover my soulmate for lasting happiness.";
  }
  else if(query.goaldes == "Carrer"){
    titleCard= "Career success and wealth.";
    descCard= "Achieve career success, enhance financial prosperity, and secure wealth.";
  }
  else if(query.goaldes == "Healthy"){
    titleCard= "Boost health and energy.";
    descCard= "Elevate your health and vitality, experiencing daily well-being and energy.";
  }
  return (
    <div className="grid grid-cols-1">
      <div className="text-center mt-[50px] mb-[5px]">
        <p className="text-md1 font-bold font-popins">It&apos;s No Accident</p>
        <p className="text-md1  leading-6 font-popins">Because Now Is the Time for You to Begin a Magical Journey…</p>
        <p className="text-black text-[14px] mt-10 font-popins ">
        <span className="font-bold">Ask yourself,</span> would you drive to an unknown place without GPS guidance, like Waze or Google Maps?<br></br> If your answer is YES, we may not be the perfect match. However, if your response is <span className="font-bold">NO,</span> then Cosmicharm is precisely what you need — your personal life GPS for navigating the best possible path. 
        Welcome to a transformative experience that will empower you like never before.
        
        </p>
      </div>
      <div className="text-center mt-[25px] mb-[5px]">
        <p className="text-md1 font-bold font-popins">This is why</p>
        <p className="text-md1  leading-6 font-popins">The time to act is NOW</p>
        <p className="text-black text-[14px] mt-10 font-popins ">
        I will use my intuitive psychic and artistic abilities to feel the energies surrounding your soulmate to transform my visions and feelings into a portrait that will shed light on your love life.<br></br><br></br>In addition to the Soulmate Sketch you will receive an In Depth Reading about the characteristics of your soulmate.<br></br>This powerful and inspiring reading will also contain day-to-day guidance & advices to navigate your love life more confidently! <br></br> <br></br>  Act now and take the first step toward a brighter, more fulfilling future.</p>
      </div>
      {/* <div className="text-center mt-[50px] mb-[5px]">
        <p className="text-md1 font-bold font-popins">This is why</p>
        <p className="text-md1  leading-6 font-popins">The time to act is NOW</p>
        <p className="text-black text-[14px] mt-10 font-popins ">
        While life unfolds, time waits for no one. Your personal journey of self-discovery and growth is too precious to postpone. Our mentorship, reports, and cosmic guidance are here to empower you. <br></br><br></br>Don&apos;t delay the opportunity to enhance your personal life.<br></br> Act now and take the first step toward a brighter, more fulfilling future. Your cosmic transformation awaits for you!</p>
      </div> */}
     
    </div>
  );
}
