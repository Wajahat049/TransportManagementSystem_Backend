import { z } from "zod";

export const customerSchema = z.object({
  customer_name: z.string({
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
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
  //   gender: z.string({
  //     required_error: "gender is required",
  //   }),
  //   date_of_birth: z.coerce.date({
  //     required_error: "date_of_birth is required",
  //   }),
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
  net_days: z.string({
    required_error: "net_days is required",
  }),
});
