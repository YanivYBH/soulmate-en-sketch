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
        <p className="text-md1 font-bold font-popins">Der Mond verrät viel über Ihren Seelenverwandten</p>
        <p className="text-black text-[14px] mt-10 font-popins ">Sind Sie bereit, das reichhaltige und 
        <span className="font-bold"> erfüllte Leben zu führen, das Sie verdienen?</span> Ihre astralen Energien anzuzapfen und damit zu beginnen, Ihre  tiefsten Wünsche zu manifestieren?<br></br><br></br>Sie haben vielleicht in der Vergangenheit Astrologie-Lesungen und Geburtshoroskope erhalten, aber NICHTS vergleichbares. Unsere neue Ultimative Hellseherische Analyse ist ein wunderschöner, 10-seitiger personalisierter Bericht, der eine noch tiefere Ebene Ihrer persönlichen Astrologie und Ihres Potenzials erforscht.<span className="font-bold"><br></br> Entdecken Sie verblüffende Wahrheiten über Ihren zukünftigen Partner, Ihre romantischen Beziehung, die Eigenschaften Ihrer wahren Liebe und das Leben, das Ihnen bestimmt ist zu leben!</span> 
        
        </p>
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
