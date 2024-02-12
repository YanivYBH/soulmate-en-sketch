import React from "react";
import header from "../assets/header.svg";
import Image from "next/image";
import Link from "next/link";
import Cross from "../assets/cross.svg";
import { useState } from "react";
export default function Sidebar({ open, Setopen }) {
  return (
    <div
      className={`fixed bg-slider  py-30 px-40 md:p-30 h-screen w-[300px]  md:w-[250px] zindex99 transition-all duration-1000 ${
        open == true ? "-translate-x-full" : ""
      } `}
    >
      <button onClick={() => Setopen(!open)}>
        <Image alt="" src={Cross} />
      </button>

      <div className="mt-20">
        <Link href="">
          <p className="mt-5">Privacy policy</p>
        </Link>
        <Link href="">
          <p className="mt-5">Terms of use</p>
        </Link>
        <Link href="">
          <p className="mt-5">Payment terms</p>
        </Link>

        <Link href="">
          <p className="mt-5">Subscription terms</p>
        </Link>

        <Link href="">
          <p className="mt-5">Money back policy</p>
        </Link>

        <Link href="">
          <p className="mt-5">FAQ</p>
        </Link>

        <Link href="">
          <p className="mt-5">Contact us</p>
        </Link>
      </div>
    </div>
  );
}
