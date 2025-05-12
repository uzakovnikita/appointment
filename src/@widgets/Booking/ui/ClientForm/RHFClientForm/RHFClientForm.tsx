"use client";

import { useForm, FormProvider } from "react-hook-form";
import { RHFPhoneField, SubmitButton } from "@shared";
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
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6 bg-surface-container-high rounded-xl shadow-md">
        <h2 className="text-headline-sm text-on-surface">Укажите ваши данные</h2>
        <div className="mb-1 mt-2">
          <RHFPhoneField name="Номер телефона" />
        </div>
        <div className="mb-1">
          <RHFNameField name="Имя" />
        </div>
        <SubmitButton disabled={!formState.isValid}>Отправить</SubmitButton>
      </form>
    </FormProvider>
  );
};
