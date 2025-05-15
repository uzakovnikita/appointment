'use client'

import React from 'react'
import { NamePhoneForm } from '@shared'

export const ClientForm = () => {
  const handleSubmit = (data: any) => {}

  return <NamePhoneForm onSubmit={handleSubmit} title="Укажите ваши данные" />
}
