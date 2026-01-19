export interface Coupon {
  code: string;
  discountAmount: number;
}

export interface Checkout {
  coupon: Coupon;
  shippingFee: number;
}

export type CheckoutState =
  | "IDLE"
  | "CREATING_ORDER"
  | "CREATING_PAYMENT"
  | "CAPTURING_PAYMENT"
  | "SUCCESS"
  | "FAILED";

interface ItemCheckout {
  productId: string;
  sku: string;
  quantity: number;
}

export interface CheckoutPayload {
  items: ItemCheckout[];
  shippingMethod: "standard" | "express";
  couponCode: string;
}
