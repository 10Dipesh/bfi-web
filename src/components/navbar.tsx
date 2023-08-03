import { useState } from "react";
import { ROUTES } from "../constants";
import Link from "next/link";
import Image from "next/image";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex w-11/12 items-center justify-end">
        <div
          className="group relative z-50 flex h-6 w-6 cursor-pointer flex-col items-center justify-between md:hidden "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-1 w-full transform cursor-pointer rounded-lg bg-black transition duration-300 ease-in-out group-hover:text-red ${
              isOpen ? "translate-y-2.5 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full transform cursor-pointer rounded-lg bg-black transition duration-300 ease-in-out group-hover:text-red ${
              isOpen ? "w-0 opacity-0" : "w-full"
            }`}
          ></span>
          <span
            className={`group-hover:text-red-500 h-1 w-full transform cursor-pointer rounded-lg bg-black transition duration-300 ease-in-out ${
              isOpen ? "-translate-y-2.5 -rotate-45" : ""
            }`}
          ></span>
        </div>
      </div>
      {isOpen && (
        <div className="fixed flex justify-center item-center flex-col gap-5 top-0 h-full w-full bg-white z-10">
          {Object.entries(ROUTES).map(([key, value]) => (
            <Link href={value} key={key}>
              <div onClick={() => setIsOpen(false)} className="text-red">
                {key}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
const DesktopMenu: React.FC = () => {
  return (
    <nav className="w-full h-[50px] bg-black hidden md:flex justify-between">
      <div className="px-6 ml-6">
        <Image
          src="/images/BFI-logo.ico"
          alt="logo"
          width={20}
          height={20}
          className="object-contain"
        />
      </div>
      <div className="flex flex-row gap-10 items-center justify-center mr-10">
        <Link href={"/"}>
          <div className="text-white">Home</div>
        </Link>
        <Link href={"/about"}>
          <div className="text-white">About</div>
        </Link>
        <Link href={"/projects"}>
          <div className="text-white">Projects</div>
        </Link>
        <Link href={"/services"}>
          <div className="text-white">Services</div>
        </Link>
        <Link href={"/carrer"}>
          <div className="text-white">Carrer</div>
        </Link>
        <Link href={"/contact"}>
          <div className="text-white">Contact</div>
        </Link>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <>
      <nav>
        <MobileMenu />
        <DesktopMenu />
      </nav>
    </>
  );
};
export default Navbar;
