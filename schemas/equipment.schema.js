import { z } from "zod";

export const equipmentSchema = z.object({
  unit_no: z.string({
    required_error: "unit_no is required",
  }),
  year: z.number({
    required_error: "year is required",
  }),
  make: z.string({
    required_error: "make is required",
  }),
  model: z.string({
    required_error: "model is required",
  }),
  vin_no: z.string({
    required_error: "vin_no is required",
  }),
  odometer: z.string({
    required_error: "odometer is required",
  }),
  plate_no: z.string({
    required_error: "plate_no is required",
  }),
  annual_safety_inspection_date: z.coerce.date({
    required_error: "annual_safety_inspection_date is required",
  }),
  vehicle_type: z.string({
    required_error: "vehicle_type is required",
  }),
  asset_type: z.string({
    required_error: "asset_type is required",
  }),

  trailer_type: z.string({
    required_error: "trailer_type is required",
  }),
  trailer_size: z.string({
    required_error: "trailer_size is required",
  }),
  reefer_hours: z.time({
    required_error: "reefer_hours is required",
  }),

  emergency_contact_no: z.number({}).optional().nullable(),
  emergency_contact_name: z.string({}).optional().nullable(),
  company_name: z.string({}).optional().nullable(),
  HST_no: z.string({}).optional().nullable(),
  pay_HST: z.string({}).optional().nullable(),
  pay_by: z.string({}).optional().nullable(),
  salary: z.number({}).optional().nullable(),
  payment_frequency: z.string({}).optional().nullable(),
  hourly_rate: z.number({}).optional().nullable(),
  mileage_rate: z.number({}).optional().nullable(),
  last_pay_period: z.string({}).optional().nullable(),
  last_payment_date: z.coerce.date({}).optional().nullable(),
  gross_payroll: z.number({}).optional().nullable(),
  cash_advance_balance: z.number({}).optional().nullable(),
  monthly_deductions: z.number({}).optional().nullable(),
  license: z.string({}).optional().nullable(),
  passport: z.string({}).optional().nullable(),
  other_documents: z.string({}).optional().nullable(),
});
