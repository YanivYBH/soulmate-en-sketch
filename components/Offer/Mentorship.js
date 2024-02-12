import React from "react";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import card1 from "../../assets/1-service.png";
import card2 from "../../assets/2-service.png";
import card3 from "../../assets/3-service.png";
import card4 from "../../assets/4-service.png";
import card5 from "../../assets/5-service.png";
import card6 from "../../assets/6-service.png";
import news1 from "../../assets/nbc.svg";
import news2 from "../../assets/abc.png";
import news3 from "../../assets/cbs.svg";
import news4 from "../../assets/usa.svg";
import news5 from "../../assets/foxnews.png";
import news6 from "../../assets/digital.svg";

import { LiaStarSolid } from "react-icons/lia";
import comma from "../../assets/comma.svg";

import MentorshipCard from "../Mentorship.Card";
import MentorshipCard2 from "../Mentorship.Card2";

import degree from "../../assets/degree.svg";
import badge from "../../assets/badge.svg";

import Image from "next/image";


export default function Mentorship() {
  return (
    <div>
      
    {/* <div className=" mt-[50px]">
      <h1 className="text-center text-[26px] my-[25px] px-20 font-popins">
      <p className="text-md1  font-popins">Personalized mentorship</p>
        <p className="font-bold font-popins">
        from the  experts
        </p>
        <p className="my-10 text-[14px]  font-popins ">
          No extra charge 24/7 for you
        </p>
         
      </h1>
      
      <MentorshipCard
        title="Channa"
        desc="
                          Ph.D in Transpersonal Psychology
                        "
        img1={img1}
        cert="
        Master Coach, Certified Reiki Master
      "
        badge={badge}
        degree={degree}
      />





<MentorshipCard
        title="Alison"
        desc="

        Ph.D in Social Psychology
        "
        img1={img2}
        cert="
       
        RH Certified Relationship Coach
                        
      "
        badge={badge}
        degree={degree}
      />






<MentorshipCard
        title="Alana"
        desc="
        B.S. in Psychology

                        "
        img1={img3}
        cert="

        True Connections Head Couples Coach
        "
        badge={badge}
        degree={degree}
      />




<h1 className="text-center text-[26px] my-[25px] px-20 font-popins">
        <p className="font-bold font-popins">
        Haw can they help ?
        </p>
        <p className="my-10 text-[14px]  font-popins ">
          No extra charge 24/7 for you
        </p>
         
      </h1>
      
      <MentorshipCard2
        title="Dream Meaning"
        desc="
        Had a puzzling dream last night?
                        "
        img1={card1}
        cert="
        Let us unravel its meaning and shed light on your subconscious world.
      "
       
      />
      <MentorshipCard2
        title="Your Zodiac Information"
        desc="

        Curious about your zodiac?
        "
        img1={card2}
        cert="
       
         Explore your unique traits and compatibility for a deeper self-understanding.
                        
      "
        
      />
      <MentorshipCard2
        title="Tarot Reading"
        desc="
        Facing a crossroads in life?

                        "
        img1={card3}
        cert="

        Tarot's Major Arcana can guide you through major decisions and transformations.
        "
        
      />
      <MentorshipCard2
        title="Your Vocational Map"
        desc="
        Stuck in a career dilemma?

                        "
        img1={card4}
        cert="

        Discover your vocational roadmap to find fulfillment and success.
        "
        
      />
      <MentorshipCard2
        title="Love Calculator"
        desc="
        Wondering if it's true love?

                        "
        img1={card5}
        cert="

        Use our Love Calculator to measure your compatibility and nurture lasting bonds.
        "
       
      />
      <MentorshipCard2
        title="Horoscope"
        desc="
        Start your week aligned with the stars.

                        "
        img1={card6}
        cert="

        Get personalized weekly insights based on your zodiac sign.
        "
       
      />






    </div> */}
    <div className="justify-center pt-10 px-10 md:pt-40 md:pb-20 md:px-90  ">
    {/* <div className="text-center mt-[10px] ">
       
        <p className="text-md1  mb-[30px] leading-6 font-popins"> As <span className="text-md1 font-bold leading-6 font-popins">featured in </span></p>
       
      </div> */}
    
      <div class=" justify-center container-apps max-w-[450px]">
      <div class="avatar2">
        <Image alt="" aria-hidden src={news1} class="background" />
        <Image alt="Avatar" src={news1} width="100" height="100" />
        </div>

        <div class="avatar2">
        <Image alt="" aria-hidden src={news2} class="background" />
        <Image alt="Avatar" src={news2} width="60" height="60" /></div>

        <div class="avatar2">
        <Image alt="" aria-hidden src={news3} class="background" />
        <Image alt="Avatar" src={news3} width="100" height="100" /></div>

        <div class="avatar2">
        <Image alt="" aria-hidden src={news4} class="background" />
        <Image alt="Avatar" src={news4} width="100" height="100" /></div>

        <div class="avatar2">
        <Image alt="" aria-hidden src={news5} class="background" />
        <Image alt="Avatar" src={news5} width="100" height="100" /></div>
        <div class="avatar2">
        <Image alt="" aria-hidden src={news6} class="background" />
        <Image alt="Avatar" src={news6} width="100" height="100" />
        </div>
        
      </div>
      
    </div>
  
    {/* <div className=" md:col-span-1 p-10 mt-[30px] md:my-0 my-10 mx-8 md:mx-5 ">
        

        <div className="flex justify-start items-start">
          <Image alt="" src={comma} />

          <p className="greytext ml-10 mb-5 italic">
          Similar to using GPS for a journey, Cosmicharm offer a proven guide in life. These tools provide a clear path, enabling individuals to make informed decisions and navigate their way towards success and fulfillment real time. <br></br> <span className="font-bold">- Sophie Anderson.</span>
          </p>
        </div>
        
      </div> */}
    </div>
  );
}
