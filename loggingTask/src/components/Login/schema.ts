import { t } from "i18next";
import { z } from "zod";

export const createSchema = () => {
  return z.object({
    email: z.string().email({ message: t("invalidEmail") }),
    password: z.string().min(8, { message: t("invalidPassword") }),
  });
};

export type FormData = z.infer<ReturnType<typeof createSchema>>;
