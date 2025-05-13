import { z } from 'zod'
import { Field } from '../FIeld'
import { Input } from '../Input'
import { useFormContext } from 'react-hook-form'

export const nameSchema = z
  .string({
    invalid_type_error: 'Не корректный формат',
    required_error: 'Обязательное поле',
  })
  .min(1, 'Обязательное поле')
  .regex(
    /^[a-zA-Zа-яА-ЯЁё]+$/,
    'Допустимы только буквы без пробелов, цифр и спецсимволов',
  )
  .min(3, 'Имя должно состоять из не меньше чем 3 символов')
  .max(10, 'Имя должно состоять из не больше чем 11 символов')

export const NameField = ({ name }: { name: string }) => {
  const { register, formState } = useFormContext()
  const errorMsg = formState.errors[name]?.message as string

  return (
    <Field name={name} error={errorMsg}>
      <Input
        {...register(name, {
          validate: (value) => {
            const check = nameSchema.safeParse(value)
            if (check.error) {
              return check.error.errors[0].message
            } else {
              return true
            }
          },
        })}
        name={name}
      />
    </Field>
  )
}
