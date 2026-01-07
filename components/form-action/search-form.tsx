"use client"

import { useDebounce } from "@/hooks/useDebounce";
import { SearchIcon } from "@/icon";
import { useEffect, useRef, useState } from "react";

export const InputSearch = () => {
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [keyword, setKeyword] = useState<string>("");
  const debounce = useDebounce(keyword, 500);

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
    if (!keyword) return;

    const handleSearch = async () => {};

    handleSearch();
  }, [debounce, keyword]);
  return (
    <div
      ref={ref}
      className="rounded-sm relative"
    >
      <div className="bg-black/10 p-3 flex justify-between items-center">
        <SearchIcon />
        <div className="flex-1 px-2">
            <input
              value={keyword}
              onFocus={() => setOnSearch(true)}
              onChange={(e) => setKeyword(e.target.value)}
              className="outline-none w-full"
            ></input>
        </div>
        <span className="text-right font-beatrice-deck font-light opacity-66">Search</span>
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
