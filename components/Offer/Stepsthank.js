import React from "react";
import Stepcard from "../Stepcard";
import { useRouter } from "next/router";
import cards from "../../assets/thanks.png";
import Image from "next/image";

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
      <div className="w-full mt-20 md:mx-0  mx-[5px]">
       
      <Image src={cards} className="with97"  alt="" />
        
    
      </div>
      {/* <div className="text-center mt-[20px] mb-[5px]">
        <p className="text-md1 font-bold font-popins">Willkommen bei CosmicCharm</p>
        <p className="text-md1  leading-6 font-popins">Your Journey Awaits!</p>
        <p className="text-black text-[14px] mt-10 font-popins ">
        Thank you for choosing CosmicCharm! We&apos;re truly honored to accompany you on your journey of self-discovery and spiritual growth.
        <br></br><br></br>
        Within the next 12-24 hours, you will receive your comprehensive Personal Soul Path Report. This report is meticulously crafted to provide you with profound insights and guidance tailored specifically to your unique journey. It&apos;s our hope that you&apos;ll find it enlightening and empowering as you walk your soul&apos;s path.
        <br></br><br></br>
        Additionally, as a valued member of our CosmicCharm family, you now have exclusive access to our 24/7 mentorship program. This program connects you with experienced guides who are ready to support you, answer your questions, and help you navigate your spiritual exploration at any time of the day.
        <br></br><br></br>
        We are committed to providing you with a transformative experience. If you have any questions or need assistance in the meantime, please feel free to reach out to us. Your journey is our priority, and we&apos;re here to support you every step of the way. <br></br>email : cosmicharm@ybhltd.com



        </p>
      </div> */}
    
    </div>
  );
}
