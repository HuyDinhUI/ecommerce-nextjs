import { CreateOrderPayload } from "@/types/order.type";
import http from "@/utils/http";

import { Order as OrderDTO } from "@/types/order.type";

interface IOrderService {
  getAll(params: string): Promise<{ status: number; payload: OrderDTO[] }>;
  getOne(orderId: string): Promise<{ status: number; payload: OrderDTO }>;
  createOrder(
    data: CreateOrderPayload
  ): Promise<{ status: number; payload: { orderId: string } }>;
}

class Order implements IOrderService {
  
  getAll(params: string): Promise<{ status: number; payload: OrderDTO[] }> {
    return http.get<OrderDTO[]>(`/orders?${params}`);
  }

  getOne(orderId: string): Promise<{ status: number; payload: OrderDTO }> {
    return http.get<OrderDTO>(`/orders/${orderId}`);
  }

  createOrder(
    data: CreateOrderPayload
  ): Promise<{ status: number; payload: { orderId: string } }> {
    return http.post<{ orderId: string }>(`/orders/create`, data);
  }
}

export const OrderService = new Order();
