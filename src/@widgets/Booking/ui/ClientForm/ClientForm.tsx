'use client'

import React from 'react'
import { RHFClientForm } from '@shared'

export const ClientForm = () => {
  const handleSubmit = (data: any) => {}
  return <RHFClientForm onSubmit={handleSubmit} title="Укажите ваши данные" />
}
