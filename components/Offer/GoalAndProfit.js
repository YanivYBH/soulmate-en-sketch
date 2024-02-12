import React from "react";
import Image from "next/image";
import pic1 from "../../assets/goal.svg";
import Profitcomponent from "../Profitcomponent";
import Profitcomponenthigh from "../Profitcomponenthigh";
import Profit from "../../assets/perce1.svg";
import Name from "../../assets/name.svg";
import Moon from "../../assets/moonbirth.png";


import { useRouter } from "next/router";

export default function GoalProfit() {
  const router = useRouter();
  const { query } = router;
  return (
    <div>
      <Profitcomponent title="Name" desc={query.name} img={Name} width="50" />
      <Profitcomponent title="Geburtsmond" desc={query.birthdate} img={Moon} width="50" />
      <Profitcomponenthigh
        desc=""
        className="greentext"
        title="Erfolgswahrscheinlichkeit"
        img={Profit}
      />
     
    </div>
  );
}
