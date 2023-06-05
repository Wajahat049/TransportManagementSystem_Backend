import { z } from "zod";

export const employeeSchema = z.object({
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
  date_of_birth: z.coerce.date({
    required_error: "date_of_birth is required",
  }),
  gender: z.string({
    required_error: "gender is required",
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
  employment_type: z.string({
    required_error: "employee_type is required",
  }),
  pay_type: z.string({
    required_error: "pay_type is required",
  }),
  division: z.string({
    required_error: "division is required",
  }),
  payment_frequency: z.string({
    required_error: "payment_frequency is required",
  }),
  emergency_contact_name: z.string({
    required_error: "emergency_contact_name is required",
  }),
  emergency_contact_no: z.number({
    required_error: "emergency_contact_no is required",
  }),
  salary_rate: z.number({}).optional().nullable(),
  hourly_rate: z.number({}).optional().nullable(),
});
