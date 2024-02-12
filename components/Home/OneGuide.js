import React from "react";
import Image from "next/image";
import { AiOutlineMessage } from "react-icons/ai";
import { TbReportMedical } from "react-icons/tb";

import { AiTwotoneBulb } from "react-icons/ai";

import { BsSuitHeartFill } from "react-icons/bs";
import report from "../../assets/report.svg";
import message from "../../assets/message.svg";
import bulb from "../../assets/bulb.svg";
import hero from "../../assets/hero.webp";

import heart from "../../assets/heart.svg";

import Card from "../Card";
export default function OneGuide({
  data,
  handleCheckboxChange,
  selectedIndexes,
}) 
{
  return (
    <div className="py-20 px-42 mt-20   md:px-0 md:gradient-white">
       
      <div className="grid grid-cols-1 md:grid-cols-2 mx-10  rounded-xl  ">
        <Card
          Image={message}
          title="Einzelberatung"
          desc="Erhalten Sie eine persönliche, auf Ihren astrologischen Plan zugeschnittene, Beratung von unseren Experten"
        />
        <Card
          Image={report}
          title="Ausführliche psychische Lesung"
          desc="Mit Ihrem Namen, Geburtstag, und Vorlieben. Ich benutze mein expansives Tarotverständnis um eine genaue Darstellung Ihres Seelenverwandten zu liefern"
        />

        <Card
          Image={bulb}
          title="Hellseherin"
          desc="Ich führe seit Jahren Seelenverwandten-Zeichnungen und -Lesungen durch. Das Ganze ist eine bewährte Technik die schon für Tausende meiner Klienten hervorragende Ergebnisse hervorgebracht hat."
        />

        <Card
          Image={heart}
          title="Handgezeichnete Skizze"
          desc="Ich zeichne ein sehr detailliertes und handgezeichnetes Bild nur für Sie. Wenn Sie möchten, können Sie es auch ausdrucken (lassen) und einrahmen!"
        />
      </div>
    </div>
  );
}
