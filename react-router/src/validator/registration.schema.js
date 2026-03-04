import * as z from "zod";

export const registrationShchema = z.object({
  name: z
    .string()
    .nonempty()
    .min(3, { message: "আপনি অন্তত ৩ অক্ষরের নাম লিখুন" }),
  email: z.string().email({ message: "Wrong Email Address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(8, { message: "Password must be at most 8 characters long" }),
});
