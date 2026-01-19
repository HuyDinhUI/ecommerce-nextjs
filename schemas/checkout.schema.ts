import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

// const POSTCODE_REGEX: Record<string, RegExp> = {
//   US: /^\d{5}(-\d{4})?$/,
//   UK: /^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/i,
//   CA: /^[A-Z]\d[A-Z][ -]?\d[A-Z]\d$/i,
//   DE: /^\d{5}$/,
//   JP: /^\d{3}-\d{4}$/,
//   FR: /^\d{5}$/,
//   AU: /^\d{4}$/,
// };

// const REQUIRED_POSTCODE_COUNTRIES = new Set([
//   "US",
//   "UK",
//   "CA",
//   "DE",
//   "JP",
//   "FR",
//   "AU",
// ]);

export const CheckoutSchema = z
  .object({
    email: z.string().email(),
    phone: z
      .string()
      .trim()
      .min(10, "Phone must be at least 10 characters.")
      .max(10, "Phone must be at most 10 characters."),
    firstName: z.string().min(1, "First name is require").max(50, "First name be at most 50 characters."),
    lastName: z.string().min(1, "Last name is required").max(50, "Last name be at most 50 characters."),
    ward: z.string().min(1, "Ward is required"),
    address: z
      .string()
      .min(20, "Address must be at most 20 characters.")
      .max(50, "Address must be at most 50 characters."),
    city: z.string().min(1, "City is required"),
    postcode: z.string().optional(),
    shippingMethod: z.enum(["standard","express"]),
    paymentMethod: z.enum(["cod","paypal"])
  })
  .strict()
  .superRefine((data, ctx) => {
    const phone = parsePhoneNumberFromString(data.phone, "VN");
    // const isRequired = REQUIRED_POSTCODE_COUNTRIES.has(data.country);

    if (!phone?.isValid()) {
      ctx.addIssue({
        path: ["phone"],
        message: "Phone is invalid",
        code: z.ZodIssueCode.custom,
      });
    }

    // if (isRequired && !data.postcode) {
    //   ctx.addIssue({
    //     path: ["postcode"],
    //     message: "Postcode is required",
    //     code: z.ZodIssueCode.custom,
    //   });
    //   return;
    // }

    // if (data.postcode && regex && !regex.test(data.postcode)) {
    //   ctx.addIssue({
    //     path: ["postcode"],
    //     message: "Postcode is invalid",
    //     code: z.ZodIssueCode.custom,
    //   });
    // }
  });

export type CheckoutFormValues = z.infer<typeof CheckoutSchema>;
