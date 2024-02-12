import React from "react";
import chell from "../../assets/imgcha.png";
import rev from "../../assets/rev.png";
import hero from "../../assets/hero.webp";
import card1 from "../../assets/sketch6.webp";
import card2 from "../../assets/sketch7.jpg";
import card3 from "../../assets/sketchi1.png";
import card4 from "../../assets/sketchi2.png";
import card5 from "../../assets/sketchi3.png";
import card6 from "../../assets/sketchi4.png";
import Mentorship from "../../components/Offer/Mentorship";
import fetimage from "../../assets/gifs.gif";
import card7 from "../../assets/sketchi5.png";
import card8 from "../../assets/8.png";
import card9 from "../../assets/9.png";
import card10 from "../../assets/3.png";
import card11 from "../../assets/5.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Challenges() {
  const router = useRouter();

  return (
    <div className=" pt-10 px-10 md:pt-40 md:pb-20 md:px-90 ">
       <h2
          className=" text-md  font-semibold center1  md:text-center md:px-60"
        >
         Bist du bereit, endlich deinen wahren Seelenverwandten zu treffen? 🔮✨</h2>
       <div className="flex justify-center mt-20">
          <div className="relative w-full h-full ">
            <Image alt="" src={hero}  className="realtives"/>
          </div>
        </div>
      <div className="input-wrapper">
       
      </div>
      <h3 className="text-md center1 font-semibold mt-30 center1  md:text-center md:px-60">
      Beeil dich! 
     </h3>
      <p className=" text-[15px] md:text-sm  md:text-center md:px-50 center1">
      
      
Es sind nur noch wenige Plätze frei, um deinen Seelenverwandten mit unseren Skizzen zu entdecken.

Schließe dich den Tausenden von Frauen an, die bereits mit unserer Hilfe ihre perfekte Ergänzung gefunden haben!

Leg los, indem du unten ein paar einfache Fragen beantwortest 👇
      </p>
      <div className="  font-bold  text-center mt-32 mb-52 text-[13px]">
        <button
          className="gradient-custom  w-full md:w-[330px] text-center trext-sm text-white py-15 px-20 rounded-xl text-[13px] "
          onClick={() => router.push("/survey/1")}
        >
          ENTDECKEN SIE IHREN SEELENVERWANDTEN
        </button>
        <div className="flex justify-center">
          <div className="relative mt-30 w-[350px] h-[160px] md:w-[350px] md:h-[160px]">
            <Image alt="" src={rev} layout="fill" objectFit="contain" />
          </div>
        </div>

      </div>
      <Mentorship />
      <div className="text-center mt-[40px] ">
       
       <p className="text-md1  mb-[30px] leading-6 font-popins"> Echte <span className="text-md1 font-bold leading-6 font-popins">handgezeichnete Beispiele...</span></p>
      
     </div>
     <div className="relative w-full h-full center1 ">
            <Image alt="" width="250" height="250" src={fetimage}  className="realtives"/>
          </div>
      <div className="container-apps  center1">
      
        <div className=" container-apps mt-[30px] max-w-[450px]">
          <div className="avatar">
            <Image alt="" aria-hidden src={card1} className="background" />
            <Image alt="Avatar" src={card1} width="100" height="100" />
          </div>

          <div className="avatar">
            <Image alt="" aria-hidden src={card2} className="background" />
            <Image alt="Avatar" src={card2} width="100" height="100" />
          </div>

          <div className="avatar">
            <Image alt="" aria-hidden src={card3} className="background" />
            <Image alt="Avatar" src={card3} width="100" height="100" />
          </div>

          <div className="avatar">
            <Image alt="" aria-hidden src={card4} className="background" />
            <Image alt="Avatar" src={card4} width="100" height="100" />
          </div>

          <div class="avatar">
            <Image alt="" aria-hidden src={card5} class="background" />
            <Image alt="Avatar" src={card5} width="100" height="100" />
          </div>

          <div class="avatar">
            <Image alt="" aria-hidden src={card6} class="background" />
            <Image alt="Avatar" src={card6} width="100" height="100" />
          </div>
        </div>
        <div class=" hide-mobile container-apps max-w-[450px]">
          <div class="avatar">
            <Image alt="" aria-hidden src={card7} class="background" />
            <Image alt="Avatar" src={card7} width="100" height="100" />
          </div>

          <div class="avatar">
            <Image alt="" aria-hidden src={card8} class="background" />
            <Image alt="Avatar" src={card8} width="100" height="100" />
          </div>

          <div class="avatar">
            <Image alt="" aria-hidden src={card9} class="background" />
            <Image alt="Avatar" src={card9} width="100" height="100" />
          </div>

          <div class="avatar">
            <Image alt="" aria-hidden src={card1} class="background" />
            <Image alt="Avatar" src={card1} width="100" height="100" />
          </div>
          <div class="avatar">
            <Image alt="" aria-hidden src={card10} class="background" />
            <Image alt="Avatar" src={card10} width="100" height="100" />
          </div>
          <div class="avatar">
            <Image alt="" aria-hidden src={card11} class="background" />
            <Image alt="Avatar" src={card11} width="100" height="100" />
          </div>
          
          

         
        </div>
      </div>
      {/* <div className="flex justify-center">
          <div className="relative mt-30 w-[350px] h-[160px] md:w-[350px] md:h-[160px]">
            <Image alt="" src={gif} layout="fill" objectFit="contain" />
          </div>
        </div> */}
        
      <h3 className="text-md  font-semibold mt-60 center1  md:text-center md:px-60">
     
      Schicksal offenbart durch Tarot 
      </h3>
      <p className=" text-[15px] center1 md:text-sm mt-16 font-normal text-left">
      JA! In unserer Sitzung gibt es für Sie ein {" "}
        <span class="gradient-custom  w-full md:w-[330px] text-center trext-sm text-white py-5 px-10 rounded-sm text-bold text-sm font-bold text-left  md:text-center ">
        KOSTENLOSES
        </span>{" "}
        Tarot-Lesen, um Ihren Liebesweg und Ihren wahren Seelenverwandten zu enthüllen. Sie erfahren, was das Sternzeichen Ihres Seelenverwandten ist, wo Sie versuchen sollten Ihn zu finden, wie Sie auf Ihn zugehen sollten und vieles mehr...
     
      </p>
      <div class="container-apps  center1 mt-16">
        
          
        <div class="avatar">
            <Image alt="" aria-hidden src={card11} class="background" />
            <Image alt="Avatar" src={card11} width="100" height="100" />
          </div>
        <div class="avatar">
            <Image alt="" aria-hidden src={card10} class="background" />
            <Image alt="Avatar" src={card10} width="100" height="100" />
          </div>
          <div class="avatar">
            <Image alt="" aria-hidden src={card9} class="background" />
            <Image alt="Avatar" src={card9} width="100" height="100" />
          </div>
          
          
          

         
        
      </div>
          
      {/* <div className="flex justify-center">
        <div className="relative w-[250px] h-[150px] md:w-[350px] md:h-[250px]">
          <Image alt="" src={chell} layout="fill" objectFit="contain" />
        </div>
      </div> */}
    </div>
  );
}
