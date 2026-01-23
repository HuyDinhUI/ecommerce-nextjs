"use client";

import { useUIStore } from "@/store/ui.store";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Sidebar = () => {
  const {isSidebar, setOpen} = useUIStore()
  const location = usePathname();
  return (
    <>
      <div
        className={clsx(
          "z-9999 top-0 bottom-0 left-0 right-0 bg-black/20",
          !isSidebar ? "hidden" : "fixed"
        )}
        onClick={() => setOpen(false, "sidebar")}
      ></div>

      <div
        className={clsx(
          "fixed z-9999 top-0 bottom-0 left-0 w-70 bg-black transition-transform duration-500 p-10",
          isSidebar ? "translate-x-0" : "-translate-x-100"
        )}
      >
        <ol className="flex flex-col gap-5 mt-5">
          {ITEMS_NAVBAR.map((item, idx) => (
            <li
              onClick={() => setOpen(false, "sidebar")}
              key={idx}
              className={`${
                location === item.href ? "text-white" : "text-gray-400"
              }`}
            >
              <Link href={item.href} className="text-2xl font-beatrice-deck font-bold">
                {item.name}
              </Link>
              <div className={clsx("bg-white h-1 transition-all", location === item.href ? 'w-full' : 'w-0')}></div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Sidebar;
