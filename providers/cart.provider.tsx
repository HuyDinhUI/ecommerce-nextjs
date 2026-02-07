"use client";

import { CartService } from "@/services/cart-service";
import { useCartStore } from "@/store/cart.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function CartHydration() {
  const setCart = useCartStore((s) => s.setCart);

  const { data } = useQuery({
    queryKey: ["cart-items"],
    queryFn: () => CartService.fetchCard(),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    setCart(data?.payload.data ?? []);
  }, [data, setCart]);

  return null;
}
