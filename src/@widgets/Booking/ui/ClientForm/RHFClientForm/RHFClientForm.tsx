"use client";

import { useForm, FormProvider } from "react-hook-form";
import { RHFPhoneField } from "@shared";
import { useEffect } from "react";
import { RHFNameField } from "@/@shared/ui/RHFNameField";

export const RHFClientForm = () => {
  const methods = useForm({
    mode: "onBlur",
  });

  const { reset, formState } = methods;

  const onSubmit = (data) => console.log(data);

  console.log(formState.errors);

  useEffect(() => {
    reset({
      name: "data",
    });
  }, [reset]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <RHFPhoneField name="clientPhone" />
        <RHFNameField name="clientName" />
        <input type="submit" disabled={!formState.isValid} />
      </form>
    </FormProvider>
  );
};
