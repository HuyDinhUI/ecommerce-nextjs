import { RadioGroup } from "@/components/ui/radio-card/radio-card-group";
import { RadioCard } from "@/components/ui/radio-card/radio-card-item";
import { CheckoutFormValues } from "@/schemas/checkout.schema";
import { useCheckoutStore } from "@/store/checkout.store";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

const ShipCost = {
  standard: {
    province: 15,
    city: 10,
  },
  express: {
    province: 20,
    city: 15,
  },
};

const ShippingForm = () => {
  const form =
    useFormContext<Pick<CheckoutFormValues, "shippingMethod" | "city">>();
  const selectedMethod = form.watch("shippingMethod") as keyof typeof ShipCost;
  const address = form.watch("city");
  const typeAddress: keyof (typeof ShipCost)["standard"] =
    parseInt(address) > 16 ? "province" : "city";
  const shippingFee = ShipCost[selectedMethod]?.[typeAddress] ?? 0;
  const { setShippingFee } = useCheckoutStore();
  useEffect(() => {
    setShippingFee(shippingFee);
  }, [shippingFee, setShippingFee]);
  return (
    <div className="pb-5">
      <h2 className="uppercase text-sm my-5">shipping method</h2>
      <Controller
        name="shippingMethod"
        control={form.control}
        render={({ field, fieldState }) => (
          <div className="space-y-3">
            <RadioGroup>
              <RadioCard
                value="standard"
                title="Standard Shipping"
                description="3–5 business days"
                checked={field.value === "standard"}
                onChange={field.onChange}
              />

              <RadioCard
                value="express"
                title="Express Shipping"
                description="1–2 business days"
                checked={field.value === "express"}
                onChange={field.onChange}
              />
            </RadioGroup>

            {fieldState.error && (
              <p className="text-sm text-red-500">{fieldState.error.message}</p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default ShippingForm;
