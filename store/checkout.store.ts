"use client";

import { Checkout, Coupon } from "@/types/checkout.type";
import { create } from "zustand";

interface CheckoutState extends Checkout {
  setCoupon: (coupon: Coupon) => void;
  setShippingFee: (fee: number) => void;
  reset: () => void;
}

export const useCheckoutStore = create<CheckoutState>()((set) => ({
  coupon: {
    code: "",
    discountAmount: 0,
  },
  shippingFee: 10,

  setCoupon: (coupon: Coupon) => {
    set({ coupon: coupon });
  },

  setShippingFee(fee) {
    set({ shippingFee: fee });
  },

  reset() {
    set({
      coupon: {
        code: "",
        discountAmount: 0,
      },
      shippingFee: 0,
    });
  },
}));
