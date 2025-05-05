import type { AnyFieldApi } from "@tanstack/react-form";

export const ZodFieldInfo = ({ field }: { field: AnyFieldApi }) => {
  const mappedErrors = field.state.meta.errors.map((error) => {
    return error?.message;
  });
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em>{mappedErrors.join(", ")}</em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
};
