import {
  FormFieldSchema,
  type FormFieldsProps,
} from "./create-referral-page.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useCreateReferralHook = () => {
  return useForm<FormFieldsProps>({
    resolver: zodResolver(FormFieldSchema),
  });
};
