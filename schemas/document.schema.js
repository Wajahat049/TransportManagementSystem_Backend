import { z } from "zod";

export const documentSchema = z.object({
  id: z.number({
    required_error: "account id is required",
  }),
  documents: z.string({
    required_error: "documents array is required",
  }),
});
