'use client'

import { useForm, FormProvider } from 'react-hook-form'
import { PhoneField, SubmitButton, NameField } from '..'

export const ClientForm = ({
  title,
  onSubmit,
}: {
  title: string
  onSubmit: (data: unknown) => void
}) => {
  const methods = useForm<{ name: string; phone: string }>({
    mode: 'onBlur',
  })

  const { formState } = methods

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="bg-surface-container flex flex-col gap-4 rounded-xl p-6 shadow-md"
      >
        <h2 className="text-headline-sm text-on-surface">{title}</h2>
        <div className="mt-2 mb-1">
          <PhoneField name="Номер телефона" />
        </div>
        <div className="mb-1">
          <NameField name="Имя" />
        </div>
        <SubmitButton disabled={!formState.isValid}>Отправить</SubmitButton>
      </form>
    </FormProvider>
  )
}
