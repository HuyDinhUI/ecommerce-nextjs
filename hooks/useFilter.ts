"use client";

import { toggleFilterValue } from "@/utils/filter";
import { useSearchParams, useRouter, usePathname } from "next/navigation";


interface UseFilterReturn {
  onToggle: (key: string, value: string) => void;
  setParams: (key: string, value: string) => void
  getParams: (key: string) => string[]
  removeParams: (key: string) => void
}

export const useFilter = (): UseFilterReturn => {
  const pathname = usePathname()
  const router = useRouter();
  const params = useSearchParams();
  const q = new URLSearchParams(params.toString());

  const onToggle = (key: string, value: string) => {
    toggleFilterValue(q, key, value);
    router.push(`${pathname}?${q.toString()}`);
  };

  const setParams = (key: string, value: string) => {
    q.set(key, value)
    router.push(`${pathname}?${q.toString()}`);
  }

  const getParams = (key: string) => {
    return params.get(key)?.split(",") ?? []
  }

  const removeParams = (key: string) => {
    q.delete(key)
  }
 
  return {
    onToggle,
    setParams,
    getParams,
    removeParams,
  };
};
