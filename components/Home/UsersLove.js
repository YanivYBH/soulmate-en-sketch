import React from "react";
import { IoStarSharp } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";
import comma from "../../assets/comma.svg";
import Image from "next/image";
import card1 from "../../assets/re1.png";
import card2 from "../../assets/re2.png";
import card3 from "../../assets/re4.png";
import card4 from "../../assets/re5.png";

export default function UsersLove() {
  
  return (
    <div>
      <p className=" text-[22px] md:text-md1 mb-10 md:text-center  text-left text-center font-semibold  px-10 md:px-60 py-10   mt-40 ">
      Life-Changing Experiences
        </p>
    <div className="grid grid-cols-1 md:grid-cols-2 mx-10  rounded-xl   ">
      <>
        
        <div className=" md:col-span-1 bg-grey-card p-20 rounded-xl md:my-0 my-10 mx-8 md:mx-5  borders-rev">
          <div className="flex items-center justify-between p-20 ">
            <div className="flex items-center">
              <div className="ml-[-20px]">
                <span className="">
                <Image alt="Avatar" className="rounded-full" src={card1} width="110" height="110" />
                </span>
              </div>

              <div className="mx-20">
                <p className="text-xs text-Purple">Sophia.R</p>

                <p className="text-[12px]">08/13/2023</p>
              </div>
            </div>

            <div className="flex">
              <LiaStarSolid className="text-Gold" />
              <LiaStarSolid className="text-Gold" />
              <LiaStarSolid className="text-Gold" />
              <LiaStarSolid className="text-Gold" />
              <LiaStarSolid className="text-Gold" />
            </div>
          </div>

          <div className="flex justify-start items-start">
            <Image alt="" src={comma} />

            <p className="ml-10 mb-5 italic">
            Der Künstler hat die Ergebnisse meiner Tarot-Lesung und Numerologie gekonnt in eine Skizze übersetzt, die sich wirklich persönlich angefühlt hat. Die kostenlose Tarot-Sitzung hat mir zusätzliche Einblicke in mein Liebesleben gegeben, und es hat Spaß gemacht, über die Sternzeichen-Informationen nachzudenken. Toller Service für all diejenigen, die spirituelle Führung in der Liebe suchen</p>
          </div>
        </div>
      </>

      <div className=" md:col-span-1 bg-grey-card p-20 rounded-xl md:my-0 my-10 mx-8 md:mx-5  borders-rev">
        <div className="flex items-center justify-between p-20 ">
          <div className="flex items-center">
            <div className="ml-[-20px]">
              <span className="">                <Image alt="Avatar" className="rounded-full" src={card2} width="110" height="110" />
</span>
            </div>

            <div className="mx-20">
              <p className="text-xs text-Purple">Lily.P</p>

              <p className="text-[12px]">09/23/2023</p>

            </div>
          </div>

          <div className="flex">
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
          </div>
        </div>

        <div className="flex justify-start items-start">
          <Image alt="" src={comma} />

          <p className="ml-10 mb-5 italic">
          Ich war wirklich überrascht von der Skizze meines Seelenverwandten – sie fühlte sich zutiefst persönlich an und hat mich wirklich berührt. Die Tarot-Lesesitzung war aufschlussreich und herauszufinden was meine ideale Sternzeichen-Übereinstimmung ist war ein lustiger Bonus! Ein wirklich einzigartiges Erlebnis, das Kunst, Spiritualität und Astrologie auf wunderschöne Weise vereint.</p>
        </div>
      </div>
      <div className=" md:col-span-1 bg-grey-card p-20 rounded-xl md:my-0 my-10 mx-8 md:mx-5  borders-rev">
        <div className="flex items-center justify-between p-20 ">
          <div className="flex items-center">
            <div className="ml-[-20px]">
              <span className="">                <Image alt="Avatar" className="rounded-full" src={card3} width="110" height="110" />
</span>
            </div>

            <div className="mx-20">
              <p className="text-xs text-Purple">Mia.L</p>

              <p className="text-[12px]">09/29/2023</p>
            </div>
          </div>

          <div className="flex">
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
          </div>
        </div>

        <div className="flex justify-start items-start">
          <Image alt="" src={comma} />

          <p className="ml-10 mb-5 italic">
          Als Skeptiker der Numerologie und des Tarot habe ich diesen Dienst einfach aus Neugier ausprobiert. Ich muss zugeben, dass die Zeichnung eine unheimliche Ähnlichkeit mit meinen eigenen Gedanken und Vorstellungen hatte und die Tarot-Sitzung viel aufschlussreicher war, als ich es erwartet hatte. Es ist eine interessante Möglichkeit, sich selbst und die Geheimnisse seiner Selbst und seines Seelenbundes zu erkunden.</p>
        </div>
      </div>

      <div className=" md:col-span-1 bg-grey-card p-20 rounded-xl md:my-0 my-10 mx-8 md:mx-5  borders-rev">
        <div className="flex flex-wrap items-center justify-between p-20 ">
          <div className="flex  items-center">
            <div className="ml-[-20px]">
              <span className="">                <Image alt="Avatar" className="rounded-full" src={card4} width="110" height="110" />
</span>
            </div>

            <div className="mx-20">
              <p className="text-xs text-Purple">Olivia.F</p>

              <p className="text-[12px]">10/02/2023</p>

            </div>
          </div>

          <div className="flex">
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
            <LiaStarSolid className="text-Gold" />
          </div>
        </div>

        <div className="flex justify-start items-start">
          <Image alt="" src={comma} />

          <p className="ml-10 mb-5 italic">
          Ich habe meine Erfahrung geliebt! Die Skizze war nicht nur wunderschön, sondern machte auch den Eindruck als ob Sie etwas sehr Reales über meinen zukünftigen Partner einfing. Die Tarot-Lesung hat mich zum Nachdenken gebracht und es war faszinierend, etwas über das potenzielle Sternzeichen meines Seelenverwandten zu erfahren. Sehr zu empfehlen für alle, die bereit sind, die Welt des Tarot und der Astrologie zu erkunden.</p>
        </div>
      </div>
    </div>
    </div>
  );
}
