import { z } from "zod";
import { RHFTextField } from "../RHFTextField";

export const nameSchema = z
  .string({
    invalid_type_error: "not valid format",
    required_error: "required",
  })
  .min(1, "required")
  .min(3, "name should have length more than 3")
  .max(10, "name should have length less than 11");

export const RHFNameField = ({ name }: { name: string }) => {
  return (
    <RHFTextField
      name={name}
      registerOptions={{
        validate: (value) => {
          const check = nameSchema.safeParse(value);
          if (check.error) {
            return check.error.errors[0].message;
          } else {
            return true;
          }
        },
      }}
    />
  );
};
