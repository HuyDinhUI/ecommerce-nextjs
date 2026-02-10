"use client";

import { CheckoutFormValues, CheckoutSchema } from "@/schemas/checkout.schema";
import { useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tabs } from "@/components/ui/tabs/tabs";
import { TabsList } from "@/components/ui/tabs/tabs-list";
import { TabsTrigger } from "@/components/ui/tabs/tabs-trigger";
import { TabsContent } from "@/components/ui/tabs/tabs-content";
import InformationForm from "./information";
import ShippingForm from "./shipping";
import PaymentForm from "./payment";
import { Button } from "@/components/ui/button";
import { ArrowLongIcon } from "@/icon";
import { useCheckout } from "@/hooks/useCheckout";
import { useCartStore } from "@/store/cart.store";
import { CreateOrderPayload } from "@/types/order.type";
import Link from "next/link";

const FormCheckout = () => {
  const { startCheckoutWithCod } = useCheckout();
  const { CartItem } = useCartStore();
  const [step, setStep] = useState<"information" | "shipping" | "payment">(
    "information",
  );
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(CheckoutSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      phone: "",
      city: "",
      firstName: "",
      lastName: "",
      postcode: "",
      ward: "",
      address: "",
      shippingMethod: "#standard",
      paymentMethod: "cod",
    },
    shouldUnregister: false,
  });

  const method = useWatch({ control: form.control, name: "paymentMethod" });

  const next = async () => {
    const fieldMap: Record<typeof step, (keyof CheckoutFormValues)[]> = {
      information: [
        "email",
        "phone",
        "address",
        "city",
        "firstName",
        "lastName",
        "ward",
        "postcode",
      ],
      shipping: ["shippingMethod"],
      payment: ["paymentMethod"],
    };

    const valid = await form.trigger(fieldMap[step]);
    if (!valid) return;

    if (step === "information") setStep("shipping");
    if (step === "shipping") setStep("payment");
  };

  const submitCheckout = (data: CheckoutFormValues) => {
    const payload: CreateOrderPayload = {
      shippingMethodId: data.shippingMethod,
      couponCode: "",
      items: CartItem.map((item) => ({
        productId: item.productId,
        productSizeId: item.productSizeId,
        quantity: item.quantity,
        price: item.price,
      })),
      paymentMethod: data.paymentMethod,
      address: {
        email: form.getValues("email"),
        phone: form.getValues("phone"),
        fullname:
          form.getValues("firstName") + " " + form.getValues("lastName"),
        city: form.getValues("city"),
        district: form.getValues("ward"),
        addressLine: form.getValues("address"),
      },
    };
    startCheckoutWithCod(payload);
  };

  return (
    <div className="xl:pe-20">
      {CartItem.length > 0 ? (
        <FormProvider {...form}>
          <h1 className="text-2xl font-beatrice-deck uppercase">Checkout</h1>
          <form onSubmit={form.handleSubmit(submitCheckout)}>
            <div className="mt-3">
              <Tabs value={step} onValueChange={setStep}>
                <TabsList classname="xl:gap-10 max-xl:gap-5 max-xl:text-sm">
                  <TabsTrigger
                    disable={step !== "information"}
                    value="information"
                    title="Information"
                  />
                  <TabsTrigger
                    disable={step !== "shipping"}
                    value="shipping"
                    title="Shipping"
                  />
                  <TabsTrigger
                    disable={step !== "payment"}
                    value="payment"
                    title="Payment"
                  />
                </TabsList>

                <TabsContent value="information">
                  <InformationForm />
                </TabsContent>
                <TabsContent value="shipping">
                  <ShippingForm />
                </TabsContent>
                <TabsContent value="payment">
                  <PaymentForm />
                </TabsContent>
              </Tabs>
            </div>
            <div className="grid grid-cols-2 gap-5 justify-end">
              {step !== "information" && (
                <Button
                  title={step === "payment" ? "Shipping" : "Information"}
                  type="button"
                  variant="outline"
                  size="lg"
                  className="text-sm justify-center font-beatrice-deck font-light"
                  onClick={() =>
                    setStep(step === "payment" ? "shipping" : "information")
                  }
                ></Button>
              )}

              {step !== "payment" && (
                <Button
                  title={step === "information" ? "Shipping" : "Payment"}
                  type="button"
                  onClick={next}
                  size="lg"
                  className="flex-row-reverse justify-between bg-gray-300 text-sm font-beatrice-deck font-light"
                  icon={<ArrowLongIcon />}
                ></Button>
              )}
              {step === "payment" && method === "cod" && (
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gray-300 text-sm justify-center"
                  title="Checkout"
                ></Button>
              )}
            </div>
          </form>
        </FormProvider>
      ) : (
        <div className="flex flex-col justify-center items-center h-100">
          <p className="text-gray-600 italic">
            There are currently no products in the shopping cart.
          </p>
          <Link href={"/shop"} className="underline mt-5">
            Shopping now
          </Link>
        </div>
      )}
    </div>
  );
};

export default FormCheckout;
