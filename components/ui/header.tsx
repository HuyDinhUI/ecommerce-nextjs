"use client";

import { CartIcon, HeartIcon, MenuIcon, UserIcon } from "@/icon";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { usePathname } from "next/navigation";

const ITEMS_NAVBAR = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Collections",
    href: "/collections",
  },
  {
    name: "New",
    href: "/new",
  },
];

const Header = () => {
  const location = usePathname()

  return (
    <header className="flex justify-between items-center px-10 max-sm:px-5 py-10">
      <div className="flex gap-5">
        <MenuIcon classname="sm:hidden" />
        <nav className="font-beatrice-deck font-light max-sm:hidden">
          <ul className="flex gap-5">
            {ITEMS_NAVBAR.map((item, idx) => (
              <li key={idx} className={`${location === item.href ? "text-black" : "text-gray-400"}`}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-1 flex justify-center">
        <Image src={"/logo.svg"} width={35} height={35} alt="Lumina logo" />
      </div>
      <div className="flex gap-5 max-sm:gap-2 justify-end">
        <Button
          icon={<HeartIcon />}
          variant="icon"
          size="ic"
          className="bg-black w-10 max-sm:hidden"
        />
        <Button
          icon={<CartIcon />}
          variant="icon"
          size="ic"
          className="bg-black w-10 h-10"
        />
        <Button
          icon={<UserIcon />}
          variant="icon"
          size="ic"
          className="bg-black w-10 h-10"
        />
      </div>
    </header>
  );
};

export default Header;
