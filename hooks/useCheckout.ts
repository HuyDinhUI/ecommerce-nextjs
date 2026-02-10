"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckoutState } from "@/types/checkout.type";
import { OrderService } from "@/services/order-service";
import { PayPalService } from "@/services/paypal-service";
import { toast } from "@/components/ui/toast";
import useCart from "./useCart";
import { CreateOrderPayload } from "@/types/order.type";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { handleClearCart } = useCart();
  const [state, setState] = useState<CheckoutState>("IDLE");
  const [orderId, setOrderId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const createOrderMutation = useMutation({
    mutationFn: OrderService.createOrder,
    onMutate: () => {
      setState("CREATING_ORDER");
      setError(null);
    },
    onError: (err) => {
      setState("FAILED");
      setError(err.message);
      toast.error(err.message);
    },
  });

  const createPaypalOrderMutation = useMutation({
    mutationFn: PayPalService.createPaypalOrder,
    onMutate: () => setState("CREATING_PAYMENT"),
  });

  const capturePaypalMutation = useMutation({
    mutationFn: PayPalService.capturePaypalOrder,
    onMutate: () => setState("CAPTURING_PAYMENT"),
    onError: (err) => {
      setState("FAILED");
      setError(err.message);
    },
  });

  const startCheckoutWithCod = async (
    payload: CreateOrderPayload,
  ) => {
    await createOrderMutation.mutateAsync(payload, {
      onSuccess: (order) => {
        setOrderId(order.payload.orderId);
        handleClearCart();
        toast.success("Create order is success!");
        window.location.href = `/orders/${order.payload.orderId}`
      },
    });
  };

  const startCheckoutWithPayPal = async (payload: CreateOrderPayload) => {
    try {
      setError(null);

      const order = await createOrderMutation.mutateAsync(payload);
      setOrderId(order.payload.orderId);

      const paypal = await createPaypalOrderMutation.mutateAsync(
        order.payload.orderId,
      );
      return paypal.payload.id;
    } catch (err: any) {
      setState("FAILED");
      setError(err.message);
      toast.error(err.message);
      throw err;
    }
  };

  const capturePayment = async (paypalOrderId: string) => {
    await capturePaypalMutation.mutateAsync(paypalOrderId, {
      onSuccess: () => {
        setState("SUCCESS");
        handleClearCart();
        queryClient.invalidateQueries({ queryKey: ["orders"] });
      },
    });
  };

  const reset = () => {
    setState("IDLE");
    setOrderId(null);
    setError(null);
  };

  return {
    startCheckoutWithCod,
    startCheckoutWithPayPal,
    capturePayment,
    reset,

    state,
    orderId,
    error,

    isLoading:
      createOrderMutation.isPending ||
      createPaypalOrderMutation.isPending ||
      capturePaypalMutation.isPending,
  };
}
