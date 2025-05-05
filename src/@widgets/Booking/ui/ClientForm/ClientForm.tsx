/* eslint-disable react/no-children-prop */
"use client";

import React from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

import { FieldInfo, MaskedInput, MASK, ZodFieldInfo } from "@shared";

const clientNameSchema = z
  .string({
    required_error: "Обязательное поле",
    invalid_type_error: "Не верный формат имени",
  })
  .min(3, "Имя должно быть не меньше 3 символов")
  .max(10, "Имя должно быть не больше 10 символов");

export const ClientForm = () => {
  const formLib = useForm({
    defaultValues: {
      clientName: "",
      clientPhone: MASK,
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log('submit')
      console.log(value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        formLib.handleSubmit();
      }}
    >
      <div>
        <formLib.Field
          name="clientPhone"
          validators={{
            onBlur: ({ value }) => {
              const checkFormat = /^\+7 \(\d{3}\) \d{3} - \d{2} - \d{2}$/.test(
                value
              );

              if (value === MASK) {
                return "Обязательное поле";
              }

              if (!checkFormat) {
                return "Некорректный формат телефонного номера";
              }

              return false;
            },
          }}
        >
          {(field) => (
            <>
              <MaskedInput
                name={field.name}
                id={field.name}
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange((e.target as HTMLInputElement).value)
                }
                onBlur={field.handleBlur}
              >
                <label htmlFor={field.name}>Ваш номер</label>
              </MaskedInput>
              <FieldInfo field={field} />
            </>
          )}
        </formLib.Field>
      </div>

      <div>
        <formLib.Field
          name="clientName"
          validators={{
            onBlur: clientNameSchema,
          }}
        >
          {(field) => (
            <>
              <label htmlFor={field.name}>
                <input
                  onChange={(e) =>
                    field.handleChange((e.target as HTMLInputElement).value)
                  }
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  id={field.name}
                  name={field.name}
                />
                Ваше имя
              </label>
              <ZodFieldInfo field={field} />
            </>
          )}
        </formLib.Field>
      </div>
      <formLib.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <button type="submit" disabled={!canSubmit}>
            {isSubmitting ? "..." : "Submit"}
          </button>
        )}
      />
    </form>
  );
};
