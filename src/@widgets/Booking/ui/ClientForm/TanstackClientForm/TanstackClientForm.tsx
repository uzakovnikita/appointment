/* eslint-disable react/no-children-prop */
import { FieldInfo, MaskedInput, MASK, useAppForm, NameField } from "@shared";

export const TanstackClientForm = () => {
  const formLib = useAppForm({
      defaultValues: {
        name: "",
        phone: MASK,
      },
      onSubmit: async ({ value }) => {
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
          name="phone"
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
      {/* @ts-expect-error https://github.com/TanStack/form/discussions/1486 */}
      <NameField form={formLib} />
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
}