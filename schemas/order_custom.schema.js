import { z } from "zod";

export const customSchema = z.object({
  custom_broker: z.string({
    required_error: "custom_broker is required",
  }),
  part_of_entry: z.string({
    required_error: "part_of_entry is required",
  }),
  declare_value: z.string({
    required_error: "part_of_entry is required",
  }),
  currency: z.string({
    required_error: "custom_broker is required",
  }),
  po_no: z.string({
    required_error: "part_of_entry is required",
  }),
  ref_no: z.string({
    required_error: "part_of_entry is required",
  }),
  load_tender_no: z.string({
    required_error: "load_tender_no is required",
  }),
  seal_no: z.string({
    required_error: "part_of_entry is required",
  }),
  pars_no: z.string({
    required_error: "part_of_entry is required",
  }),
});
