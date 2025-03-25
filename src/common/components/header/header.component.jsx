"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/common/assets/images/logo.svg";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../button/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()
  const list = [
    { url: "#", name: "Business" },
    { url: "#", name: "Providers" },
    { url: "#", name: "Individuals" },
    { url: "#", name: "Resources" },
  ];

  return (
    <header className=" bg-white fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center p-5 mx-auto max-w-[1323px]">
        {/* Logo */}
        <div className="w-[30%] flex items-center cursor-pointer" onClick={()=>router.push('/')}>
          <Image src={logo} alt="Logo" width={80} height={68} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[60%] ml-auto items-center gap-3 justify-end">
          <ul className="flex gap-3">
            {list.map((item, i) => (
              <li key={i.toString()}>
                <Link href={item.url} className="text-gray-900 font-medium">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
           
            <Button
              text="Book a Demo"
              onClick={()=>router.push('/book-demo')}
              isbg="#036E49"
              className="cursor-pointer w-fit px-[24px] whitespace-nowrap rounded-[24px] text-white"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu (Full Screen Overlay) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between p-5">
          <Image src={logo} alt="Logo" width={80} height={68} />
          <button className="text-3xl" onClick={() => setMenuOpen(false)}>
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col gap-6 mt-10 ps-5">
          {list.map((item, i) => (
            <li key={i.toString()}>
              <Link
                href={item.url}
                className="text-gray-900 font-medium text-xl"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 mt-10 px-5 ">
         
          <Button
              text="Book a Demo"
              onClick={()=>router.push('/book-demo')}
              isbg="#036E49"
              className="cursor-pointer w-fit px-[24px] whitespace-nowrap rounded-[24px] text-white"
            />
        </div>
      </div>
    </header>
  );
}
