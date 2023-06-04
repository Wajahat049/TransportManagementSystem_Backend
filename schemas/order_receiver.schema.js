import { z } from "zod";

export const receiverSchema = z.object({
  first_name: z.string({
    required_error: "first_name is required",
  }),
  last_name: z.string({
    required_error: "last_name is required",
  }),
  date_of_birth: z.coerce.date({
    required_error: "date_of_birth is required",
  }),
  receiver_ref_no: z.number({
    required_error: "receiver_ref_no is required",
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
  date: z.coerce.date({
    required_error: "date is required",
  }),
  operating_hrs: z.number({
    required_error: "operating_hrs is required",
  }),
  type: z.string({
    required_error: "type is required",
  }),
});
