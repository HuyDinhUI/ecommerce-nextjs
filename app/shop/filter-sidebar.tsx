"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { useFilter } from "@/hooks/useFilter";
import useIsMobile from "@/hooks/useIsMobile";


const DATA_SIZES = ["xs", "s", "m", "l", "xl", "2x"];

const AVAILABILITY = ["Availability", "Out Of Stack"];

const COLORS = ["Black", "White", "Blue", "Green"];

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

const FilterSidebar = () => {
  const { isMobile } = useIsMobile();

  const {
    onToggle,
    selectedAvailability,
    selectedCategory,
    selectedColors,
    selectedSizes,
  } = useFilter();

  return (
    <div className="font-beatrice-deck text-brand-black-light">
      <div className="my-5">
        <h2>Size</h2>
        <div className="grid grid-cols-6 gap-1 mt-3">
          {DATA_SIZES.map((item, idx) => (
            <Button
              key={idx}
              variant={selectedSizes.includes(item) ? "dark" : "outline"}
              title={item}
              className="uppercase text-center font-extralight max-sm:text-[10px]"
              size={isMobile ? "sm" : "md"}
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
      <Collapsible label="Category">
        {CATEGORY.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 my-3">
            <Checkbox
              checked={selectedCategory.includes(item)}
              onCheckedChange={() => onToggle("category", item)}
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
    </div>
  );
};

export default FilterSidebar;
