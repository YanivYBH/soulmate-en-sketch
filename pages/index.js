import { Inter } from "next/font/google";

import Link from "next/link.js";
import Container from "../components/Container.js";
import { Fade } from "react-awesome-reveal";
import Challenges from "../components/Home/Challenges.js";
import OneGuide from "../components/Home/OneGuide.js";
import Trusted from "../components/Home/Trusted.js";
import Numbers from "../components/Home/Numbers.js";

import UsersLove from "..//components/Home/UsersLove.js";
import HappyLife from "..//components/Home/Happylife.js";
import Header from "../components/Header.js";
import Sidebar from "../components/Sidebar.js";
import Button from "../components/Button.js";
import { useState } from "react";
import Spinner from "@/components/Spinner.js";
import Footer from "@/components/Footer.js";

export default function Home() {
  const [open, Setopen] = useState(true);
  return (
    <>
      <div className="gradient-custom3">
        <Button />
        <Sidebar open={open} Setopen={Setopen} />
        <Header open={open} Setopen={Setopen} />
        <Container small>
          <div className="mt-20 mb-20 pb-20 md:bg-gradient-to-t ">
            <Challenges />
            
            <OneGuide />
            {/* <Trusted /> */}
            <UsersLove />
            {/* <HappyLife /> */}
            
            {/* <Numbers /> */}
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
