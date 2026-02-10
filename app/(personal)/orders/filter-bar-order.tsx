"use client";

import { Dropdown } from "@/components/ui/dropdown";
import { useFilter } from "@/hooks/useFilter";

const DATA_STATUS_ORDER = [
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Confirmed",
    value: "confirmed",
  },
  {
    label: "Processing",
    value: "processing",
  },
  {
    label: "Shipped",
    value: "shipped",
  },
  {
    label: "Delivered",
    value: "delivered",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
];

const DATA_SORT_ORDER = [
  {
    label: "Nearest",
    value: "desc",
  },
  {
    label: "Farthest",
    value: "asc",
  },
];

const FilterBarOrder = () => {
  const { getParams, setParams } = useFilter();
  return (
    <>
      <div className="flex max-xl:flex-wrap gap-2 mb-5">
        <Dropdown
          options={DATA_STATUS_ORDER}
          onChange={(v) => setParams("status", v)}
          value={getParams("status")[0]}
          placeholder="Status"
        />
        <Dropdown
          options={DATA_SORT_ORDER}
          onChange={(v) => setParams("sort", v)}
          value={getParams("sort")[0]}
          placeholder="Order by"
        />
      </div>
    </>
  );
};

export default FilterBarOrder;
