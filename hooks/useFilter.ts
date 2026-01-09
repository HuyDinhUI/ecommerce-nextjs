"use client";

import { toggleFilterValue } from "@/utils/filter";
import { useSearchParams, useRouter } from "next/navigation";


interface UseFilterReturn {
  onToggle: (key: string, value: string) => void;
  selectedSizes: string[];
  selectedAvailability: string[];
  selectedColors: string[];
  selectedCategory: string[];
  selectedTag: string[];
}

export const useFilter = (): UseFilterReturn => {
  const router = useRouter();
  const params = useSearchParams();

  const selectedSizes = params.get("size")?.split(",") ?? [];
  const selectedAvailability = params.get("availability")?.split(",") ?? [];
  const selectedColors = params.get("color")?.split(",") ?? [];
  const selectedCategory = params.get("category")?.split(",") ?? [];
  const selectedTag = params.get("tag")?.split(",") ?? [];

  const onToggle = (key: string, value: string) => {
    const q = new URLSearchParams(params.toString());
    toggleFilterValue(q, key, value);
    router.push(`/shop?${q.toString()}`);
  };

  return {
    onToggle,
    selectedAvailability,
    selectedCategory,
    selectedColors,
    selectedSizes,
    selectedTag,
  };
};
