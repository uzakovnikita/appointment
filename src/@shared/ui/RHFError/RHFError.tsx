import { useFormContext } from "react-hook-form";

export const RHFError = ({ name }: { name: string }) => {
  const { formState } = useFormContext();
  return <p>{formState.errors[name]?.message as string}</p>;
};
