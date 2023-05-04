import { z } from "zod";

export const driverSchema = z.object({
  first_name: z.string({
    required_error: "first_name is required",
  }),
  last_name: z.string({
    required_error: "last_name is required",
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
  gender: z.string({
    required_error: "gender is required",
  }),
  date_of_birth: z.coerce.date({
    required_error: "date_of_birth is required",
  }),
  phone_no: z.number({
    required_error: "phone_no is required",
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
  license_no: z.string({
    required_error: "license_no is required",
  }),
  license_class: z.string({
    required_error: "license_class is required",
  }),
  license_country: z.string({
    required_error: "license_country is required",
  }),
  license_province: z.string({
    required_error: "license_province is required",
  }),
  license_date_of_issuance: z.coerce.date({
    required_error: "license_date_of_issuance is required",
  }),
  license_date_of_expiry: z.coerce.date({
    required_error: "license_date_of_expiry is required",
  }),
  driver_type: z.string({
    required_error: "driver_type is required",
  }),
  pay_type: z.string({
    required_error: "pay_type is required",
  }),
  driver_status: z.string({
    required_error: "driver_status is required",
  }),
  last_medical_completed_date: z.coerce.date({
    required_error: "last_medical_completed is required",
  }),
  medical_due_date: z.coerce.date({
    required_error: "medical_due_date is required",
  }),
  last_drug_test_completed_date: z.coerce.date({
    required_error: "last_drug_test_completed is required",
  }),
  drug_test_due_date: z.coerce.date({
    required_error: "last_drug_test_completed is required",
  }),
});
