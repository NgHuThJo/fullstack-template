import { z } from "zod";

export const numericStringSchema = z
  .string()
  .trim()
  .regex(/^\d+(\.\d+)?$/, "String is not numeric");
export const positiveNumberSchema = z
  .number()
  .positive("Number is not positive");
export const nonnegativeNumberSchema = z
  .number()
  .nonnegative("Number is negative");
export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email("Email address is invalid");
export const nonemptyStringSchema = z.string().trim().min(1, "String is empty");
export const nameSchema = z
  .string()
  .trim()
  .min(1, "Name is empty")
  .max(50, "Name is longer than 50 characters");
export const numericStringToNumberSchema = numericStringSchema.transform(
  (value) => {
    const convertedValue = Number(value);

    if (!Number.isFinite(convertedValue)) {
      throw new Error(`${convertedValue} can't be converted to number`);
    }

    return convertedValue;
  },
);
export const passwordSchema = z
  .string()
  .trim()
  .min(8, "Password must have at least 8 characters");
export const urlSchema = z.string().trim().url();
