'use client'

import React from 'react'
import { ClientForm as Form } from '@shared'

export const ClientForm = () => {
  const handleSubmit = (data: any) => {}

  return <Form onSubmit={handleSubmit} title="Укажите ваши данные" />
}
