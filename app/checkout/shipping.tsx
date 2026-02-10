import { RadioGroup } from "@/components/ui/radio-card/radio-card-group";
import { RadioCard } from "@/components/ui/radio-card/radio-card-item";
import { CheckoutFormValues } from "@/schemas/checkout.schema";
import { ShippingMethodService } from "@/services/shippingMethod-service";
import { useCheckoutStore } from "@/store/checkout.store";
import { descriptionShippingMethod } from "@/utils/formatter";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

const ShippingForm = () => {
  const form =
    useFormContext<Pick<CheckoutFormValues, "shippingMethod" | "city">>();
  const selectedMethod = form.watch("shippingMethod");
  const address = form.watch("city");

  const { data } = useQuery({
    queryKey: ["shipping-method"],
    queryFn: ShippingMethodService.fetchShippingMethod,
    staleTime: 1000 * 60 * 5,
  });

  const { setShippingFee } = useCheckoutStore();
  const { mutateAsync } = useMutation({
    mutationFn: ShippingMethodService.calculateFee,
    onSuccess: (v) => setShippingFee(v.payload.fee),
  });

  useEffect(() => {
    if (!selectedMethod || !address) return;

    mutateAsync({ code: selectedMethod, codeAddress: Number(address) });
  }, [selectedMethod, address, mutateAsync]);

  return (
    <div className="pb-5">
      <h2 className="uppercase text-sm my-5">shipping method</h2>
      <Controller
        name="shippingMethod"
        control={form.control}
        render={({ field, fieldState }) => (
          <div className="space-y-3">
            <RadioGroup>
              {data?.payload.data.map((item) => (
                <RadioCard
                  key={item.code}
                  value={item.code}
                  title={item.name}
                  description={descriptionShippingMethod(
                    item.estimateDaysMin,
                    item.estimateDaysMax,
                  )}
                  checked={field.value === item.code}
                  onChange={field.onChange}
                />
              ))}
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
