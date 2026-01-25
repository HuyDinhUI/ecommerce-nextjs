"use client";

import { Button } from "@/components/ui/button";
import { useFilter } from "@/hooks/useFilter";

const CATEGORY = [
  "T-SHIRTS",
  "SHIRTS",
  "POLO",
  "JEANS",
  "JACKETS",
  "SHORTS",
  "COATS",
  "SUITS",
];

const FilterBar = () => {
  const { onToggle, getParams } = useFilter();

  return (
    <div className="flex gap-3 max-lg:min-w-160">
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => onToggle("tag", "new")}
          variant="transparent"
          title="NEW"
          size="sm"
          className={`${
            getParams("tag").includes("new")
              ? "ring-black font-bold"
              : "font-extralight ring-gray-300"
          } ring font-beatrice-deck w-full justify-center`}
        />
        <Button
          onClick={() => onToggle("tag", "best sellers")}
          variant="transparent"
          title="BEST SELLERS"
          size="sm"
          className={`${
            getParams("tag").includes("best sellers")
              ? "ring-black font-bold"
              : "font-extralight ring-gray-300"
          } ring font-beatrice-deck w-full justify-center`}
        />
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 flex-1">
        {CATEGORY.map((item, idx) => (
          <Button
            onClick={() => onToggle("category", item)}
            key={idx}
            title={item}
            variant="transparent"
            size="sm"
            className={`${
              getParams("category").includes(item)
                ? "ring-black font-bold"
                : "font-extralight ring-gray-300"
            } ring font-beatrice-deck w-full justify-center`}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
