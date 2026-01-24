import { RadioGroup } from "@/components/ui/radio-card/radio-card-group";
import { RadioCard } from "@/components/ui/radio-card/radio-card-item";
import { useCheckout } from "@/hooks/useCheckout";
import { CheckoutFormValues } from "@/schemas/checkout.schema";
import { useCartStore } from "@/store/cart.store";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Controller, useFormContext } from "react-hook-form";

const PaymentForm = () => {
  const form = useFormContext<CheckoutFormValues>();
  const shippingMethod = form.watch("shippingMethod");
  const paymentMethod = form.watch("paymentMethod");
  const checkout = useCheckout();
  const { CartItem } = useCartStore();
  return (
    <div className="pb-5">
      <h2 className="uppercase text-sm my-5">payment method</h2>
      <Controller
        name="paymentMethod"
        control={form.control}
        render={({ field, fieldState }) => (
          <div className="space-y-3">
            <RadioGroup>
              <RadioCard
                value="cod"
                title="Cash"
                description="Payment upon delivery"
                checked={field.value === "cod"}
                onChange={field.onChange}
              />

              <RadioCard
                value="paypal"
                title="Paypal"
                description="Payment with Paypal account"
                checked={field.value === "paypal"}
                onChange={field.onChange}
              />
            </RadioGroup>

            {fieldState.error && (
              <p className="text-sm text-red-500">{fieldState.error.message}</p>
            )}
          </div>
        )}
      />
      {paymentMethod === "paypal" && (
        <div className="mt-5">
          <PayPalButtons
            disabled={checkout.isLoading}
            createOrder={() =>
              checkout.startCheckoutWithPayPal({
                shippingMethodId: shippingMethod,
                couponCode: "",
                items: CartItem,
                paymentMethod: paymentMethod,
                address: {
                  email: form.getValues("email"),
                  phone: form.getValues("phone"),
                  fullname:
                    form.getValues("firstName") +
                    " " +
                    form.getValues("lastName"),
                  city: form.getValues("city"),
                  district: form.getValues("ward"),
                  addressLine: form.getValues("address"),
                },
              })
            }
            onApprove={(data) => checkout.capturePayment(data.orderID)}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
