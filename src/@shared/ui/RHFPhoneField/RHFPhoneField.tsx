"use client";

import { useFormContext, Controller } from "react-hook-form";
import { MaskedInput, MASK } from "../MaskedPhoneInput";
import { Field } from "../FIeld";

export const RHFPhoneField = ({ name }: { name: string }) => {
  const { control, formState } = useFormContext();
  const errorMsg = formState.errors[name]?.message as string;
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={MASK}
        rules={{
          validate: (value) => {
            const checkFormat = /^\+7 \(\d{3}\) \d{3} - \d{2} - \d{2}$/.test(
              value
            );

            if (value === MASK) {
              return "Обязательное поле";
            }

            if (!checkFormat) {
              return "Некорректный формат телефонного номера";
            }

            return true;
          },
        }}
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Field name={name} error={errorMsg}>
              <MaskedInput onChange={onChange} onBlur={onBlur} value={value} />
            </Field>
          );
        }}
      />
    </>
  );
};
