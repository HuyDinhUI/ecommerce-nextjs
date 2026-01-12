"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { SearchIcon } from "@/icon";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

export const InputSearch = ({ classname }: { classname?: string }) => {
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [keyword, setKeyword] = useState<string>("");
  const debounce = useDebounce(keyword, 500);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOnSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!keyword) {
      const params = new URLSearchParams(window.location.search);
      params.delete("search");
      router.push(`/shop?${params.toString()}`);
      return;
    }

    router.push(`/shop?search=${debounce}`);
  }, [debounce, keyword, router]);
  return (
    <div ref={ref} className={`relative h-full ${classname}`}>
      <div className="bg-black/10 p-3 flex justify-between items-center h-full">
        <SearchIcon />
        <div className="flex-1 px-2 flex items-center">
          <input
            value={keyword}
            onFocus={() => setOnSearch(true)}
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
      </div>

      {onSearch && (
        <div className="absolute w-full max-h-100 overflow-auto py-2 bg-white dark:bg-card z-999">
          <label className="uppercase text-[13px] text-gray-500 font-bold dark:text-gray-200 px-5">
            {!keyword ? "Recent product" : "Product"}
          </label>
          <div className="mt-3"></div>
        </div>
      )}
    </div>
  );
};
