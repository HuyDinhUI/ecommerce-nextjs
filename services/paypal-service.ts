import http from "@/utils/http";

interface IPayPalService {
  createPaypalOrder(orderId: string): Promise<{ status: number; payload: any }>;
  capturePaypalOrder(
    paypalOrderId: string
  ): Promise<{ status: number; payload: any }>;
}

class PayPal implements IPayPalService {
  createPaypalOrder(
    orderId: string
  ): Promise<{ status: number; payload: any }> {
    return http.post("/paypal/create-order", { orderId });
  }

  capturePaypalOrder(
    paypalOrderId: string
  ): Promise<{ status: number; payload: any }> {
    return http.post("/paypal/capture-order", { paypalOrderId });
  }
}

export const PayPalService = new PayPal();
