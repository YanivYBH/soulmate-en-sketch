import React from "react";
import Logo from "../assets/logo.png";
import Container from "./Container";
import Link from "next/link";
export default function Footer({}) {
  return (
    <div className=" py-20  md:mb-0 mb-40 ">
      <Container medium>
        <p className="text-center px-20 text-[12px]">
          IdelCommerce, United Kindom, 2013{" "}
          <br className=" hidden md:block" /> United Kindom
          <br></br>Contact : cosmicharm@ybhltd.com
        </p>
      </Container>
    </div>
  );
}
