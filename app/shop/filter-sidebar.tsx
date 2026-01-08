"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { toggleFilterValue } from "@/utils/filter";
import { useSearchParams, useRouter } from "next/navigation";

const DATA_SIZES = ["xs", "s", "m", "l", "xl", "2x"];

const AVAILABILITY = ["Availability", "Out Of Stack"];

const COLORS = ["black","white","blue","green"]

const FilterSidebar = () => {
  const router = useRouter();
  const params = useSearchParams();

  const selectedSizes = params.get("size")?.split(",") ?? [];
  const selectedAvailability = params.get("availability")?.split(",") ?? [];
  const selectedColors = params.get("color")?.split(",") ?? []

  const onToggle = (key: string, value: string) => {
    const q = new URLSearchParams(params.toString());
    toggleFilterValue(q, key, value)
    router.push(`/shop?${q.toString()}`);
  };

  return (
    <div className="font-beatrice-deck text-brand-black-light">
      <h1 className="">Filters</h1>
      <div className="my-5">
        <h2>Size</h2>
        <div className="flex gap-2 mt-3">
          {DATA_SIZES.map((item, idx) => (
            <Button
              key={idx}
              variant={selectedSizes.includes(item) ? "dark" :"outline"}
              title={item}
              className="uppercase text-center font-extralight"
              size="md"
              onClick={() => onToggle("size", item)}
            />
          ))}
        </div>
      </div>
      <Separator classname="border-gray-400" stroke="dashed" />
      <Collapsible label="Availability">
        {AVAILABILITY.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 mt-3">
            <Checkbox
              checked={selectedAvailability.includes(item)}
              onCheckedChange={() => onToggle("availability", item)}
            />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </Collapsible>
      <Separator classname="border-gray-400" stroke="dashed" />
      <Collapsible label="Colors">
        {COLORS.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 mt-3">
            <Checkbox
              checked={selectedColors.includes(item)}
              onCheckedChange={() => onToggle("color", item)}
            />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </Collapsible>
      <Separator classname="border-gray-400" stroke="dashed" />
    </div>
  );
};

export default FilterSidebar;
