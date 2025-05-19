'use client'

import React from 'react'
import { useFreeTimesByBike } from '@entities'
import { normalizeDate, Chip, UI_VARIANT, UI_SIZE } from '@shared'

export const BikeSchedule: React.FC<{ selectedBikes: number[] }> = ({
  selectedBikes,
}) => {
  const { isPending, data } = useFreeTimesByBike({
    bikesIds: selectedBikes,
  })

  return (
    <div className="mt-4">
      <h2 className="p-1 text-lg">Доступное время:</h2>
      <div className="border-outline-variant mt-2 rounded-md border p-2">
        {!isPending &&
          data?.freeTimes?.length &&
          data?.freeTimes?.length > 0 && (
            <div className="flex gap-1">
              {data?.freeTimes.map((val, idx) => {
                const { hours, minutes } = normalizeDate(new Date(val))

                return (
                  <Chip
                    size={UI_SIZE.S}
                    variant={UI_VARIANT.Primary}
                    key={idx}
                    className=""
                  >
                    {hours}:{minutes}
                  </Chip>
                )
              })}
            </div>
          )}
      </div>
    </div>
  )
}
