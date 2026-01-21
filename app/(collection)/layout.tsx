"use client";

import { Separator } from "@/components/ui/separator";
import { HeartIcon } from "@/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CollectionLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="md:p-10 max-md:p-5 relative">
      <div className="max-w-200">
        <div>
          <ol className="flex items-center space-x-4 uppercase text-sm">
            <li
              className={`${
                pathname === "/cart" ? "opacity-100 font-bold" : "opacity-50"
              } flex items-center space-x-2`}
            >
              <Link href={"/cart"}>shopping bag</Link>
            </li>
            <li
              className={`${
                pathname === "/favourite"
                  ? "opacity-100 font-bold"
                  : "opacity-50"
              } flex items-center space-x-2`}
            >
              <div className="bg-white p-2">
                <HeartIcon width="15" height="15" fill="black" />
              </div>
              <Link href={"/favourite"}>favouries</Link>
            </li>
          </ol>
          <Separator classname="my-4 border-gray-300" />
        </div>
        {children}
      </div>
    </div>
  );
};
export default CollectionLayout;
