"use client";

import { CheckoutFormValues, CheckoutSchema } from "@/schemas/checkout.schema";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
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

const FormCheckout = () => {
  const [step, setStep] = useState<"information" | "shipping" | "payment">(
    "information"
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
      shippingMethod: "standard",
      paymentMethod: "cod",
    },
    shouldUnregister: false,
  });

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

    // const valid = await form.trigger(fieldMap[step]);
    // if (!valid) return;

    if (step === "information") setStep("shipping");
    if (step === "shipping") setStep("payment");
  };

  const submitCheckout = (data: CheckoutFormValues) => {
    console.log("checkout data:", data);
  };
  return (
    <div className="pe-20">
      <FormProvider {...form}>
        <h1 className="text-2xl font-beatrice-deck uppercase">Checkout</h1>
        <form onSubmit={form.handleSubmit(submitCheckout)}>
          <div className="mt-3">
            <Tabs value={step} onValueChange={setStep}>
              <TabsList classname="gap-10">
                <TabsTrigger value="information" title="Information" />
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

            {step !== "payment" ? (
              <Button
                title={step === "information" ? "Shipping" : "Payment"}
                type="button"
                onClick={next}
                size="lg"
                className="flex-row-reverse justify-between bg-gray-300 text-sm font-beatrice-deck font-light"
                icon={<ArrowLongIcon />}
              ></Button>
            ) : (
              <Button
                type="submit"
                size="lg"
                className="bg-gray-300 text-sm justify-center"
                title="ORDER"
              ></Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormCheckout;
