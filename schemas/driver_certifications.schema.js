import { z } from "zod";

export const driverCertificateSchema = z.object({
  driver_id: z.number({
    required_error: "driver_id is required",
  }),
  certificates: z.string({
    required_error: "certificates is required",
  }),
  // user_id: z.number({
  //   required_error: "user_id is required",
  // }),
  // certificate_number: z.string({
  //   required_error: "certificate_number is required",
  // }),
  // issue_date: z.coerce.date({
  //   required_error: "issue_date is required",
  // }),
  // due_date: z.coerce.date({
  //   required_error: "due_date is required",
  // }),
});
