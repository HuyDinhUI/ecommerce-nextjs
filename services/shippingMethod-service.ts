import { ShippingMethodDTO } from "@/types/shippingMethod.type";
import http from "@/utils/http";

interface IShippingMethod {
  fetchShippingMethod(): Promise<{
    status: number;
    payload: { data: ShippingMethodDTO[] };
  }>;

  calculateFee(payload: { code: string; codeAddress: number }): Promise<{
    status: number;
    payload: { fee: number };
  }>;
}

class ShippingMethod implements IShippingMethod {
  fetchShippingMethod(): Promise<{
    status: number;
    payload: { data: ShippingMethodDTO[] };
  }> {
    return http.get<{ data: ShippingMethodDTO[] }>("/shippingMethod");
  }

  calculateFee(payload: {
    code: string;
    codeAddress: number;
  }): Promise<{ status: number; payload: { fee: number } }> {
    return http.post<{ fee: number }>("/shippingMethod/fee", payload);
  }
}

export const ShippingMethodService = new ShippingMethod();
