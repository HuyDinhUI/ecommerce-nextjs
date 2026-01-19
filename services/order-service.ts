import { CheckoutPayload } from "@/types/checkout.type";
import http from "@/utils/http";

interface IOrderService {
  createOrder(
    data: CheckoutPayload
  ): Promise<{ status: number; payload: { orderId: string } }>;
}

class Order implements IOrderService {
  createOrder(
    data: CheckoutPayload
  ): Promise<{ status: number; payload: { orderId: string } }> {
    return http.post<{ orderId: string }>(`/orders/create`, data);
  }
}

export const OrderService = new Order()