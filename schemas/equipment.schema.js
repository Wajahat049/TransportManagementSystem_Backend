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

  reefer_hours: z.string({}).optional().nullable(),
  trailer_size: z.string({}).optional().nullable(),
  trailer_type: z.string({}).optional().nullable(),
  lessor_name: z.string({}).optional().nullable(),
  lessor_street_no: z.string({}).optional().nullable(),
  lessor_street_name: z.string({}).optional().nullable(),
  lessor_city: z.string({}).optional().nullable(),
  lessor_postal_code: z.string({}).optional().nullable(),
  lesor_province: z.string({}).optional().nullable(),
  lessor_country: z.string({}).optional().nullable(),
  lessor_contact_name: z.string({}).optional().nullable(),
  lessor_email: z.string({}).optional().nullable(),
  lessor_phone_no: z.number({}).optional().nullable(),
  lessor_start_date: z.string({}).optional().nullable(),
  lessor_end_date: z.string({}).optional().nullable(),
  lessor_payment_before_tax: z.number({}).optional().nullable(),
  lessor_down_payment: z.number({}).optional().nullable(),
});
