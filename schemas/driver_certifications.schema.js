import { z } from "zod";

export const driverCertificateSchema = z.object({
  driver_id: z.number({
    required_error: "driver_id is required",
  }),
  certificates: z.string({
    required_error: "certificates is required",
  }),
});
