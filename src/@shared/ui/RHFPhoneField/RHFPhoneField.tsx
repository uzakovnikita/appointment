import { useFormContext, Controller } from "react-hook-form";
import { MaskedInput, MASK } from "../MaskedPhoneInput";
import { RHFError } from "../RHFError";

export const RHFPhoneField = ({ name }: { name: string }) => {
  const { control, formState } = useFormContext();

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
            <div>
              <label>
                {name}
                <MaskedInput
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  style={{
                    borderColor: formState.errors[name]?.message
                      ? "red"
                      : "black",
                  }}
                />
              </label>
              <RHFError name={name} />
            </div>
          );
        }}
      />
    </>
  );
};
