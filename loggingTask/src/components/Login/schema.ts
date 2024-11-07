import { z } from "zod";

// const passwordRegex = new RegExp(
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
// );

export type FormData = z.infer<typeof schema>;

export const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  // .regex(passwordRegex, {
  //   message:
  //     "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
  // }),
});
