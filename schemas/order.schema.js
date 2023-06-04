import { z } from "zod";

export const orderSchema = z.object({
  customer: z.string({
    required_error: "customer is required",
  }),
  date: z.coerce.date({
    required_error: "date is required",
  }),
  load_tender_no: z.string({
    required_error: "load_tender_no is required",
  }),
  rate: z.number({
    required_error: "rate is required",
  }),
  country_usd_cad: z.boolean({
    required_error: "country_usd_cad is required",
  }),
  csa_fast_load: z.boolean({
    required_error: "csa_fast_load is required",
  }),
  bounded_shipment: z.boolean({
    required_error: "csa_fast_load is required",
  }),
  high_priority_load: z.boolean({
    required_error: "high_priority_load is required",
  }),
  team_load: z.boolean({
    required_error: "team_load is required",
  }),
  single_load: z.boolean({
    required_error: "single_load is required",
  }),
  dangerous_goods: z.boolean({
    required_error: "dangerous_goods is required",
  }),
  city_driver_required: z.boolean({
    required_error: "team_load is required",
  }),
  trap_required: z.boolean({
    required_error: "single_load is required",
  }),
  service_type: z.string({
    required_error: "service_type is required",
  }),
  measurement: z.string({
    required_error: "measurement is required",
  }),
  description: z.string({
    required_error: "description is required",
  }),
  order_type: z.string({
    required_error: "type is required",
  }),
  qty: z.number({
    required_error: "qty is required",
  }),
  weight: z.string({
    required_error: "weight is required",
  }),
  contact_type: z.string({
    required_error: "contact_type is required",
  }),
});
