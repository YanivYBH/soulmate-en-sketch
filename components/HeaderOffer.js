import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Sidebar from "../assets/sidebar.svg";
import Container from "./Container";
import Link from "next/link";

export default function HeaderOffer({ open, Setopen }) {
  return (
    <div className="f1f1bg py-20 px-10">
      <Container medium>
        <div className="flex justify-center">
          <Link href="/">
            <Image src={Logo} width={150} alt="" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
