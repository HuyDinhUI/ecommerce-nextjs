"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { SearchIcon } from "@/icon";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const InputSearch = ({ classname }: { classname?: string }) => {
  const params = useSearchParams();
  const q = new URLSearchParams(params.toString());
  const ref = useRef<HTMLDivElement>(null);
  const [keyword, setKeyword] = useState<string>(params.get("q") ?? "");
  const debounce = useDebounce(keyword, 500);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (debounce !== "") {
      q.set("q", debounce);
    } else {
      q.delete("q");
    }
    router.push(`${pathname}?${q.toString()}`);
  }, [debounce, pathname, router]);
  
  return (
    <div ref={ref} className={`relative h-full ${classname}`}>
      <form action="/shop" className="bg-black/10 p-3 flex justify-between items-center h-full">
        <SearchIcon />
        <div className="flex-1 px-2 flex items-center">
          <input
            name="q"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="outline-none w-full"
          ></input>
          <div className="w-10">
            <Button
              onClick={() => setKeyword("")}
              className={`${keyword ? "block" : "hidden"}`}
              size="sm"
              variant="transparent"
              icon={<IoClose />}
            />
          </div>
        </div>
        <span className="text-right font-beatrice-deck font-light opacity-66">
          Search
        </span>
      </form>
    </div>
  );
};
