import { z } from "zod";

export const customerSchema = z.object({
  name: z.string({
    required_error: "customer_name is required",
  }),
  contact_name: z.string({
    required_error: "contact_name is required",
  }),
  email_address: z
    .string({
      required_error: "email_address is required",
    })
    .email({
      message: "email_address is not valid",
    }),
  phone_no: z.number({
    required_error: "phone_no is required",
  }),
  street_no: z.string({
    required_error: "street_no is required",
  }),
  street_name: z.string({
    required_error: "street_name is required",
  }),
  city: z.string({
    required_error: "city is required",
  }),
  postal_or_zip_code: z.string({
    required_error: "postal_or_zip_code is required",
  }),
  province: z.string({
    required_error: "province is required",
  }),
  country: z.string({
    required_error: "country is required",
  }),
  payment_net_days: z.number({
    required_error: "net_days is required",
  }),
});
