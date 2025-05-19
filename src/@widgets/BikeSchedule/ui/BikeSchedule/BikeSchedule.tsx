'use client'

import React from 'react'
import { useFreeTimesByBike } from '@entities'
import { normalizeDate } from '@shared'

export const BikeSchedule: React.FC<{ selectedBikes: number[] }> = ({
  selectedBikes,
}) => {
  const { isPending, data } = useFreeTimesByBike({
    bikesIds: selectedBikes,
  })

  return (
    <div className="border-outline-variant bg-surface-container-low text-on-surface rounded-md border p-2">
      Доступное время
      {isPending && <div>Loading...</div>}
      {!isPending &&
        data?.freeTimes.map((val, idx) => {
          const { year, month, day, hours, minutes } = normalizeDate(
            new Date(val),
          )

          return (
            <li key={idx} className="">
              {hours}:{minutes} - {day}.{month}.{year}
            </li>
          )
        })}
    </div>
  )
}
