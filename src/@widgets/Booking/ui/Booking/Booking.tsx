'use client'

import { ClientForm } from '../ClientForm'

export function Booking() {
  return (
    <div className="bg-surface text-on-surface flex flex-col gap-4">
      <h1 className="text-on-surface text-xl">Бронирование</h1>
      <ClientForm />
    </div>
  )
}
