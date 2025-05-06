import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "../contexts";
import { TextField } from "../ui";

export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
  },
  formComponents: {},
});
