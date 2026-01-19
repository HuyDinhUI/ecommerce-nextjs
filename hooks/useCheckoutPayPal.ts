"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckoutPayload, CheckoutState } from "@/types/checkout.type";
import { OrderService } from "@/services/order-service";
import { PayPalService } from "@/services/paypal-service";

export function useCheckout() {
  const queryClient = useQueryClient();

  const [state, setState] = useState<CheckoutState>("IDLE");
  const [orderId, setOrderId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 1️⃣ Create Order
  const createOrderMutation = useMutation({
    mutationFn: OrderService.createOrder,
    onMutate: () => setState("CREATING_ORDER"),
  });

  // 2️⃣ Create PayPal Order
  const createPaypalOrderMutation = useMutation({
    mutationFn: PayPalService.createPaypalOrder,
    onMutate: () => setState("CREATING_PAYMENT"),
  });

  // 3️⃣ Capture Payment
  const capturePaypalMutation = useMutation({
    mutationFn: PayPalService.capturePaypalOrder,
    onMutate: () => setState("CAPTURING_PAYMENT"),
    onSuccess: () => {
      setState("SUCCESS");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  // ===== PUBLIC API =====

  const startCheckout = async (payload: CheckoutPayload) => {
    try {
      setError(null);

      // Create Order DB
      const order = await createOrderMutation.mutateAsync(payload);
      setOrderId(order.payload.orderId);

      // Create PayPal Order
      const paypal = await createPaypalOrderMutation.mutateAsync(order.payload.orderId);
      return paypal.payload.id; // trả cho PayPalButtons
    } catch (err: any) {
      setState("FAILED");
      setError(err.message);
      throw err;
    }
  };

  const capturePayment = async (paypalOrderId: string) => {
    try {
      await capturePaypalMutation.mutateAsync(paypalOrderId);
    } catch (err: any) {
      setState("FAILED");
      setError(err.message);
      throw err;
    }
  };

  const reset = () => {
    setState("IDLE");
    setOrderId(null);
    setError(null);
  };

  return {
    // actions
    startCheckout,
    capturePayment,
    reset,

    // state
    state,
    orderId,
    error,

    // loading flags
    isLoading:
      createOrderMutation.isPending ||
      createPaypalOrderMutation.isPending ||
      capturePaypalMutation.isPending,
  };
}
