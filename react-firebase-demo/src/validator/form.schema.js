import z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty()
    .min(5, { message: "Name atleast requird 5 characters long" }),

  phone: z
    .string()
    .trim()
    .nonempty()
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits"),

  email: z.string().email({ message: "Wrong Email Address" }),
});
