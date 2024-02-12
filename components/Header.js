import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Sidebar from "../assets/sidebar.svg";
import Container from "./Container";
import Link from "next/link";
export default function Header({ open, Setopen }) {
  return (
    <div className="bg-rose py-20 px-10">
      <Container medium>
        <div className="flex justify-between">
          <Link href="/">
            <Image src={Logo} width={150} alt="" />
          </Link>
          <button onClick={() => Setopen(!open)}>
            <Image alt="" src={Sidebar} />
          </button>
        </div>
      </Container>
    </div>
  );
}
