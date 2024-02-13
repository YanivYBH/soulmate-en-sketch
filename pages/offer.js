import React, { useEffect, useState } from "react";
import HeroSection from "../components/Offer/index";
import Container from "../components/Container";
import GoalProfit from "../components/Offer/GoalAndProfit";
import Joined from "../components/Offer/Joined";
import Steps from "../components/Offer/Steps";
import Chance from "../components/Offer/Chance";
import Mentorship from "../components/Offer/Mentorship";
import Faq from "../components/Offer/Faq";
import Review from "../components/Offer/Review";
import Youget from "@/components/Offer/Youget";
import Happy from "@/components/Offer/Happy";
import Money from "../components/Offer/Money";
import Sidebar from "@/components/Sidebar";
import HeaderOffer from "@/components/HeaderOffer";
import { useRouter } from "next/router";
import UsersLove from "..//components/Home/UsersLove.js";

export default function Result() {
  const [open, Setopen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for query parameters
    if (Object.keys(router.query) && Object.keys(router.query).length < 0) {
      if (!(router.query.image && router.query.goal)) {
        // Redirect to another page if either image or goal is missing
        router.push("/survey/1"); // Replace with the actual path you want to redirect to
      }
    }
  }, [router.query]);

  return (
    <div>
      <Sidebar open={open} Setopen={Setopen} />
      <HeaderOffer open={open} Setopen={Setopen} />
      <Container medium>
        <HeroSection />
        <GoalProfit />
        <Steps />
        <Joined />
        <Chance />
        <Youget />
        {/* <Steps /> */}
        <Mentorship />
        <UsersLove/>
        <Faq />
        {/* <Faq /> */}
        {/* <Review /> */}
        
        <Happy />
      </Container>
    </div>
  );
}
