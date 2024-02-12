import React from "react";
import img10 from "../../assets/1.svg";
import img11 from "../../assets/2.svg";
import Image from "next/image";
import img12 from "../../assets/sketchq.png";
import img13 from "../../assets/4.svg";
import img14 from "../../assets/5.svg";
import after1 from "../../assets/1-after.png";
import after2 from "../../assets/2-after.png";
import fetimage from "../../assets/gifs.gif";
import after3 from "../../assets/3-after.png";
import after4 from "../../assets/4-after.png";
import after5 from "../../assets/5-after.png";
import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import rev from "../../assets/rev.png";
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
     {/* <div className="center1 mt-[50px] books mb-[30px]">
     <li class='book'>
     <Image src={book1} alt=""  />
      </li>
      <li class='book'>
      <Image src={book2} alt=""  />
      </li>
     </div>
       */}
       <div className="relative w-full h-full center1 mt-[25px]">
            <Image alt="" width="250" height="250" src={fetimage}  className="realtives"/>
          </div>
     <p className="text-md1 text-black font-popins text-center mt-[20px] "><span className="text-md1 font-bold text-black font-popins text-center"> Zusammenfassung</span>
     
     </p>
     <p className="my-10 text-center mb-[20px] text-[14px]  font-popins ">
     Was Sie genau bekommen, wenn Sie uns beitreten
        </p>
        <div className="flex items-center my-10 ">
        <Image src={img12} alt="" width={40}/>
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">✅ Seelenverwandten Sketch : </span>
        Künstlerische, handgezeichnete Visualisierung Ihres Seelenverwandten.
        </p>
      </div>
      <div className="flex items-center   justify my-10 ">
        <Image src={img11} alt="" width={40} />
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">✅ Liebestarot Insights : </span>
        Entschlüsseln Sie die Geheimnisse Ihrer romantischen Zukunft durch aufschlussreiche Tarot-Lesungen.</p>
      </div>
      

      <div className="flex items-center my-10 ">
        <Image src={img14} alt="" width={40}/>
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">✅ Sternzeichen Harmonie : </span>
        Entdecken Sie das Sternzeichen, das perfekt mit der Energie Ihres Seelenverwandten übereinstimmt.</p>
      </div>

    


        <p className="text-md1 mt-[40px] text-black font-popins font-bold text-center mt-[20px] ">Nachweislich effektiv!
     </p>
     <p className="text-md1  text-black font-popins text-center mb-[20px]"> Nachdem Sie uns beitreten werden Sie mehr </p>
     
      <div className="flex items-center   justify my-10 ">
        <Image src={after1} alt="" width={40} />
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">Bestärkt : </span>Sie erhalten die Werkzeuge und Erkenntnisse, um fundierte Entscheidungen in der Liebe zu treffen.
        </p>
      </div>
      <div className="flex items-center my-10 ">
        <Image src={after2} alt="" width={40}/>
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">Selbstbewusst : </span>
        Verstehen Sie Ihre einzigartigen Charakterzüge, Stärken und Wachstumsmöglichkeiten.
        </p>
      </div>

      <div className="flex items-center my-10 ">
        <Image src={after3} alt="" width={40}/>
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">Selbstbewusst : </span>
        Navigieren Sie durch Beziehungen.
        </p>
      </div>

      <div className="flex items-center my-10 ">
        <Image src={after4} alt="" width={40}/>
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">Im Einklang : </span>
        Verbinden Sie sich mit Ihrer Bestimmung und leben Sie in Harmonie mit dem Universum.
          </p>
      </div>

      {/* <div className="flex items-center my-10 ">
        <Image src={after5} alt="" width={40}/>
        <p className="ml-15 text-[14px] font-popins">
        <span className="font-bold">Fulfilled : </span>Embrace a life enriched with self-discovery and cosmic guidance.</p>
      </div> */}
     
      
  
      <div className="flex mt-[35px] justify-center">
        
          <div className="relative w-[350px] h-[160px] md:w-[350px] md:h-[160px]">
            
            <Image alt="" src={rev} layout="fill" objectFit="contain" />
          </div>
        </div>
    </div>
  );
}
