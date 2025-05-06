import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";
import { RHFError } from "../RHFError";

export const RHFTextField = ({
  name,
  registerOptions,
}: {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string> | undefined;
}) => {
  const { register } = useFormContext();
  return (
    <div>
      <label>
        <input {...register(name, registerOptions)} />
      </label>
      <RHFError name={name} />
    </div>
  );
};
