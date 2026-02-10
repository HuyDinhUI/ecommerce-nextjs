import { CreateOrderPayload } from "@/types/order.type";

export default function calculateTotal(
  items: CreateOrderPayload,
  shippingFee: number,
) {
  const subtotal = items.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const totalQuantity = items.items.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  const total = Math.max(subtotal + shippingFee, 0);

  return {
    subtotal,
    totalQuantity,
    total,
  };
}
