import { z } from "zod";

export const companySchema = z.object({
  user_id: z.string({
    required_error: "user_id is required",
  }),
  name: z.string({
    required_error: "name is required",
  }),
  email_address: z
    .string({
      required_error: "email_address is required",
    })
    .email({
      message: "email_address is not valid",
    }),
  street_no: z.string({
    required_error: "street_no is required",
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
  CVOR_no: z.string({
    required_error: "CVOR_no is required",
  }),
  DOT_no: z.string({
    required_error: "DOT_no is required",
  }),
  MC_no: z.string({
    required_error: "MC_no is required",
  }),
  SCAC_code: z.string({
    required_error: "SCAC_code is required",
  }),
  carrier_code: z.string({
    required_error: "carrier_code is required",
  }),
  CTPAT_no: z.string({
    required_error: "CTPAT_no	 is required",
  }),
  PIP_no: z.string({
    required_error: "PIP_no is required",
  }),
  bill_of_lading: z.string({
    required_error: "bill_of_lading is required",
  }),
  PIP_no: z.string({
    required_error: "PIP_no is required",
  }),
  customer_invoice: z.string({
    required_error: "customer_invoice is required",
  }),
  logo: z.string({
    required_error: "logo is required",
  }),
});
