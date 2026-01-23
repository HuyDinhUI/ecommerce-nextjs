"use client";

import { CartIcon, HeartIcon, MenuIcon, UserIcon } from "@/icon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Button } from "../ui/button";
import { useCartStore } from "@/store/cart.store";
import { useUIStore } from "@/store/ui.store";

const ITEMS_NAVBAR = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "New",
    href: "/new",
  },
];

const Header = () => {
  const location = usePathname();
  const scrollUp = useScrollDirection();
  const { setOpen } = useUIStore()
  const { totalQuantity } = useCartStore();
  return (
    <header
      className={`flex justify-between items-center px-10 max-sm:px-5 py-10 sticky top-0 z-999 bg-white ${
        scrollUp ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300`}
      style={{ backgroundImage: "url('/noisy_background.png')" }}
    >
      <div className="flex gap-5">
        <Button
          onClick={() => setOpen(true, "sidebar")}
          size="ic"
          className="lg:hidden z-999"
          icon={<MenuIcon />}
        />
        <nav className="font-beatrice-deck font-light max-lg:hidden relative z-99">
          <ol className="flex gap-5">
            {ITEMS_NAVBAR.map((item, idx) => (
              <li
                key={idx}
                className={`${
                  location === item.href ? "text-black" : "text-gray-400"
                }`}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="absolute right-0 left-0 flex justify-center">
        <Image src={"/logo.svg"} width={35} height={35} alt="Lumina logo" />
      </div>
      <div className="flex justify-end relative z-99">
        <ol className="flex items-center gap-4 max-sm:gap-2">
          <li className="bg-black p-3 rounded-full max-xl:hidden">
            <Link href={"/favourite"}>
              <HeartIcon width="15" height="15" />
            </Link>
          </li>
          <li className="bg-black p-3 rounded-full relative">
            <Link href={"/cart"}>
              <CartIcon width="15" height="15" />
              <span className="absolute text-white bg-red-500 w-6 h-6 rounded-full p-1 text-center text-[10px] text-nowrap -top-3 -right-2">
                {Math.min(totalQuantity, 9)}{totalQuantity > 9 && "+"}
              </span>
            </Link>
          </li>
          <li className="bg-black p-3 rounded-full">
            <Link href={"/account"}>
              <UserIcon width="15" height="15" />
            </Link>
          </li>
        </ol>
      </div>
    </header>
  );
};

export default Header;
