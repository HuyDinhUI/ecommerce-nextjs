"use client";

import { Dropdown } from "@/components/ui/dropdown";
import FieldError from "@/components/ui/form-field/field-error";
import { Input } from "@/components/ui/input";
import { CheckoutFormValues } from "@/schemas/checkout.schema";
import { parseVnLocations } from "@/utils/parseLocationJson";
import { useFormContext, Controller } from "react-hook-form";

import vnLocationData from "@/dataset/vn_locations.json";
import { buildDropdownMaps } from "@/utils/buildDropdownMap";

const provinces = parseVnLocations(
  (vnLocationData as any).vn_locations ??
    (vnLocationData as any).default?.vn_locations ??
    (vnLocationData as any)
);

const InformationForm = () => {
  const { provinceOptions, wardMap } = buildDropdownMaps(provinces);
  const form =
    useFormContext<
      Omit<CheckoutFormValues, "shippingMethod" & "paymentMethod">
    >();

  const selectedDistrict = form.watch("city");
  const wards = wardMap.get(selectedDistrict) ?? [];

  return (
    <div>
      <div>
        <h2 className="uppercase text-sm my-5">contact infor</h2>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="grid gap-2 mb-2">
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <FieldError message={fieldState.error?.message ?? ""} />
            </div>
          )}
        />
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="grid gap-2 mb-2">
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                placeholder="Phone"
                autoComplete="phone"
              />
              <FieldError message={fieldState.error?.message ?? ""} />
            </div>
          )}
        />
      </div>

      <div className="mt-10">
        <h2 className="uppercase text-sm my-5">shipping address</h2>
        <div className="grid grid-cols-2 gap-2">
          <Controller
            name="firstName"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="grid gap-2 mb-2">
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  id={field.name}
                  placeholder="First Name"
                  autoComplete="firstName"
                />
                <FieldError message={fieldState.error?.message ?? ""} />
              </div>
            )}
          />
          <Controller
            name="lastName"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="grid gap-2 mb-2">
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  id={field.name}
                  placeholder="Last Name"
                  autoComplete="lastName"
                />
                <FieldError message={fieldState.error?.message ?? ""} />
              </div>
            )}
          />
        </div>
        <Controller
          name="city"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="grid gap-2 mb-2">
              <Dropdown
                aria-invalid={fieldState.invalid}
                value={field.value}
                onChange={field.onChange}
                options={provinceOptions}
                placeholder="City / Province"
              />
              <FieldError message={fieldState.error?.message ?? ""} />
            </div>
          )}
        />
        <Controller
          name="ward"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="grid gap-2 mb-2">
              <Dropdown
                aria-invalid={fieldState.invalid}
                value={field.value}
                onChange={field.onChange}
                options={wards}
                placeholder="Ward / District"
              />
              <FieldError message={fieldState.error?.message ?? ""} />
            </div>
          )}
        />
        <Controller
          name="address"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="grid gap-2 mb-2">
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                placeholder="Address"
                autoComplete="address"
              />
              <FieldError message={fieldState.error?.message ?? ""} />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default InformationForm;
