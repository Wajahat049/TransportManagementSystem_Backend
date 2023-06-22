import { z } from "zod";

export const documentSchema = z.object({
  name: z.string({
    required_error: "document_name is required",
  }),
  document: z.string({
    required_error: "document is required",
  }),
});
