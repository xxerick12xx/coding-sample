import { z } from "zod";

export const FormFieldSchema = z.object({
  given_name: z.string().min(1, "required field"),
  last_name: z.string().min(1, "required field"),
  email: z.string().min(1, "required field").email(),
  phone: z.string().min(1, "required field"),
  house_number: z.string().min(1, "required field"),
  street: z.string().min(1, "required field"),
  suburb: z.string().min(1, "required field"),
  state: z.string().min(1, "required field"),
  postcode: z.string().min(1, "required field"),
  country: z.string().min(1, "required field"),
});

export type FormFieldsProps = z.infer<typeof FormFieldSchema>;
