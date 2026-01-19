"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FormCheckout from "./form-checkout";
import OrderDetail from "./order-detail";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const CheckoutPage = () => {
  const queryClient = new QueryClient();
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency: "USD",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <div className="xl:grid xl:grid-cols-2 md:p-10 max-sm:p-5">
          <FormCheckout />
          <OrderDetail />
        </div>
      </QueryClientProvider>
    </PayPalScriptProvider>
  );
};

export default CheckoutPage;
