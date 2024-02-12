import React from "react";
import Image from "next/image";
import card1 from "../../assets/1-zodiac.png";
import card2 from "../../assets/2-zodiac.png";
import card3 from "../../assets/3-zodiac.png";
import card4 from "../../assets/4-zodiac.png";
import card5 from "../../assets/5-zodiac.png";
import card6 from "../../assets/6-zodiac.png";
import card7 from "../../assets/7-zodiac.png";
import card8 from "../../assets/8-zodiac.png";
import card9 from "../../assets/9-zodiac.png";
import card10 from "../../assets/10-zodiac.png";
import card11 from "../../assets/11-zodiac.png";
import card12 from "../../assets/12-zodiac.png";


import chell from "../../assets/imgcha.png";

import first from "../../assets/first.png";
import second from "../../assets/second.png";

import third from "../../assets/third.png";

import forth from "../../assets/forth.png";

import five from "../../assets/fifth.png";

import six from "../../assets/six.png";
import seven from "../../assets/seven.png";

import eight from "../../assets/eight.png";

export default function Trsuted() {
  return (
    <div className=" pt-10 px-10 md:pt-40 md:pb-20 md:px-90  ">
      <p className="text-[22px] md:text-md1 mb-10 md:text-center  text-left text-center font-semibold  px-10 md:px-60 py-10 ">
      Schalte deine Sternzeichen-Kraft frei!
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
          <Image alt="Avatar" src={card6} width="100" height="100" /></div>
      </div>
      <div class=" hide-mobile container-apps max-w-[450px]">
      <div class="avatar">
          <Image alt="" aria-hidden src={card7} class="background" />
          <Image alt="Avatar" src={card7} width="100" height="100" />
        </div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card8} class="background" />
          <Image alt="Avatar" src={card8} width="100" height="100" /></div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card9} class="background" />
          <Image alt="Avatar" src={card9} width="100" height="100" /></div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card10} class="background" />
          <Image alt="Avatar" src={card1} width="100" height="100" /></div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card11} class="background" />
          <Image alt="Avatar" src={card2} width="100" height="100" /></div>

        <div class="avatar">
        <Image alt="" aria-hidden src={card12} class="background" />
          <Image alt="Avatar" src={card3} width="100" height="100" /></div>
      </div>
    </div>
    <p className=" text-[15px] center1 md:text-sm mt-16 font-normal text-left">
    Jedes Zeichen verfügt über einzigartige Fähigkeiten, die Ihre großartige Persönlichkeit definieren. Ob Sie ein feuriger Löwe oder ein weiser Skorpion sind, Ihr Sternzeichen ist Ihre Geheimwaffe im Leben voller Abenteuer. Tauchen Sie ein und lassen Sie sich von Ihrer persönlichen Führung die erstaunlichen Eigenschaften Ihres Sternzeichens zeigen.
      </p>
      
      
    </div>);
}
