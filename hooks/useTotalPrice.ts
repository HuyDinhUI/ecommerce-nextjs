import { useCartStore } from "@/store/cart.store";
import { useCheckoutStore } from "@/store/checkout.store";

export const useTotalPrice = () => {
  const { subtotal } = useCartStore();
  const { shippingFee, coupon } = useCheckoutStore();

  const discount = coupon?.discountAmount ?? 0;
  return Math.max(subtotal + shippingFee - discount, 0);
};
